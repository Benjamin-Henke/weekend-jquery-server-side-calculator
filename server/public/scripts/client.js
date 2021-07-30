$(document).ready(onReady);

function onReady() {
    console.log('client.js');
    $('#equalSignOut').on('click', equalsButton);
    $('#clearSignOut').on('click', clearButton);
}



// Operation Buttons
function additionButton() {
    console.log('Addition Button');
} // end additionButton

function subtractionButton() {
    console.log('Subtraction Button');
} // end subtractionButton

function multiplicationButton() {
    console.log('Multiplication Button');
} // end multiplicationButton

function divisionButton() {
    console.log('Division Button');
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
} // equalsButton