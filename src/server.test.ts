import { response } from "express";
import supertest from "supertest";

import app from "./app";

const request = supertest(app);

test("GET /names", async () => {
  const response = await request
    .get("/names")
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(response.body).toEqual(["Ivan", "Ciccio", "Pippo"]);
});
