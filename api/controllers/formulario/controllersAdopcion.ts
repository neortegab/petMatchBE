//import { buscarUsuario } from "./buscarUsuario"
const { Adopcions } = require("../../models/Adopcion")

export const createFormulario = async (id: string, body: any) => {
    //const id = body.id
    const { name, lastName, email, address, pais, phone, economicSituation, previousPetExperience, petAllergy, properHome, dailyPetTime, over18 } = body
//    const createFormulario = await Adopcions.create({ name,  lastName,  email,  address, pais, phone,  economicSituation,  previousPetExperience, petAllergy, properHome,  dailyPetTime,  over18,  adopcionId: id }) 
     const createFormulario = body
    return createFormulario  
}

