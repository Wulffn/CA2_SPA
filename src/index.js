import 'bootstrap/dist/css/bootstrap.css'
const root = document.getElementById("root");

var input = document.createElement("input");
const searchBtn = document.createElement("button");
const radioDiv = document.createElement("div");
const resultDiv = document.createElement("div")
const searchDiv = document.createElement("div");
const formDiv = document.createElement("div");
const editFormDiv = document.createElement("div");
const firstNameInput = document.createElement("input");
const lastNameInput = document.createElement("input");
const mailInput = document.createElement("input");
const numberInput = document.createElement("input");
const phoneDescInput = document.createElement("input");
const streetInput = document.createElement("input");
const cityInput = document.createElement("input");
const zipInput = document.createElement("input");
const hobbyNameInput = document.createElement("input");
const hobbyDescInput = document.createElement("input");
const targetPhoneInput = document.createElement("input");
const efirstNameInput = document.createElement("input");
const elastNameInput = document.createElement("input");
const emailInput = document.createElement("input");
const enumberInput = document.createElement("input");
const ephoneDescInput = document.createElement("input");
const estreetInput = document.createElement("input");
const ecityInput = document.createElement("input");
const ezipInput = document.createElement("input");
const ehobbyNameInput = document.createElement("input");
const ehobbyDescInput = document.createElement("input");
const addBtn = document.createElement("button");
const editBtn = document.createElement("button");

const mainUrl = "https://www.wulffn.com/CA2F19-1/api/";

var radioGroup = ["Persons by Address", "Person by Phone", "Persons by Hobby", "Person by Zip", "Count by Hobby", "Delete Person", "Add Person", "Edit Person"];

radioDiv.innerHTML = generateRadios(radioGroup);
input.setAttribute("id", "input");
searchBtn.innerHTML = "Search";
addBtn.innerHTML = "Add Person";
editBtn.innerHTML = "Edit Person";
radioDiv.addEventListener("click", checkSearchType);
addBtn.addEventListener("click", createPerson);
editBtn.addEventListener("click", editPerson);
formDiv.style.visibility = "hidden";
editFormDiv.style.visibility = "hidden";
firstNameInput.setAttribute("placeholder", "Firstname");
lastNameInput.setAttribute("placeholder", "Lastname");
mailInput.setAttribute("placeholder", "Email");
numberInput.setAttribute("placeholder", "Phone Number");
phoneDescInput.setAttribute("placeholder", "Phone Description");
streetInput.setAttribute("placeholder", "Street");
cityInput.setAttribute("placeholder", "City");
zipInput.setAttribute("placeholder", "Zip Code");
hobbyNameInput.setAttribute("placeholder", "Hobby Name");
hobbyDescInput.setAttribute("placeholder", "Hobby Description");
targetPhoneInput.setAttribute("placeholder", "Phone of person to Change")
efirstNameInput.setAttribute("placeholder", "Firstname");
elastNameInput.setAttribute("placeholder", "Lastname");
emailInput.setAttribute("placeholder", "Email");
enumberInput.setAttribute("placeholder", "Phone Number");
ephoneDescInput.setAttribute("placeholder", "Phone Description");
estreetInput.setAttribute("placeholder", "Street");
ecityInput.setAttribute("placeholder", "City");
ezipInput.setAttribute("placeholder", "Zip Code");
ehobbyNameInput.setAttribute("placeholder", "Hobby Name");
ehobbyDescInput.setAttribute("placeholder", "Hobby Description");

editFormDiv.appendChild(targetPhoneInput);
editFormDiv.appendChild(enumberInput);
editFormDiv.appendChild(ephoneDescInput);
editFormDiv.appendChild(estreetInput);
editFormDiv.appendChild(ecityInput);
editFormDiv.appendChild(ezipInput);
editFormDiv.appendChild(ehobbyNameInput);
editFormDiv.appendChild(ehobbyDescInput);
editFormDiv.appendChild(efirstNameInput);
editFormDiv.appendChild(elastNameInput);
editFormDiv.appendChild(emailInput);
editFormDiv.appendChild(editBtn);


