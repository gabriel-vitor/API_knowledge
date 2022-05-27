import jsonwebtoken from "jsonwebtoken";
const { verify } = jsonwebtoken;
//import jwt from jsonwebtoken;

//const { verify } = jsonwebtoken;

export default async(request, response, next) => {
    const authHeader = request.headers.authorization;

    if (authHeader) {
        return response.status(401).json({error: "User not authorizated"});

    }

    //Bearer 
    const [, token] = authHeader.split("");

    try {
        verify(token, "token");
        return next();
    }catch(err) {
        return response.status(401).json({error:"invalid jwt token"});
    }
};