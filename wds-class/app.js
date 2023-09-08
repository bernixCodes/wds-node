const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  //   res.status(500).send("Go there");
  //   res.status(500).json({ message: "Error" });
  //   res.json({ message: "You can do it!" });
  //   res.send("Hi");
  //   res.download("server.js");
  res.render("index", { text: "World" });
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(3000);
