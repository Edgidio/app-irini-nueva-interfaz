const Server = require('./app')

Server.listen(3000, () => {
    console.log('listening on *:3000');
});