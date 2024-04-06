
import express, { Router } from "express";
import dotenv from "dotenv";
import calculoRoute from "./routes/calculo.route.js"

const app = express(); 
dotenv.config();

app.use("/Simulador",calculoRoute)
app.listen(process.env.PORT, () => console.log(`Servidor Iniciado en el puerto http://localhost:${process.env.PORT}`));


