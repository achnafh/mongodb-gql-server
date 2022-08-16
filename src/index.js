import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import express from 'express';
import http from 'http';
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const startApolloServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start();
  server.applyMiddleware({ app });

  mongoose.connect("mongodb://0.0.0.0:27017/test", { 
        useNewUrlParser: true 
    });
  const port = Number(process.env.PORT ?? 4000)
  await new Promise(resolve => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
// start the mongodb server using: brew services start mongodb/brew/mongodb-community