formDiv.appendChild(numberInput);
formDiv.appendChild(phoneDescInput);
formDiv.appendChild(streetInput);
formDiv.appendChild(cityInput);
formDiv.appendChild(zipInput);
formDiv.appendChild(hobbyNameInput);
formDiv.appendChild(hobbyDescInput);
formDiv.appendChild(firstNameInput);
formDiv.appendChild(lastNameInput);
formDiv.appendChild(mailInput);
formDiv.appendChild(addBtn);
root.appendChild(radioDiv);
searchDiv.appendChild(input);
searchDiv.appendChild(searchBtn);
searchDiv.appendChild(resultDiv);
root.appendChild(searchDiv);
root.appendChild(formDiv);
root.appendChild(editFormDiv);


function gettingFunction(idString) {
    switch (idString) {
        case "PersonsbyAddress":
            searchDiv.style.visibility = "visible";
            formDiv.style.visibility = "hidden";
            editFormDiv.style.visibility = "hidden";
            searchBtn.innerHTML = "Search";
            input.setAttribute("placeholder", "Search Address");
            searchBtn.addEventListener("click", getPersonsByAddress);
            searchBtn.removeEventListener("click", getPersonByPhone);
            searchBtn.removeEventListener("click", getPersonsByHobby);
            searchBtn.removeEventListener("click", getPersonByZip);
            searchBtn.removeEventListener("click", getCountByHobby);
            searchBtn.removeEventListener("click", deletePersonByPhone);
            break;
        case "PersonbyPhone":
            searchDiv.style.visibility = "visible";
            formDiv.style.visibility = "hidden";
            editFormDiv.style.visibility = "hidden";
            searchBtn.innerHTML = "Search";
            input.setAttribute("placeholder", "Search Phone");
            searchBtn.addEventListener("click", getPersonByPhone);
            searchBtn.removeEventListener("click", getPersonsByAddress);
            searchBtn.removeEventListener("click", getPersonsByHobby);
            searchBtn.removeEventListener("click", getPersonByZip);
            searchBtn.removeEventListener("click", getCountByHobby);
            searchBtn.removeEventListener("click", deletePersonByPhone);
            break;
        case "PersonsbyHobby":
            searchDiv.style.visibility = "visible";
            formDiv.style.visibility = "hidden";
            editFormDiv.style.visibility = "hidden";
            searchBtn.innerHTML = "Search";
            input.setAttribute("placeholder", "Search Hobby");
            searchBtn.addEventListener("click", getPersonsByHobby);
            searchBtn.removeEventListener("click", getPersonByPhone);
            searchBtn.removeEventListener("click", getPersonsByAddress);
            searchBtn.removeEventListener("click", getPersonByZip);
            searchBtn.removeEventListener("click", getCountByHobby);
            searchBtn.removeEventListener("click", deletePersonByPhone);
            break;
        case "PersonbyZip":
            searchDiv.style.visibility = "visible";
            formDiv.style.visibility = "hidden";
            editFormDiv.style.visibility = "hidden";
            searchBtn.innerHTML = "Search";
            input.setAttribute("placeholder", "Search Zip");
            searchBtn.addEventListener("click", getPersonByZip);
            searchBtn.removeEventListener("click", getPersonByPhone);
            searchBtn.removeEventListener("click", getPersonsByHobby);
            searchBtn.removeEventListener("click", getPersonsByAddress);
            searchBtn.removeEventListener("click", getCountByHobby);
            searchBtn.removeEventListener("click", deletePersonByPhone);
            break;
        case "CountbyHobby":
            searchDiv.style.visibility = "visible";
            formDiv.style.visibility = "hidden";
            editFormDiv.style.visibility = "hidden";
            searchBtn.innerHTML = "Search";
            input.setAttribute("placeholder", "Enter Hobby");
            searchBtn.addEventListener("click", getCountByHobby);
            searchBtn.removeEventListener("click", getPersonByPhone);
            searchBtn.removeEventListener("click", getPersonsByHobby);
            searchBtn.removeEventListener("click", getPersonByZip);
            searchBtn.removeEventListener("click", getPersonsByAddress);
            searchBtn.removeEventListener("click", deletePersonByPhone);
            break;
        case "DeletePerson":
            searchDiv.style.visibility = "visible";
            formDiv.style.visibility = "hidden";
            editFormDiv.style.visibility = "hidden";
            searchBtn.innerHTML = "Delete";
            input.setAttribute("placeholder", "Enter Phonenumber");
            searchBtn.addEventListener("click", deletePersonByPhone);
            searchBtn.removeEventListener("click", getPersonByPhone);
            searchBtn.removeEventListener("click", getPersonsByHobby);
            searchBtn.removeEventListener("click", getPersonByZip);
            searchBtn.removeEventListener("click", getPersonsByAddress);
            searchBtn.removeEventListener("click", getCountByHobby);
            break;
        case "AddPerson":
            searchDiv.style.visibility = "hidden";
            editFormDiv.style.visibility = "hidden";
            formDiv.style.visibility = "visible";
            break;
        case "EditPerson":
            searchDiv.style.visibility = "hidden";
            formDiv.style.visibility = "hidden"
            editFormDiv.style.visibility = "visible";
        
            break;  
    }

}


