const jwt=require("jsonwebtoken");

exports.verifyAdmin = function(req, res, next){
    
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }
        req.user = decoded;
  
        if(req.user.user_role=="admin"){
            next();
        }else{
          res.status(401).json({ message: 'Access denied' });

        }
        
    });
};
