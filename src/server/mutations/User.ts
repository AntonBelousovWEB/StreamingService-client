import { gql } from "@apollo/client";

export const REGISTER_USER = gql `
    mutation Mutation($registerUserInput: RegisterUserInput) {
        registerUser(registerUserInput: $registerUserInput) {
          email
          name
          streamKey
          tokenJWT
        }
    }
`
export const LOGIN_USER = gql `
    mutation Mutation($loginUserInput: LoginUserInput) {
        loginUser(loginUserInput: $loginUserInput) {
          email
          name
          streamKey
          tokenJWT
        }
    }
`