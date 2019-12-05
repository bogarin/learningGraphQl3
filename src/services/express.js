module.exports = app => ({
  use: (url, endpoint) => {
    app.use(url, endpoint);
  },
  listen: ({portNode}) => {
    app.listen(portNode, () => {
      console.log(`Funcionando el servidor en el puerto ${portNode}`);
    });
  }
});
