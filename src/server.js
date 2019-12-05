import mongoose from "mongoose";
import express from "express";
import graphqlHTTP from "express-graphql";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import { serviceMongo, serviceGql, serviceExpress } from "./services";
import config from "./environment";

const db = serviceMongo(config);
db({ mongoose }).connection();
const app = serviceExpress(express());
app.use("/graphql", serviceGql(graphqlHTTP).endPoint());
app.listen(config);
