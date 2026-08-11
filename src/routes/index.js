const userRouter = require ('./userRoute');

const mainRoutes = (app)=>{
    app.use('/api/user', userRouter);
}

module.exports = mainRoutes