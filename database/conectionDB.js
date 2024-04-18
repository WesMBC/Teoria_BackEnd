import Mongoose from "mongoose";

try{
    Mongoose.connect(`mongodb+srv://weslinmbc:${process.env.DB}@basecluster.91d4oup.mongodb.net/?retryWrites=true&w=majority`)
    console.log("Conexion a la base de datos exitosa");
}catch (error){
    console.log("Erro en la conexion a la base de datos por error: \n "+error)
}

