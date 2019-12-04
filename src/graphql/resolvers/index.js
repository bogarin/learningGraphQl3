import models from "./modelsResolver";
export const resolvers = {
  Query: {
    getClientes: () => {
      return models.Clientes.getClientes();
    },
    getCliente: ({ input }) => {
      return models.Clientes.getCliente(input);
    }
  },
  Mutation: {
    crearCliente: ({ input }) => {
      return models.Clientes.newCliente(input);
    }
  }
};
