import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/user", (req, res) => {
  const user: object = {
    name: "Angger",
    age: 20,
  };
  res.send({ status: 200, message: "Get data user Success", data: user });
});

app.listen(3000, () => {
  console.log("Server running in port 3000");
});
