console.log('Server.js');
// Server Setup
const express = require('express'); // load express library
const bodyParser = require('body-parser'); // load body parser module
const app = express(); // create 'app' (server)
const port = 5000;
app.use(express.static('./server/public')); // tell express where to find all public files
app.use(bodyParser.json()); // setup body-parser
app.use(bodyParser.urlencoded({extended:true})); // tell express how to read data from client (json || url-encoded)


app.post('/math', (req, res) => {
    console.log('New math problem received');
    console.log('req.body', req.body);
    let newMathProblem = req.body;
    
    
    
}); // end app.post








app.listen(port, () => {
    console.log('Listening to port:', port);
}); // listen for requests