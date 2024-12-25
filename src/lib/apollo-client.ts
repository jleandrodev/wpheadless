import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://hml-blog-coliseu.seodev.ambienteseo.com.br/graphql",
  cache: new InMemoryCache(),
});
