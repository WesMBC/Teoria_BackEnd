import {coneccion} from "../config/confgMongoose.js"


try{
    await coneccion();
    console.log("Conexion exitosa a la base de datos");
}catch(error){
    console.log("Error al conectar a la baase de datos", error);

}