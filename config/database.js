const { Sequelize } = require('sequelize');
const env = process.env;

const sequelize = new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD , {
    host: env.DB_HOST,
    dialect: 'mariadb',
    port: env.DB_PORT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

module.exports = { sequelize };
