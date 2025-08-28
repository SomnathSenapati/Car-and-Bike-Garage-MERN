require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const SwaggerOptions = require("./swagger.json");
const swaggerDocument = swaggerJsDoc(SwaggerOptions);
const path = require("path");
const dbCon = require("./app/config/db");

const app = express();

dbCon();

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("This is MY backend");
});

// admin route
const adminRoutes = require("./app/routes/admin/adminRoutes");
app.use("/admin", adminRoutes);

// const aboutRoutes = require("./app/routes/admin/aboutRoute");
// app.use("/about", aboutRoutes);

// const pricingRoutes = require("./app/routes/admin/pricingRoute");
// app.use("/pricing", pricingRoutes);

// const featuresRoutes = require("./app/routes/admin/featuresRoute");
// app.use("/features", featuresRoutes);

// const servicesRoutes = require("./app/routes/admin/servicesRoute");
// app.use("/services", servicesRoutes);

// const homeRoutes = require("./app/routes/admin/homeRoute");
// app.use("/home", homeRoutes);

// const contactRoutes = require("./app/routes/admin/contactRoute");
// app.use("/contact", contactRoutes);

// Routes
app.use("/api/auth", require("./app/routes/authRoutes"));
app.use("/api/users", require("./app/routes/userRoutes"));
// app.use("/api/vehicles", require("./app/routes/vehicleRoutes"));
app.use("/api/bookings", require("./app/routes/bookingRoutes"));
app.use("/api/mechanics", require("./app/routes/mechanicsRoutes"));
app.use("/api/services", require("./app/routes/serviceRoutes"));
app.use("/api/inventory", require("./app/routes/inventoryRoutes"));
app.use("/api/billing ", require("./app/routes/billingRoutes"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Server listen
const port = process.env.PORT || 2809;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

// /api/customers – CRUD for customers