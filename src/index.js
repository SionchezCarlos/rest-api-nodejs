const express = require('express');

const app = express();

const morgan = require('morgan');

//sttings
app.set('port', process.env.PORT || 3000);
//app.set('json espaces', 2);

//middlewares
app.use(morgan('dev'));
//app.use(morgan('combined'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));


//starting server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${3000}`);
});