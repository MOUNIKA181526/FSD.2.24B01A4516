import express, { Request, Response } from "express";

const app = express();

// Configure EJS Template Engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req: Request, res: Response) => {

    const student = {
        id: 101,
        name: "Mounika",
        branch: "AI & DS"
    };

    res.render("student", { student });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
