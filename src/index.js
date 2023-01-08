const {app, server} = require('./app')
const {sequelize} = require('./db/database.js')

server.listen(app.get('PORT'), async () => {

    console.log('Servidor corriendo en el puerto: ', app.get('PORT'));

    // Coneccion a la base de datos
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});