import express, { response } from "express";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";

import { validate, planetSchema, PlanetData } from "./validation";

const prisma = new PrismaClient();

const app = express();

app.get("/planets", async (request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  response.setHeader("Access-Control-Allow-Origin", "*");
  const planets = await prisma.planet.findMany();
  response.json(planets);
});

app.post(
  "/planets",
  validate({ body: planetSchema }),
  async (request, response) => {
    const planet: PlanetData = request.body;

    response.status(201).json(planet);
  }
);

export default app;
