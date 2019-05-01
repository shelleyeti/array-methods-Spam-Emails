//select location of output
const outEl = document.querySelector("#output");


//add a heading that does not change
outEl.innerHTML = `<h1>Customer Emails</h1>`;


customers.forEach(customerNames => {
    let customerFirstName = customerNames.first_name;
    let customerLastName = customerNames.last_name;
    let emailArray = customerNames.contacts.email;
    let indexArray = 1;
    let emailString = "";
    emailArray.forEach(email => {
        emailString += indexArray + ". " + email + "<br>";
        indexArray++; 
    });
    outEl.innerHTML += `${customerFirstName}  ${customerLastName} <br> ${emailString}<hr>`
})
