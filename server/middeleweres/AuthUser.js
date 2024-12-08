
import jwt from 'jsonwebtoken';


export const AuthUser = async (req, res, next) => {
    try {
       
    const Token = req.header("Authorization");



    const token = req.header("Authorization")?.split(" ")[1];

      console.log(token , "token in userAuth");

      if(!token) {
          return res.status(401).send('Access Denied');
      }
    

        const decoded = jwt.verify(token, 'secret');
        console.log(decoded);

        req.user = decoded.id;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send('Invalid Token');
    }
}