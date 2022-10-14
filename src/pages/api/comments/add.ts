import { gql } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../services/graphql";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const variables: { slug: string;  commentDescription: string; commentPersonImage: string; name: string } = req.body;

    const mutation = gql`
        mutation CreateComment($slug: String!, $name: String!, $commentDescription: String!, $commentPersonImage: String!) {
            createComment(
                data: {name: $name, commentDescription: $commentDescription, post: {connect: {slug: $slug}}, slug: $slug, commentPersonImage: $commentPersonImage}
            ) {
                id
            }
        }
    `

    await client.request(mutation, variables)

    res.status(200).json({ success: true })
}