import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://fibboweb.com/graphql",
  cache: new InMemoryCache(),
});
