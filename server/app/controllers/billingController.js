const Bill = require("../models/Bill");
const Booking = require("../models/Booking");

exports.generateBill = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const booking = await Booking.findById(bookingId)
      .populate("customer")
      .populate("service")
      .populate("mechanic");

    if (!booking) {
      return res.status(404).send("Booking not found");
    }

    // Generate invoice number (e.g. INV-20250001)
    const lastBill = await Bill.findOne().sort({ createdAt: -1 });
    let invoiceNumber = "INV-20250001";
    if (lastBill) {
      const lastNum = parseInt(lastBill.invoiceNumber.split("-")[1]);
      invoiceNumber = `INV-${lastNum + 1}`;
    }

    // Calculate total amount from services
    const totalAmount = booking.service.reduce((sum, s) => sum + s.price, 0);

    // Create bill
    const bill = new Bill({
      bookingId,
      invoiceNumber,
      customer: booking.customer._id,
      services: booking.service.map((s) => s._id),
      mechanic: booking.mechanic._id,
      amount: totalAmount,
    });

    await bill.save();

    res.status(201).json({
      message: "Bill generated successfully",
      bill,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
