const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

// Configure EJS
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Session
app.use(
    session({
        secret: "my-secret-key",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    })
);

// Authentication middleware
const authMiddleware = (req, res, next) => {
    if (req.session.isLoggedIn) {
        next();
    } else {
        res.redirect("/login");
    }
};

// Login page
app.get("/login", (req, res) => {
    res.render("login", { error: null });
});

// Login process
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Simple username and password
    if (username === "admin" && password === "123") {

        req.session.isLoggedIn = true;
        req.session.username = username;

        // Create cookie
        res.cookie(
            "lastVisit",
            new Date().toLocaleTimeString()
        );

        res.redirect("/dashboard");

    } else {
        res.render("login", {
            error: "Invalid credentials!"
        });
    }
});

// Dashboard - private route
app.get("/dashboard", authMiddleware, (req, res) => {

    const lastVisit = req.cookies.lastVisit || "First time";

    res.render("dashboard", {
        user: req.session.username,
        lastVisit: lastVisit
    });
});

// Logout
app.get("/logout", (req, res) => {

    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.redirect("/login");
    });

});

// Start server
app.listen(3000, () => {
    console.log("Server: http://localhost:3000/login");
});