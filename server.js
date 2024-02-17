const express = require("express");
const app = express();
const userRoute = require("./routes/users.js");
const PORT = process.env.PORT || 3000;

// middleware
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
