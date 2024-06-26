import 'dotenv/config'
import "./database/conectionDB.js"
import bodyParser from 'body-parser';
import express, { Router } from "express";
import cors from "cors";
import "./database/conectionDB.js"
import "./config/confgMongoose.js"
import calculoRoute from "./routes/calculo.route.js";
import { simulacion } from "./models/simulationModel.js";
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use("/Simulador", calculoRoute);
app.listen(process.env.PORT, () =>
  console.log(
    `Servidor Iniciado en el puerto http://localhost:${process.env.PORT}`
  )
);
