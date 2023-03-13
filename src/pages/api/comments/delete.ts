import { gql } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../services/graphql";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const id:string = req.body;

    const mutation = gql`
        mutation DeleteComment($id: ID!) {
            deleteComment(where: {id: $id}) {
                id
            }
        }
    `

    await client.request(mutation, id)

    res.status(200).json({ success: true })
    res.status(500).json({ id: id });
}