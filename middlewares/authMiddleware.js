const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido.' });
    }

    if (token !== 'abcde') {
        return res.status(403).json({ message: 'Token inválido.' });
    }

    next();
};

export default authMiddleware;
