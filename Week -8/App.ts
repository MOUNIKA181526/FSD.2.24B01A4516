import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";

declare global {
    namespace Express {
        interface SessionData {
            username?: string;
        }
    }
}

const app = express();

app.use(express.urlencoded({ extended: true }));

// EJS setup
app.set("view engine", "ejs");

// Session setup
app.use(
    session({
        secret: "mysecret",
        resave: false,
        saveUninitialized: false
    })
);

// Cookie setup
app.use(cookieParser());

// Login page
app.get("/", (req, res) => {
    res.render("login");
});

// Login
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && password === "1234") {

        // Maintain state using session
        req.session.username = username;

        // Create cookie
        res.cookie("username", username);

        res.redirect("/dashboard");
    } else {
        res.send("Invalid username or password");
    }
});

// Dashboard
app.get("/dashboard", (req, res) => {

    if (req.session.username) {

        // Read cookie
        const cookieUsername = req.cookies.username;

        res.render("dashboard", {
            username: req.session.username,
            cookieUsername: cookieUsername
        });

    } else {
        res.redirect("/");
    }
});

// Logout
app.get("/logout", (req, res) => {

    req.session.destroy((err) => {

        if (err) {
            res.send("Logout failed");
        } else {

            // Delete cookie
            res.clearCookie("username");

            res.redirect("/");
        }
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});