const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const { PORT } = require("./constants");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.set('views','./views');
app.set('view engine', 'ejs');


//Controlers
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* app.use(express.static(path.join(__dirname, "public"))) */
app.use(express.static('./public'))
app.use("/api/productos", require("./src/Routes/productos.routes"));
app.use("/api/carrito", require("./src/Routes/carrito.routes"));



io.on('connection',socket => {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', console.log('Bienvenido al chat'));

    socket.on('new-message',data => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});




app.listen(PORT, () => console.log(`Server on Port ${PORT}`));
