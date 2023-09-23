const textInput = document.querySelector('input');
const btn = document.querySelector('button');
const copyText = document.querySelector('.copy-container');


function createRandomLink (lengthy) {
   
    let result = 'Nitly';
    let randomAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let characterLength = randomAlphabet.length;

    //Iterate through randomAlphabet to get the desired length
    for (let i = 0; i < lengthy; i++) {
        result += randomAlphabet.charAt(Math.floor(Math.random() * characterLength));
    }
    return result;
}

    //Function that accepts the text Input
function myTextInput () {

    if (textInput.value === '') {
        textInput.value = createRandomLink(10);
    } else {
        textInput.value = createRandomLink(10);
    }
}

    //A button that listens to the Event
btn.addEventListener('click', createRandomLink);
btn.addEventListener('click', myTextInput);


    //Function that copies the text in the input field to clipboard
function copyToClipboard () {
    //Select the text field
    textInput.select();
    //For Mobile Phones
    textInput.setSelectionRange(0,99999);

    //Copy the text from the input field
    navigator.clipboard.writeText(textInput.value);

     
    if (navigator.clipboard.writeText(textInput.value)) {
        copyText.textContent = 'Copied';
    } 
      
}
    //Callback function that listens to the event
copyText.addEventListener('click', copyToClipboard);

    //Function that changes the string Copied back to Copy when the Next button is clicked
const changeBackText = () => {
    return copyText.textContent = 'Copy';
}

btn.addEventListener('click', changeBackText);