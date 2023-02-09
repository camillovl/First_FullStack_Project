const mongoose = require('mongoose');

mongoose.set("strictQuery", true); /* caso essa linha não seja adicionada,
o codigo funcionará normalmente
mas ficará aparecendo repetidamente um erro */

mongoose.connect(process.env.MONGO_URI,).then(() => {
    console.log('our db is connected')
})
    .catch(err => console.log(err.message))