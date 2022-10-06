import express, { response } from "express";
import "express-async-errors";

const app = express();

app.get("/names", (request, response) => {
    response.json(["Ivan", "Ciccio", "Pippo"])
});

export default app