import { Mongoose } from "mongoose";
import {simulacion} from "../models/simulationModel.js";
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

    

    return res.status(200).json({ respuesta });
  } catch (error) {
    console.log(error);
    error.message = "Error al momento de ejecucion del caluclo";
    return res.status(500).json({ message: error.message });
  }
};

export const saveSimulacion =  async (req,res) => {
  try {
    const respuestasForm = [];
    forEach(req.query, async (conetnido) => {
      respuestasForm.push(conetnido);
    });

    let kValues = respuestasForm[0].split(',').map(function(numero) {
      return parseFloat(numero)
    })

    let yValues = respuestasForm[1].split(',').map(function(numero) {
      return parseFloat(numero)
    })

    let iValues = respuestasForm[2].split(',').map(function(numero) {
      return parseFloat(numero)
    })

    let depValues = respuestasForm[3].split(',').map(function(numero) {
      return parseFloat(numero)
    })



    
    
    //Guardado en la base de datos

    const numeroDeSimulacion = await simulacion.countDocuments()
    const fecha = new Date


    const nuevasimulacion = new simulacion ({
        nombre:     `simulacion ${numeroDeSimulacion+1}`,
        fecha:      `${fecha.getDay()}/${fecha.getDate()}/${fecha.getFullYear()}`,
        kValues:    kValues,
        yValues:    yValues,
        iValues:    iValues,
        depValues:  depValues
    })
    await nuevasimulacion.save();
    
    return res.status(200).json({mensaje: "Todo bien "})
  } catch (error) {
    return res.status(400).json({error: error})
  }
}


export const getSimulaciones = async (req,res) => {
  /*Funcion con el objetivo de traer la informacion general de las simulaciones guardadas en la base de datos*/
  try {

    let simulaciones = await simulacion.find().exec();
    let informacionGeneral = []

    for(const i in simulaciones){
      informacionGeneral.push([simulaciones[i].nombre,simulaciones[i].fecha])
    } 

    return res.status(200).json({conetnido: informacionGeneral})
  } catch (error) {
    return res.status(500).json({message: error.message});
  }

}

export const getSimulacion = async (req,res) => {
  try {
    const respuestasForm = [];
    forEach(req.query, async (conetnido) => {
      respuestasForm.push(conetnido);
    });

    const simulacionBuscada = await simulacion.find({nombre: respuestasForm[0]})

    return res.status(200).json({Simulacion:simulacionBuscada})
  } catch (error) {

    return res.status(400).json(("Hubo un error: " + error.message))
  }
}

