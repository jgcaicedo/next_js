import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler ( req: NextApiRequest , res: NextApiResponse){

    //validar que sea un metodo Get
    if(req.method !== 'GET'){
        return res.status(405).json({error:"Metodo no permitido"});
    }

    const success = Math.random()> 0.5;
    console.log(success);

    if(!success){
        return res.status(500).json({error:"Error en la informacion del servidor "});
    }
    res.status(200).json([{mensaje:"Todo esta funcionando correctamente"},{mensaje:'Esta es la la prueba de errores'}]);
}