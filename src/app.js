import express from "express"
import { fileURLToPath } from 'url';   
import { dirname } from 'path';        
import path from 'path'

import { Server } from "socket.io"
import { router as productosRouter } from './routes/productosRouter.js'
import { router as carritosRouter } from './routes/carritosRouter.js'
import { router as vistasRouter } from "./routes/vistasRouter.js"
import { engine } from "express-handlebars"
import { config } from "./config/config.js"
import { conectaDB } from "./connDB.js"
const PORT = config.PORT
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    "/api/products",
    (req, res, next) => {
        req.serverSocket = io


        next()
    },
    productosRouter)


app.use("/api/carts", carritosRouter)
//--

app.use(express.static(path.join(__dirname, 'public')));
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
// app.set("views", "./src/views")
app.set('views', path.join(__dirname, 'views'));  


app.use("/", vistasRouter)
//--

app.get("/", (req, res) => {
    res.setHeader("content-Type", "text/plain");
    res.status(200).send("OK");
})

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`)
})

//- io config
const io = new Server(server) // const io=new Server(server)



conectaDB(config.MONGO_URL, config.DB_NAME);


