import { response } from "express";
import supertest from "supertest";

import app from "./app";

import api from "./api"

const request = supertest(api)

test("GET /api", async () => {
  const response = await request
    .get("/api")
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(response.body).toEqual("http://numbersapi.com/random/math");
});
