import {NextApiRequest, NextApiResponse} from 'next';

//crear la ruta de hello
export default function handler(req: NextApiRequest, res:NextApiResponse){
    res.status(200).json([
        {mensaje: "Hola, estoy saludando desde la ruta Hello"},
        {mensaje: "Hola, estoy saludando desde la ruta Hello"}])
}