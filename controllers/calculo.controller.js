import { parse } from "dotenv";
import { forEach } from "underscore";

export const calculodegrafica = async (req, res) => {
  try {
    console.log("ejecucion en proceso");
    return res.status(200).json({ respuesta1: "mamalonha" });
  } catch (error) {
    console.log(error);
    error.message = "Error al momento de ejecucion del caluclo";
    return res.status(500).json({ message: error.message });
  }
};

export const calcIndividual = async (req, res) => {
  try {
    const respuestasForm = [];
    forEach(req.query, async (conetnido) => {
      respuestasForm.push(conetnido);
    });

    /* 
        const s = 0.1; // tasa de ahorro
        const d = 0.1; // tasa de depreciación
        const n = 0.2; // crecimiento de la población
        const g = 0.05; // progreso tecnológico
        const alpha = 0.5; // elasticidad de la producción respecto al capital 
        */

    const s = parseFloat(respuestasForm[0]);
    const d = parseFloat(respuestasForm[1]);
    const n = parseFloat(respuestasForm[2]);
    const g = parseFloat(respuestasForm[3]);
    const alpha = parseFloat(respuestasForm[4]);

    console.log(s, d, n, g, alpha);

    // Funciones del modelo de Solow
    const y = (k) => Math.pow(k, alpha); // Output por trabajador
    const i = (k) => s * y(k); // Inversión por trabajador
    const dep = (k) => (n + g + d) * k; // Depreciación efectiva por trabajador

    // Generar datos para el gráfico
    const kValues = Array.from({ length: 100 }, (_, i) => i);
    const yValues = kValues.map((k) => y(k));
    const iValues = kValues.map((k) => i(k));
    const depValues = kValues.map((k) => dep(k));

    const respuesta = {
      kValues: kValues,
      yValues: yValues,
      iValues: iValues,
      depValues: depValues,
    };

    console.log("respuesta", respuesta);

    return res.status(200).json({ respuesta });
  } catch (error) {
    console.log(error);
    error.message = "Error al momento de ejecucion del caluclo";
    return res.status(500).json({ message: error.message });
  }
};
