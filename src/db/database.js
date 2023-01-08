const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize( 'railway' /* 'database' */, 'root', '2jbL3fjhMX27NKx99LHk', {
    host: 'containers-us-west-168.railway.app',
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
    port: 7366
});

module.exports = {
    sequelize
};
