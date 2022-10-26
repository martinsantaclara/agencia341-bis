import Sequelize from 'sequelize';
export const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        dialect: 'mysql',
        host: process.env.HOSTNAME,
        port: '3306',
        logging: false, // disable logging; default: console.log
        dialectOptions: {
            // requestTimeout: 30000, // timeout = 30 seconds
        },
        define: {
            freezeTableName: true,
        },
    }
);
