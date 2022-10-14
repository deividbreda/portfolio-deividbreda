import { gql } from "graphql-request"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { client } from "../../../services/graphql"

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: 'read:user',
                }
            }
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async signIn({ user }) {
            const { email } = user

            try {
                const query = gql`
                    query MyQuery {
                        people(stage: DRAFT) {
                            personEmail
                        }
                    }
                `

                const data = await client.request(query)

                const found = data.people.find(person => person.personEmail === email)

                if (!found) {
                    const personEmail = email

                    const createPerson = async (personEmail: string) => {
                        const mutation = gql`
                            mutation MyMutation($personEmail: String!) {
                                createPerson(data: {personEmail: $personEmail}) {
                                    id
                                }
                            }
                        `
                        const variables = {
                            personEmail
                        }

                        const data = await client.request(mutation, variables)
                    }

                    createPerson(personEmail)
                }

                return true;
            } catch {
                return false;
            }
        },
    }
})