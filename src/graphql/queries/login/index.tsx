import { gql } from "@apollo/client";

export const LOG_IN = gql`
  query login(
         $username: String!
         $password: String ){
        login(
            username: $username
            password: $password
            ) {
            accessToken
        }
}
`;

export default LOG_IN;