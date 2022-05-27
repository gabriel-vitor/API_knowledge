import User from "../schemas/User.js";
import bcryptjs from 'bcryptjs'
const { hash } = bcryptjs;

class UserController{
    async create(request, response) {
        const {name, email, username, password, phone} = request.body;
        console.log({
            name, 
            email, 
            username, 
            password, 
            phone
        });

        // retorna promise
        const passwordCrypt = await hash(password, 8);

        /**
         * este método retorna uma Promise, portanto é
         * necessário usar o await na frente.
         * para que toda essa parte termine antes de
         * rodar o restante.
         * todo await necessita de um async
         * portanto, o create acima usará async
         */
        
        const user = await User.create({
            name, 
            email, 
            username, 
            password: passwordCrypt ,
            phone
        });
        return response.json(user);
    }
    async index(request, response) {
        const users = await User.find();
        return response.json(users);
    }
}

export default new UserController();