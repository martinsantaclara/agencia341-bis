import { Cliente } from '../../../models/clientes';
const cliente = async (req, res) => {
    const { id } = req.query;
    switch (req.method) {
        case 'DELETE':
            const deletedRow = await Cliente.destroy({
                where: { id },
            });
            if (deletedRow !== 0) {
                res.status(200).send({
                    type: 'success',
                    title: 'Elimina Cliente',
                    message: 'Cliente eliminado exitosamente!!!',
                });
            } else {
                res.status(500).send({
                    type: 'danger',
                    title: 'Error inesperado!',
                    message: 'Contáctese con su Administrador',
                });
            }

            break;
    }
};

export default cliente;
