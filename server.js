import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

app.get("/api/hello", cors(), (req, res) => {
  const responseObj = { message: "Hello from expressjs boilerplate." };

  res.json(responseObj);
});

const port = parseInt(process.env.PORT, 10) || 8000;

try {
  app.listen(port, () => {
    console.log(`> Server running on port ${port}`);
  });
} catch (err) {
  console.log("Cannot start the app. Something went wrong. ", err);
}