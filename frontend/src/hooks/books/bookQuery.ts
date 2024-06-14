import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

export function useBookQuery() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  return { loading, error, data };
}
