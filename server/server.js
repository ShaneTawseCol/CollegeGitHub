const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(expresss.json());



//MongoDB connection
mongoose.connect('mongodb://localhost27017/weather', {
    useNewUrlParser:true,
    useUnifiedTopology: true});

    const db = mongoose.connection;
    db.model('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB');
    });
    



    
    //Routes')




app.get('/', (req, res) => {
    res.json({message:"Hello from the server"})
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})