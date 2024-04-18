import mongoose, { Schema, model } from "mongoose";


//const arregloValores = new Schema ( {valores:mongoose.Types.Decimal128})

const Simulacionschema = new Schema(
    {
        autor:      String,
        //fecha:      Date,
        kValues:    [mongoose.Types.Decimal128],
        yValues:    [mongoose.Types.Decimal128],
        iValues:    [mongoose.Types.Decimal128],
        depValues:  [mongoose.Types.Decimal128],

    }
)

export const simulacion = model('Simulacion',Simulacionschema)
