const handleError = (res, error) => {
    if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(409).send({
            type: 'warning',
            title: 'Valor Duplicado!',
            message: error.original.sqlMessage,
        });
    } else if (error.name === 'SequelizeValidationError') {
        const message = error.message;
        res.status(422).send({
            type: 'warning',
            title: 'Error de Validación!',
            message: message.replace(/Validation error: /g, ''),
        });
    } else if (error.name === 'SequelizeDatabaseError') {
        console.log(error.message);
        res.status(422).send({
            type: 'warning',
            title: 'Error en Datos!',
            message: error.message,
        });
    } else if (error.name === 'SequelizeHostNotFoundError') {
        res.status(500).send({
            type: 'danger',
            title: 'Error de conexión!',
            message: 'Recurso no encontrado. Contáctese con su Administrador',
        });
    } else {
        res.status(500).send({
            type: 'danger',
            title: 'Error inesperado!',
            message: 'Contáctese con su Administrador',
        });
    }
};

export default handleError;
