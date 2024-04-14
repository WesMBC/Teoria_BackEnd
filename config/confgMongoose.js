import { Mongoose } from "mongoose";

const mongooseConnect = new Mongoose()
async function coneccion(){
    mongooseConnect.connect(`mongodb+srv://weslinmbc:${process.env.DB}@basecluster.91d4oup.mongodb.net/?retryWrites=true&w=majority`)
}
export {coneccion};
