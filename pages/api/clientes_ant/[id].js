import { PrismaClient } from '@prisma/client';
import handleError from '../../../utils/handleErrors';
const prisma = new PrismaClient();

const handler = async (req, res) => {
    const { id } = req.query;
    switch (req.method) {
        case 'DELETE':
            const deleteCliente = await prisma.cliente.delete({
                where: {
                    id: parseInt(id),
                },
            });

            console.log(deleteCliente);

            break;
    }
};

export default handler;
