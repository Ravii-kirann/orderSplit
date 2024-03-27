const express = require('express');

const app = express();
const connectDB = require('./db/connect');
const errorHandlerMiddleware = require('./middleware/error-handler');
const billRoutes = require('./routes/billRoutes');
const participantRoute = require('./routes/participantRoutes.js')

//db connections and env 

require('dotenv').config()
require("./db/connect")
//app.use
const port = 3000;
//middleware
//app.use(notFound)
app.use(
    express.urlencoded({ extended : true})
)
app.use(express.json())
app.use(errorHandlerMiddleware)


//routes
app.use('/api', billRoutes);
app.use("/api",participantRoute);

//start
const start = async () =>{
    try {
        await  connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`Server is Listening to ${port}`))
    } catch (error) {
         console.log(error)
    }
}
start()