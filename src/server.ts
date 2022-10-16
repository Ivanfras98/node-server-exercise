import "dotenv/config";
import app from "./app";

// import api from "./api"

const port = process.env.PORT; // Il file .env non viene pushato su github, commenta questo e togli il commento a riga 6.
// const port = 3000
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
