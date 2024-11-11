const homePage = (req, res) => {
    res.send('Bem-vindo à página inicial!');
};

const productPage = (req, res) => {
    res.send('Aqui estão os produtos!');
};

export default { homePage, productPage };
