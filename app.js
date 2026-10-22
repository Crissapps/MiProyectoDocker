
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.json({
    service: "docker-lab",
    status: "ok"
  });
});

app.get("/health", (_, res) => {
  res.status(200).send("ok");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Listening on ${port}`);
});
