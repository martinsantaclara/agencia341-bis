import { Cliente } from '../../../models/clientes';
import handleError from '../../../utils/handleErrors';

const clientes = async (req, res) => {
    if (req.method === 'GET') {
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
        try {
            const clientes = await Cliente.findAll({
                // include: {
                //     model: Maquina,
                //     attributes: ['NroMaquina', 'Descripcion'],
                // },
                order: [['id', 'ASC']],
            });
            res.status(200).json({
                data: clientes,
            });
        } catch (error) {
            handleError(res, error);
        }
    } else if (req.method === 'POST') {
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
        try {
            const { id, nombre, maximo3, entero, nonulo, positivo } = req.body;
            let nuevoCliente = await Cliente.create(
                {
                    id,
                    nombre,
                    maximo3,
                    entero,
                    nonulo,
                    positivo,
                },
                {
                    fields: [
                        'id',
                        'nombre',
                        'maximo3',
                        'entero',
                        'nonulo',
                        'positivo',
                    ],
                }
            );
            if (nuevoCliente) {
                return res.status(201).send({
                    type: 'success',
                    title: 'Nuevo Cliente',
                    message: 'Cliente creado exitosamente!!!',
                });
            }
        } catch (error) {
            handleError(res, error);
        }
    } else if (req.method === 'PUT') {
        const { id, nombre, maximo3, entero, nonulo, positivo } = req.body;
        try {
            const updatedRows = await Cliente.update(
                {
                    id,
                    nombre,
                    maximo3,
                    entero,
                    nonulo,
                    positivo,
                },
                {
                    where: { id },
                }
            );
            return res.status(200).send({
                type: 'success',
                title: 'Actualización de Cliente',
                message: 'Cliente actualizado exitosamente!!!',
            });
        } catch (error) {
            handleError(res, error);
        }
    } else {
        const { id } = req.query;
        try {
            const deletedRow = await Vendedor.destroy({
                where: { id },
            });
            res.json({
                message: 'Vendedor deleted successfully',
                deletedRow: deletedRow,
            });
        } catch (error) {
            res.status(500).json({
                error: error,
                message: 'Algo ha salido mal!!!',
            });
        }
    }
};

export default clientes;
