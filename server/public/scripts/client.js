$(document).ready(onReady);

function onReady() {
    console.log('client');

// click listeners 
    $('#equalSignOut').on('click', equalsButton);
    $('#clearSignOut').on('click', clearButton);
    $('#plusSignOut').on('click', additionButton);
    $('#minusSignOut').on('click', subtractionButton);
    $('#multiplySignOut').on('click', multiplicationButton);
    $('#divideSignOut').on('click', divisionButton);
}

// GLOBAL VARIABLES
// operation buttons will change this 
let operationChosen = null;
let operationHistory = [];


// // Operation Buttons
function additionButton() {
    console.log('Addition Button');
    operationChosen = '+';
    console.log('Operation Chosen:', operationChosen);
} // end additionButton

function subtractionButton() {
    console.log('Subtraction Button');
    operationChosen = '-';
    console.log('Operation Chosen:', operationChosen);
} // end subtractionButton

function multiplicationButton() {
    console.log('Multiplication Button');
    operationChosen = 'x';
    console.log('Operation Chosen:', operationChosen);
} // end multiplicationButton

function divisionButton() {
    console.log('Division Button');
    operationChosen = '/';
    console.log('Operation Chosen:', operationChosen);
} // end divisionButton

function clearButton() {
    console.log('Clear Button');
    // clear user inputs
    $('#numOneIn').val('');
    $('#numTwoIn').val('');
    // put cursor back on numOne for user
    $('#numOneIn').focus();
} // end clearButton


function equalsButton() {
    console.log('Equals Buttons');
    // This button will actually grab the data and send it the server
    const newProblem = {
        numOne: $('#numOneIn').val(),
        operator: operationChosen,
        numTwo: $('#numTwoIn').val(),
    };

    operationHistory.push(newProblem);

    // push newNumbers to mathProblem array
    console.log('Math Problem is', newProblem);

    $.ajax({
        url: '/math',
        method: 'POST',
        data: newProblem
        // send our newProblem data (obj) to the server
    }).then((response) => {
        console.log('POST /math', response);
  
        appendHistory();
        getAnswer();
        operationHistory = [];

    }).catch((error) => {
        console.log('POST /math failed', error);
        $('body').alert('Missing inputs. Try again.')
    });
    
    // clear inputs after equals button is clicked
    clearButton();
    operationChosen = null;
} // equalsButton

function getAnswer() {
    $.ajax({
        url: '/math',
        method: 'GET'
    }).then((response) => {
        console.log('GET /math response', response);
        let equalsIn = $('#equalsIn');
        equalsIn.empty();
        equalsIn.append(response);
    });
} // end getAnswer

// appends the DOM for the history
function appendHistory() {
    let operationList = $('#operationHistoryList')
    for (let operation of operationHistory) {
        operationList.append(`
            <li>
                ${operation.numOne}
                ${operation.operator}
                ${operation.numTwo}
            </li>
        `)
    } // end for of loop
} // end appendHistory