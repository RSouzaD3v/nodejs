import Content from '../models/Content.js';

export const createContent = (req, res) => {
    const emailOwner = req.user.email || req.body.emailOwner;
    const { title, description } = req.body;

    try {
        const content = new Content({
            emailOwner,
            title,
            description
        });

        content.save();

        res.status(201).json({ message: "Conteudo criado com sucesso!", content });
    } catch (e) {
        res.status(500).json({ message: "Erro ao criar um novo conteudo!" });
    }
}