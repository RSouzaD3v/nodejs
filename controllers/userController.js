import User from "../models/User";

export const userCreate = async (req, res) => {
    const { name, email, password } = req.body;

    const user = new User({
        name,
        email,
        password
    });

    await user.save();

    res.status(201).json({ message: "Usuário Criado com sucesso!", user });
}