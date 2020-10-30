import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import next from "next";
import express from "express";
import UserResolver from "./src/resolvers/UserResolver";
import { createConnection, useContainer } from "typeorm";
import Container from "typedi";
import AuthenticationResolver from "./src/resolvers/AuthenticationResolver";

const nextApp = next({ dev: true });
const handler = nextApp.getRequestHandler();
useContainer(Container);
const PORT = 3000;

export const server = async () => {
  return nextApp.prepare().then(async () => {
    const app = express();
    /**
     * typeorm setup
     */
    try {
      await createConnection();
    } catch (error) {
      console.error(error);
    }

    /**
     * Typegraphql setup
     */
    const schema = await buildSchema({
      resolvers: [UserResolver, AuthenticationResolver],
      container: Container,
    });

    const apollo = new ApolloServer({
      schema,
      context: async ({ req, res }) => {
        return { res, req };
      },
    });
    apollo.applyMiddleware({ path: "/api/gql", app });
    app.all("*", (req, res) => handler(req, res)); // use page folder

    app.listen({ port: PORT }, () => {
      console.log(`Server ready at http://localhost:${PORT}`);
      console.log(`Graphql at http://localhost:${PORT}${apollo.graphqlPath}`);
      console.log(`Sub at ws://localhost:${PORT}${apollo.subscriptionsPath}`);
    });
  });
};
