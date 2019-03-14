import 'bootstrap/dist/css/bootstrap.css'
const root = document.getElementById("root");

var input = document.createElement("input");
const searchBtn = document.createElement("button");
const radioDiv = document.createElement("div");
const resultDiv = document.createElement("div")

const mainUrl = "http://localhost:8084/api/";

var radioGroup = ["Persons by Address", "Person by Phone", "Persons by Hobby", "Person by Zip", "Count by Hobby", "Delete Person"];

radioDiv.innerHTML = generateRadios(radioGroup);
input.setAttribute("id", "input");
searchBtn.innerHTML = "Search";
radioDiv.addEventListener("click", checkSearchType);

root.appendChild(radioDiv);
root.appendChild(input);
root.appendChild(searchBtn);
root.appendChild(resultDiv);


function gettingFunction(idString) {
    switch (idString) {
        case "PersonsbyAddress":
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
            searchBtn.innerHTML = "Delete";
            input.setAttribute("placeholder", "Enter Phonenumber");
            searchBtn.addEventListener("click", deletePersonByPhone);
            searchBtn.removeEventListener("click", getPersonByPhone);
            searchBtn.removeEventListener("click", getPersonsByHobby);
            searchBtn.removeEventListener("click", getPersonByZip);
            searchBtn.removeEventListener("click", getPersonsByAddress);
            searchBtn.removeEventListener("click", getCountByHobby);
            break;

    }

}

function clearAllRadios() {

    var radios = document.getElementsByClassName("radios");

    for (let index = 0; index < radios.length; index++) {
        if (radios[index].checked) {

            document.getElementById(radios[index].id).checked = false;
        }
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
                err.fullError.then(e => console.log(e))
            }
            else {
                console.log("Network error");
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
                err.fullError.then(e => console.log(e))
            }
            else {
                console.log("Network error");
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
                err.fullError.then(e => console.log(e))
            }
            else {
                console.log("Network error");
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
                err.fullError.then(e => console.log(e))
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
                err.fullError.then(e => console.log(e))
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
    input.value = "";
}
/*
function createPerson(){
    var inputFirstname = document.createElement("input");
    var inputLastname = document.createElement("input");
    var input
    const inputLastName = inputFirstname.value;

    const firstName = ;
    fetch(totalUrl + person, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(person)
    }).then(res => res.json());
}



*/