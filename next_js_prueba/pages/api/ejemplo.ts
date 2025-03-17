import {NextApiRequest, NextApiResponse} from 'next';

//crear la ruta de hello
export default function handler(req: NextApiRequest, res:NextApiResponse){
    res.status(200).json({mensaje: "Hola, este es un mesaje de de ejemplo"})
}