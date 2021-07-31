console.log('Server Live');
// Server Setup
const express = require('express'); // load express library
const bodyParser = require('body-parser'); // load body parser module
const app = express(); // create 'app' (server)
const port = 5000;

// global variable
// answer will be returned to client
// resets after each return to client
let answer = [];
let numOne = null;
let operator = null;
let numTwo = null;




app.use(express.static('./server/public')); // tell express where to find all public files
app.use(bodyParser.json()); // setup body-parser
app.use(bodyParser.urlencoded({extended:true})); // tell express how to read data from client (json || url-encoded)



// receiving data from client
app.post('/math', (req, res) => {
    console.log('New math problem received');
    console.log('req.body', req.body);
    numOne = Number(req.body.numOne);
    operator = req.body.operator;
    numTwo = Number(req.body.numTwo);
    /*  req.body = {
            numOne: 
            operator: 
            numTwo:
    } */

    // validate our data
    if (!numOne || !operator || !numTwo) {
        res.sendStatus(400).send({
            message: 'Missing a required field.'
        });
    }


    // call calcAnswer to determine answer
    calcAnswer();

    res.sendStatus(201);
}); // end app.post

// sending data to client~
app.get('/math', (req, res) => {
    console.log('Math problem solved!', answer);
    res.send(answer);
}); // end app.get 








app.listen(port, () => {
    console.log('Listening to port:', port);
}); // listen for requests



// calculateAnswer
function calcAnswer() {
    let result = 0;
    // if statements to determine what the operation will be
    if (operator == 'plus') {
        result = numOne + numTwo;
        answer.push(result);
    } //end if 'plus' statement
} // end operations