function checkSearchType() {
    var radios = document.getElementsByClassName("radios");

    for (let index = 0; index < radios.length; index++) {
        if (radios[index].checked) {
            console.log(radios[index])
            console.log(document.getElementById(radios[index].id).checked)
            gettingFunction(radios[index].id);
        }
    }

}


function getPersonsByAddress() {
    const address = input.value;
    const totalUrl = mainUrl + "person/street/";
    fetch(totalUrl + address)
        .then(res => {
            if (!res.ok) {
                return Promise.reject({ status: res.status, fullError: res.json() })
            }
            return res.json()
        })
        .then(data => {
            var tableBody = data.persons.map(user => "<tr><td>" + user.firstName + "</td>" +
                "<td>" + user.lastName + "</td>" +
                "<td>" + user.phones.map(phone => phone.description + ": " + phone.number).join("<br>") + "</td>");
            resultDiv.innerHTML = data.street + ", " + data.zip + ", " + data.city + "<br><table>" + tableBody + "</table>";
        }).catch(err => {
            if (err.status) {
                err.fullError.then(e => resultDiv.innerHTML = e.detailMessage)
            }
            else {
                resultDiv.innerHTML = "Network Error";
            }
        });
    input.value = "";
}

function getPersonByPhone() {
    const phone = input.value;
    const totalUrl = mainUrl + "person/";
    fetch(totalUrl + phone)
        .then(res => {
            if (!res.ok) {
                return Promise.reject({ status: res.status, fullError: res.json() })
            }
            return res.json()
        })
        .then(data => {
            console.log(data.phone)
            console.log(data.personDTO.firstName)
            var body =
                data.personDTO.firstName + "<br>" +
                data.personDTO.lastName + "<br>" +
                data.personDTO.email + "<br>" +
                data.personDTO.street + "<br>" +
                data.personDTO.zip + " " + data.personDTO.city + "<br>" +
                data.personDTO.phones.map(phone => phone.description + ": " + phone.number).join(" - ") + "<br>" +
                data.personDTO.hobbies.map(hobby => hobby.name).join(", ");
            resultDiv.innerHTML = data.phone + "<br>" + body;
        }).catch(err => {
            if (err.status) {
                err.fullError.then(e => resultDiv.innerHTML = e.detailMessage)
            }
            else {
                resultDiv.innerHTML = "Network Error";
            }
        });
    input.value = "";
}

function getPersonsByHobby() {
    const hobby = input.value;
    const totalUrl = mainUrl + "person/hobby/";
    fetch(totalUrl + hobby)
        .then(res => {
            if (!res.ok) {
                return Promise.reject({ status: res.status, fullError: res.json() })
            }
            return res.json()
        })
        .then(data => {
            var tableHead = data.hobby;
            var tableBody = data.persons.map(user => "<tr><td>" + user.firstName + "</td>" +
                "<td>" + user.lastName + "</td>" +
                "<td>" + user.phones.map(phone => phone.description + ": " + phone.number).join("<br>") + "</td>");
            resultDiv.innerHTML = "<table><th>" + tableHead + "</th>" + tableBody + "</table>";
        }).catch(err => {
            if (err.status) {
                err.fullError.then(e => resultDiv.innerHTML = e.detailMessage)
            }
            else {
                resultDiv.innerHTML = "Network Error";
            }
        });
    input.value = "";
}

function getPersonByZip() {
    const zip = input.value;
    const totalUrl = mainUrl + "person/zip/";
    fetch(totalUrl + zip)
        .then(res => {
            if (!res.ok) {
                return Promise.reject({ status: res.status, fullError: res.json() })
            }
            return res.json()
        })
        .then(data => {
            var tableHead = Object.keys(data.persons[0]).map(element => "<th>" + element + "</th>").join("");
            var tableBody = data.persons.map(user => "<tr><td>" + user.firstName + "</td>" +
                "<td>" + user.lastName + "</td>" +
                "<td>" + user.addresses + "</td>").join("");
            resultDiv.innerHTML = "<table>" + tableHead + tableBody + "</table>";
        }).catch(err => {
            if (err.status) {
                err.fullError.then(e => resultDiv.innerHTML = e.detailMessage)
            }
            else {
                console.log("Network error");
            }
        });
    input.value = "";
}


