import { resolvers } from "./resolvers";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
const typeDefs = importSchema(`${__dirname}/schemas/schema.graphql`);
const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = { schema };
