import jsonwebtoken from "jsonwebtoken";
import User from '../schemas/User.js';
import bcryptjs from "bcryptjs";

const { sign } = jsonwebtoken;
const { compare } = bcryptjs;

class SessionController{
    async create(request, response) {
        const { username, password } = request.body
        
        //Verificar se o usuário existe no sistema
        const user = await User.findOne({
            username
        });

        if(!user) {
            return response.status(404).json({error: "User not found"});
        }

        //Verificar se a senha está correta
        const matchPassword = await compare(password, user.password);
        
        if(!matchPassword) {
            return response.status(404).json({error: "Incorrect username or password"});
        }

        const token = sign({}, "token", {
            subject: new String(user._id),
            expiresIn: "1d",
        });

        return response.json({
            token,
            user,
        });
    }
}

export default new SessionController();

