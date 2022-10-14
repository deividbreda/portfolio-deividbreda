import { gql } from "graphql-request"
import NextAuth from "next-auth"
import { client } from "../../../services/graphql"

import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";

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

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),

        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
        })
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