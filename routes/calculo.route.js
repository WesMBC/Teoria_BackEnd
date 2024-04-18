import Express from "express";
import { calculodegrafica,calcIndividual,getSimulaciones,getSimulacion,saveSimulacion } from "../controllers/calculo.controller.js"

const router = Express.Router();
router.get("/calculos",calculodegrafica)
router.post("/calc",calcIndividual)
router.post("/savesimulacion",saveSimulacion)
router.get("/getsimulaciones",getSimulaciones)
router.get("/getsimulacion",getSimulacion)


export default router;
