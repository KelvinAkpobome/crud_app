const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//connecting to mongodb Atlas
mongoose.connect(process.env.DB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('connected'))
.catch((err) => console.log(`Sorry, ${err.message} occurred`));
