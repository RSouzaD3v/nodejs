export const usersController = (req, res) => {
    res.send([
        {
            name: 'Rafael',
            sobrenome: 'Francisco'
        },
        {
            name: 'Rafael',
            sobrenome: 'Francisco'
        },
        {
            name: 'Rafael',
            sobrenome: 'Francisco'
        }
    ]);
};

export const usersControllerPost = (req, res) => {
    const { name } = req.body;

    res.send({ error: false, message: name });
};
