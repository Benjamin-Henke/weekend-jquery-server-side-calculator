$(document).ready(onReady);

function onReady() {
    console.log('client');
    $('#equalSignOut').on('click', equalsButton);
    $('#clearSignOut').on('click', clearButton);
    $('#plusSignOut').on('click', additionButton)
}

// GLOBAL VARIABLES
// operation buttons will change this 
let operationChosen = null;


// // Operation Buttons
function additionButton() {
    console.log('Addition Button');
    operationChosen = 'plus'
    console.log('Operation Chosen:', operationChosen);
} // end additionButton

// function subtractionButton() {
//     console.log('Subtraction Button');
// } // end subtractionButton

// function multiplicationButton() {
//     console.log('Multiplication Button');
// } // end multiplicationButton

// function divisionButton() {
//     console.log('Division Button');
// } // end divisionButton

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

    // push newNumbers to mathProblem array
    console.log('Math Problem is', newProblem);

    $.ajax({
        url: '/math',
        method: 'POST',
        data: newProblem
        // send our newProblem data (obj) to the server
    }).then((response) => {
        console.log('POST /math', response);
  
        getAnswer();

    }).catch((error) => {
        console.log('POST /math failed', error);
        $('body').alert('Missing inputs. Try again.')
    });
    
    // clear inputs after equals button is clicked
    clearButton();
    operationChose = null;
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
