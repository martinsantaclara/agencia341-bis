import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

export const Cliente = sequelize.define(
    'cliente',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        nombre: {
            type: Sequelize.STRING(15),
            // validate: {
            //     len: [1, 15],
            // },
            // unique: true,
        },
        maximo3: {
            type: Sequelize.STRING(3),
            validate: {
                len: [1, 3],
            },
        },
        entero: {
            type: Sequelize.INTEGER,
            unique: true,
        },
        nonulo: {
            type: Sequelize.STRING(10),
            validate: {
                len: [1, 10],
            },
            // allowNull: false,
        },
        positivo: {
            type: Sequelize.INTEGER,
            validate: {
                min: 0,
            },
        },
    },
    {
        timestamps: false,
    }
);
