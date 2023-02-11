const express = require('express');
require('dotenv').config();
require('C:/Users/Camillo/Documents/First_FullStack_Project/models/db.js');
const userRouter = require('C:/Users/Camillo/Documents/First_FullStack_Project/routes/user.js')

const User = require('C:/Users/Camillo/Documents/First_FullStack_Project/models/user.js')

const app = express()

app.use(express.json()); //middleware function
app.use(userRouter);

/* app.use((req, res, next) => {
    req.on('data', (chunk) => {
        console.log(chunk) //this will show the buffering of the data
        console.log(JSON.parse(chunk)) //o metodo parse nos permitirá visualizar os dados que foram passados para o metodo post.
        req.body = data;
    })
    next()
}) */

app.get('/test', (req, res) => {
    res.send('Hello world');

})
app.get('/', (req, res) => {
    res.send('Hello world');
});

/*O '/' significa que o servidor está lendo as informações do home route*/

app.listen(8000, () => {
    console.log('port is listening')
})
