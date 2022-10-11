import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.query.secret !== process.env.HYGRAPH_TOKEN) {
        return res.status(401).json({ message: "Erro: Token Inválido" });
    }

    if (!req.body) {
        return res.status(422).json({ message: "Erro: Requisição Inválida" });
    }

    try {
        await res.revalidate(path.join("/", req.body.data.slug));
        return res.status(200).json({ revalidated: true });
    } catch (err) {
        return res.status(500).send("Erro de Validação");
    }
}