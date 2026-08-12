const userRouter = require ('./userRoute');
const profileRouter = require('./profileRoute')
const mainRoutes = (app)=>{
    app.use('/api/user', userRouter);
    app.use('/api/user', profileRouter);
}

module.exports = mainRoutes