import Express from "express";
import { calculodegrafica,calcIndividual } from "../controllers/calculo.controller.js"

const router = Express.Router();
router.get("/calculos",calculodegrafica)
router.post("/calc",calcIndividual)

export default router;