function getCountByHobby() {
    const hobby = input.value;
    const totalUrl = mainUrl + "person/count/";
    fetch(totalUrl + hobby)
        .then(res => {
            if (!res.ok) {
                return Promise.reject({ status: res.status, fullError: res.json() })
            }
            return res.json()
        })
        .then(data => {
            resultDiv.innerHTML = data.hobby.name + ": " + data.count;
        }).catch(err => {
            if (err.status) {
                err.fullError.then(e => resultDiv.innerHTML = e.detailMessage)
            }
            else {
                console.log("Network error");
            }
        });
    input.value = "";
}

function generateRadios(properties) {
    return properties.map(data => "<input type=\"radio\" class=\"radios\" id=" + data.replace(/\s/g, '') + " name=\"searchOption\">" + data + "</input><br>").join("");
}


function deletePersonByPhone() {
    const phone = input.value;

    const totalUrl = mainUrl + "person/delete/";
    fetch(totalUrl + phone, {
        method: 'delete',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(phone)
    }).then(res => {
        if (!res.ok) {
            return Promise.reject({ status: res.status, fullError: res.json() })
        }
        return res.json();
    }).catch(err => {
        if (err.status) {
            err.fullError.then(e => resultDiv.innerHTML = e.detailMessage)
        }
        else {
            resultDiv.innerHTML = "Network Error";
        }
    });
    input.value = "";
}


function createPerson() {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = mailInput.value;
    const phones = [{"number": numberInput.value}, {"description": phoneDescInput.value}];
    // const number = numberInput;
    // const phonedesc = phoneDescInput;
    const street = streetInput.value;
    const city = cityInput.value;
    const zip = zipInput.value;
    const hobbies = [{"name": hobbyNameInput.value}, {"description": hobbyDescInput.value}];
    // const hobbyName = hobbyNameInput;
    // const hobbyDesc = hobbyDescInput;
    const json = {firstName, lastName, email, phones, street, city, zip, hobbies};
    const totalUrl = mainUrl + "person";
    fetch(totalUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(json)
    }).then(res => {
        if (!res.ok) {
            return Promise.reject({ status: res.status, fullError: res.json() })
        }
        return res.json()
    }).catch(err => {
        if (err.status) {
            err.fullError.then(e => resultDiv.innerHTML = e.detailMessage)
        }
        else {
            resultDiv.innerHTML = "Network Error";
        }
    });
    firstNameInput.value = "";
    lastNameInput.value = "";
    mailInput.value = "";
    number.value = "";
    phonedesc.value ="";
    street.value = "";
    city.value = "";
    zip.value = "";
    hobbyName.value = "";
    hobbyDesc.value ="";
}

function editPerson() {
    const targetPhone = targetPhoneInput.value;
    const firstName = efirstNameInput.value;
    const lastName = elastNameInput.value;
    const email = emailInput.value;
    const phones = [{"number": enumberInput.value}, {"description": ephoneDescInput.value}];
    // const number = numberInput;
    // const phonedesc = phoneDescInput;
    const street = estreetInput.value;
    const city = ecityInput.value;
    const zip = ezipInput.value;
    const hobbies = [{"name": ehobbyNameInput.value}, {"description": ehobbyDescInput.value}];
    // const hobbyName = hobbyNameInput;
    // const hobbyDesc = hobbyDescInput;
    const json = {firstName, lastName, email, phones, street, city, zip, hobbies};
    const totalUrl = mainUrl + "person/phone/" + targetPhone;
    fetch(totalUrl, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(json)
    }).then(res => {
        if (!res.ok) {
            return Promise.reject({ status: res.status, fullError: res.json() })
        }
        return res.json()
    }).catch(err => {
        if (err.status) {
            err.fullError.then(e => resultDiv.innerHTML = e.detailMessage)
        }
        else {
            resultDiv.innerHTML = "Network Error";
        }
    });
    firstNameInput.value = "";
    lastNameInput.value = "";
    mailInput.value = "";
    number.value = "";
    phonedesc.value ="";
    street.value = "";
    city.value = "";
    zip.value = "";
    hobbyName.value = "";
    hobbyDesc.value ="";
}

