import bcrypt from 'bcryptjs';
import User from "../models/User.js";

export const userCreate = async (req, res) => {
    const { name, email, password } = req.body;

    // Verifica se todos os campos foram fornecidos
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Todos os campos precisam ser preenchidos" });
    }

    try {
        // Verifica se o email já está cadastrado
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "O email já está cadastrado" });
        }

        // Criptografa a senha antes de salvar
        const hashedPassword = await bcrypt.hash(password, 10); // 10 é o número de saltos para o hash

        // Cria o novo usuário com a senha criptografada
        const user = new User({
            name,
            email,
            password: hashedPassword, // Salva a senha já criptografada
        });

        // Salva o usuário no banco de dados
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
