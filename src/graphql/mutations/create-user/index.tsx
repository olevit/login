import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  
mutation createUser(
    $email: String!
    $roleId: String!
    $username: String!
    $password: String
) {
    createUser(
        email: $email
        roleId: $roleId
        username: $username
        password: $password
        ) {
    accessToken
            currentUser {
            _id
            }
        }
    }
`;

export default CREATE_USER_MUTATION;