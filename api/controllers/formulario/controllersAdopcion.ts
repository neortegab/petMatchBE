//import { buscarUsuario } from "./buscarUsuario"
const { Adopcions } = require("../../models/Adopcion")

//me trae todo los formulario
export const allFormulario = async () => {
    const response = await Adopcions.findAll()
    return response; 
}

//se cargan los dato a la tabla Adopcions
export const createFormulario = async (id: string, body: any) => {
    //const id = body.id
    const { name, lastName, email, address, pais, phone, economicSituation, previousPetExperience, petAllergy, properHome, dailyPetTime, over18 } = body
//    const createFormulario = await Adopcions.create({ name,  lastName,  email,  address, pais, phone,  economicSituation,  previousPetExperience, petAllergy, properHome,  dailyPetTime,  over18,  adopcionId: id }) 
     const createFormulario = body
    return createFormulario  
}

