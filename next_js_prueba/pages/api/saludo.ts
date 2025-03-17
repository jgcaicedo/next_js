//importar la res  y req de next
import type { NextApiRequest, NextApiResponse } from "next"; 


//crear la solucitud y la respuesta 
export default function handler(req: NextApiRequest, res:NextApiResponse){
    //crear la contante que vamos a llamar
    const {nombre} = req.query;
    
    //encaso de que no haya un nombre se envia un error 400
    if(!nombre){
        return res.status(400).json({error:"Falta el parametro nombre para esta respuesta"});
    }

    //respuesta
    res.status(200).json({mensaje:`Hola, soy ${nombre}`});
}