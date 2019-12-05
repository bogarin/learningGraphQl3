module.exports = graphqlHTTP => ({
  endPoint: (schema, graphiql) => {
    return graphqlHTTP({
      schema,
      graphiql: graphiql
    });
  }
});
