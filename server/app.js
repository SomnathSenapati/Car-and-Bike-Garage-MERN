require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const SwaggerOptions = require("./swagger.json");
const swaggerDocument = swaggerJsDoc(SwaggerOptions);
const path = require("path");
const dbCon = require("./app/config/db");
const session = require("express-session");

const app = express();

dbCon();

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(
  session({
    secret: "smsooimuknmhaiattsha",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60,
      path: "/",
    },
  })
);


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("landing");
});

// admin route
const adminAuthRoutes = require("./app/routes/admin/authRoutes");
app.use("/admin", adminAuthRoutes);

const adminRoutes = require("./app/routes/admin/adminRoutes");
app.use("/admin", adminRoutes);

const mechanicsRoute = require("./app/routes/admin/mechanicsRoute");
app.use("/mechanics", mechanicsRoute);

const userRoute = require("./app/routes/admin/userRoutes");
app.use("/user", userRoute);

const bookingRoute = require("./app/routes/admin/bookingRoutes");
app.use("/booking", bookingRoute);


// admin route
const technicianRoutes = require("./app/routes/technician/technicianRoutes");
app.use("/technician", technicianRoutes);



// API Routes
app.use("/api/auth", require("./app/routes/authRoutes"));
app.use("/api/users", require("./app/routes/userRoutes"));
app.use("/api/vehicles", require("./app/routes/vehicleRoutes"));
app.use("/api/bookings", require("./app/routes/bookingRoutes"));
app.use("/api/mechanics", require("./app/routes/mechanicsRoutes"));
app.use("/api/services", require("./app/routes/serviceRoutes"));
app.use("/api/billing ", require("./app/routes/billingRoutes"));
app.use("/api/user ", require("./app/routes/userRoutes"));


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Server listen
const port = process.env.PORT || 2809;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});