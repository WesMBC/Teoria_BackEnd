
import { forEach } from "underscore";

export const calculodegrafica = async (req, res) =>{
    try {
        console.log("ejecucion en proceso")
        return res.status(200).json({respuesta1:"mamalonha"})
    } catch (error) {
        console.log(error)
        error.message = "Error al momento de ejecucion del caluclo"
        return res.status(500).json({message:error.message});

    }
}

export const calcIndividual = async(req,res) =>{
    try {
        
        const respuestasForm = [];
        forEach(req.query, async (conetnido) => {

            respuestasForm.push(conetnido);
        })
        
        let calculo = (parseInt(respuestasForm[0])+parseInt(respuestasForm[1])+parseInt(respuestasForm[2]))*parseInt(respuestasForm[3])

        
        
        return res.status(200).json({contenido:calculo})
    } catch (error) {
        console.log(error)
        error.message = "Error al momento de ejecucion del caluclo"
        return res.status(500).json({message:error.message});
    }
}
