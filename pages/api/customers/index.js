import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const handler = async (req, res) => {
    const allClientes = await prisma.cliente.findMany();
    res.status(200).json(allClientes);
};

export default handler;
