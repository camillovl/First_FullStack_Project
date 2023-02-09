const express = require('express');
require('dotenv').config();
require('C:/Users/Camillo/Documents/First_FullStack_Project/models/db.js');

const User = require('C:/Users/Camillo/Documents/First_FullStack_Project/models/user.js')

const app = express()

app.post('/create-user', async (req, res) => {
    const user = await User({
        fullname: 'Vinicius',
        email: 'john@email.com',
        passwrod: '1234',
    })
    res.json(user)
})

/*O '/' significa que o servidor está lendo as informações do home route*/
app.get('/', (req, res) => {
    res.send('Hello World')

})

app.listen(8000, () => {
    console.log('port is listening')
})
