import moongose from 'mongoose';

const connectDb = async () => {
    try {
        await moongose.connect(process.env.MONGO_URI);

        console.log('MongoDb Conectado com sucesso!');
    } catch (e) {
        console.log('Erro ao conectar com mongoDb');
        process.exit(1);
    }
};

export default connectDb;