// * `LOGIN_USER` will execute the `loginUser` mutation set up using Apollo Server.

import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// 	* `ADD_USER` will execute the `addUser` mutation.

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// 	* `SAVE_BOOK` will execute the `saveBook` mutation.
export const SAVE_BOOK = gql`
  mutation SaveBook($input: savedBook) {
    saveBook(input: $input) {
      _id: ID
      username: String
      email: String
      password: String
    }
  }
`;

// 	* `REMOVE_BOOK` will execute the `removeBook` mutation.
export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: String) {
    removeBook(bookId: $bookId) {
      _id: ID
      username: String
      email: String
      password: String
    }
  }
`;
