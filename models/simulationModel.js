import { ObjectId } from "mongodb";
import mongoose, { Schema, model } from "mongoose";


//const arregloValores = new Schema ( {valores:mongoose.Types.Decimal128})

const Simulacionschema = new Schema(
    {
        id:         mongoose.Types.ObjectId,
        nombre:     String,
        fecha:      String,
        kValues:    [mongoose.Types.Decimal128],
        yValues:    [mongoose.Types.Decimal128],
        iValues:    [mongoose.Types.Decimal128],
        depValues:  [mongoose.Types.Decimal128],
        tasaAhorro: String,
        tasaDepreciacion: String,
        tasaCrecimientoPoblacional: String,
        tasaProgresoTecnologico: String,
        coeficienteElasticidad: String,

    }
)

export const simulacion = model('Simulacion',Simulacionschema)
