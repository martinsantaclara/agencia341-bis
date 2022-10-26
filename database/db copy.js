import Sequelize from 'sequelize';

export const sequelize = new Sequelize('pruebaagencia', 'root', '460878fijo', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    logging: false, // disable logging; default: console.log
    dialectOptions: {
        // requestTimeout: 30000, // timeout = 30 seconds
    },
    define: {
        freezeTableName: true,
    },
});
