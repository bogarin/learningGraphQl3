import { clientes } from "../../../data";

const getClientes = () => {
  return clientes;
};
const getCliente = input => {
  return clientes.filter(cliente => {
    return cliente.id == input;
  })[0];
};
const newCliente = input => {
  input.id = clientes.length;
  clientes.push(input);
  return input;
};

module.exports = {
  getCliente,
  getClientes,
  newCliente
};
