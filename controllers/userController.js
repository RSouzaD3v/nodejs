import User from "../models/User.js";

export const userCreate = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Todos os campos precisam ser preenchidos" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "O email já está cadastrado" });
        }

        const user = new User({
            name,
            email,
            password,  
        });

        await user.save(); 

        res.status(201).json({ message: "Usuário criado com sucesso!", user });
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar usuário", details: error.message });
    }
};


export const getUsers = async (req, res) => {
    try {
        const users = await User.find().lean();

        res.status(200).json({
            error: false,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Erro ao buscar usuários',
            details: error.message,
        });
    }
};
