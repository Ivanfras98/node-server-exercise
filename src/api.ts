import express, { response } from "express";
import "express-async-errors";
import axios from "axios";
const api = express();

api.get("/api", async (req, res) => {
  const request = axios
    .get("http://numbersapi.com/random/math")
    .then((response) => {
      console.log(response.data);
      res.setHeader("Content-Type", "application/json");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(JSON.stringify(response.data));
    });
});

export default api;
