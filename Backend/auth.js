import jsonwebtoken from 'jsonwebtoken';

// Define your secret key
const secretKey = "nkfjkjhjkjhfdjkhfjkfjkfmkjkjkfjkjkfirioruioruijilfji";

export const createToken = (id) => {
    const token = jsonwebtoken.sign({ id: id.toString() }, secretKey);
    console.log("token", token);
    return token;
};

export const authoToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
        res.status(403).json('Person is unauthorized');
    }

    jsonwebtoken.verify(token, secretKey, (error, User) => {
        if (error) {
            res.status(403).json("you are not authorized");
        } else {
            req.User = User;
            next();
        }
    });
};
