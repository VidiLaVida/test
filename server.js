const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // use Render's port

app.get("/", (req, res) => {
  const size = Math.floor(Math.random() * 30) + 1; // random 1–30
  res.send(`Your PP size is: ${size} inches today.`);
});

app.listen(PORT, () => {
  console.log(`PP size generator running on port ${PORT}`);
});
