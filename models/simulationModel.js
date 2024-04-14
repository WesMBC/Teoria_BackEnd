import { Schema, model } from "mongoose";



const Simulacionschema = new Schema(
    {
        autor:      String,
        //fecha:      Date,
        kValues:    Number,
        yValues:    Number,
        iValues:    Number,
        depValues:  Number,

    }
)

export const simulacion = model('Simulacion',Simulacionschema)
