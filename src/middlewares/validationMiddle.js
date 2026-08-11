const validationMiddle = (req, res, next) =>{
    const {name, email, mobNumber, password} = req.body;
    if(!name || !email || !mobNumber || !password){
        return res.status(400).json({
            message: "All fields are required"
        })
    }else if(!/^[a-zA-Z ]+$/.test(name)){
        return res.status(400).json({
            message: "Name should only contain letters and spaces"
        })
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        return res.status(400).json({
            message: "Invalid email format"
        })
    }else if(!/^[0-9]{10}$/.test(mobNumber)){
        return res.status(400).json({
            message: "Mobile number should be 10 digits"
        })
    }else if(password.length < 6){
        return res.status(400).json({
            message: "Password should be at least 6 characters long"
        })
    }
    next();
}
module.exports = validationMiddle;