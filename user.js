
// Membuat info default
let users = [
    {
        name:"Cebong",
        gender:"M",
        dob:"1995-02-01",
        religion:"B",
        address:"Jakarta"
    }, 
    {
        name:"Kampret",
        gender:"F",
        dob:"1994-02-01",
        religion:"I",
        address:"Jakarta"
    }
]

for (let index=0; index<users.length; index++) {
    const user = users[index];
    console.log("User : ", user, index);
}



let names = []
let maleGenders = []
let religions = []
let addresses = []

users.forEach(
    (user, index) => {
        console.warn("index : ", index)
        console.warn("user : ", user)

        names.push(user.name)
        if (user.gender == "M") {
            maleGenders.push(user)
        }
        religions.push(user.religion)
        addresses.push(user.address)
    }
) 
console.log("Nama : ", names);
console.log("Gender Laki2 ? : ", maleGenders);
console.log("Agama : ", religions);
console.log("Alamat : ", addresses)

// map
const result = users.map(user => user.name)
console.log("result", result);

// filter
const resultFilter = users.filter(user => user.gender == "F")
console.log("resultFilter", resultFilter);

// Tambah siswa baru
const onSaveForm = () => {
    console.log("submit!!");

    const indexField = document.userInput.idx.value
    const nameField = document.userInput.name.value
    const genderField = document.userInput.gender.value
    const ageField = document.userInput.dob.value
    const religionField = document.userInput.religion.value
    const addressField = document.userInput.address.value

    console.log("nameField : ", nameField);
    console.log("genderField : ", genderField);
    console.log("religionField : ", religionField);
    console.log("addressField : ", addressField);
    /** 
    users.push({
        name: nameField,
        gender: genderField,
        religion: religionField,
        address:addressField
    })*/
    
    const newData = {
        name: nameField,
        gender: genderField,
        dob: ageField,
        religion: religionField,
        address: addressField
    }
    if (indexField) {
        users.splice(indexField, 1, newData)
    } else {
        users.push(newData)
    }
    renderTable()
    document.userInput.reset()





    renderTable()
}


const renderTable = () => {
    let table = document.querySelector(".userList tbody");

    let tr= ""

    for (let index=0; index<users.length; index++) {
        const user = users[index];

        tr += `
            <tr>
                <td align="right">${index + 1}</td>
                <td>${user.name}</td>
                <td align="center">${user.gender == "M" ? "Male" : "Female"}</td>
                <td align="center">${index}</td>
                <td align="center">${user.religion}</td>
                <td align="center">${user.address}</td>
                <td align="center">
                    <button class="edit-data" onclick="editUser(${index})">Edit</button>
                    <button class="delete-data" onclick="deleteData(${index})" >Delete</button>
                </td>
            </tr>
        `
    }
    table.innerHTML = tr
}

renderTable()

// Cari Table pakai nama

const searchNameForm = () => {
    console.log("submit!!");

    const searchnameField = document.searchByName.searchname.value
    console.log("search name : ", searchnameField);

    searchByName(searchnameField);
}

const searchByName = (inputName) => {
    let table = document.querySelector(".userList tbody");

    let tr= ""
    for (let index=0; index<users.length; index++) {
        const user = users[index]

        if (user.name == inputName) {
            tr += `
                <tr>
                    <td align="right">${index + 1}</td>
                    <td>${user.name}</td>
                    <td align="center">${user.gender == "M" ? "Male" : "Female"}</td>
                    <td align="center">${index}</td>
                    <td align="center">${user.religion}</td>
                    <td align="center">${user.address}</td>
                    <td align="center">
                        <button class="edit-data" onclick="editUser(${index})">Edit</button>
                        <button class="delete-data" onclick="deleteData(${index})">Delete</button>
                    </td>
                </tr>
            `
        }
    }

    table.innerHTML = tr
}

// Cari Table pakai Agama

const searchReligionForm = () => {
    console.log("submit!!");

    const searchreligionField = document.searchByReligion.searchreligion.value
    console.log("search religion : ", searchreligionField);

    searchByReligion(searchreligionField);
}

const searchByReligion = (inputReligion) => {
    let table = document.querySelector(".userList tbody");

    let tr= ""
    for (let index=0; index<users.length; index++) {
        const user = users[index]

        if (user.religion == inputReligion) {
            tr += `
                <tr>
                    <td align="right">${index + 1}</td>
                    <td>${user.name}</td>
                    <td align="center">${user.gender == "M" ? "Male" : "Female"}</td>
                    <td align="center">${index}</td>
                    <td align="center">${user.religion}</td>
                    <td align="center">${user.address}</td>
                    <td align="center">
                        <button class="edit-data" onclick="editUser(${index})" >Edit</button>
                        <button class="delete-data" onclick="deleteData(${index})" >Delete</button>
                    </td>
                </tr>
            `
        }
    }

    table.innerHTML = tr
}

// Cari Table pakai Alamat

const searchAddressForm = () => {
    console.log("submit!!");

    const searchaddressField = document.searchByAddress.searchaddress.value
    console.log("search address : ", searchaddressField);

    searchByAddress(searchaddressField);
}

const searchByAddress = (inputAddress) => {
    let table = document.querySelector(".userList tbody");

    let tr= ""
    for (let index=0; index<users.length; index++) {
        const user = users[index]

        if (user.address == inputAddress) {
            tr += `
                <tr>
                    <td align="right">${index + 1}</td>
                    <td>${user.name}</td>
                    <td align="center">${user.gender == "M" ? "Male" : "Female"}</td>
                    <td align="center">${index}</td>
                    <td align="center">${user.religion}</td>
                    <td align="center">${user.address}</td>
                    <td align="center">
                        <button class="edit-data" onclick="editUser(${index})">Edit</button>
                        <button class="delete-data" onclick="deleteData(${index})" >Delete</button>
                    </td>
                </tr>
            `
        }
    }

    table.innerHTML = tr
}

// Delete Data

const deleteData = (index) => {
    users.splice(index, 1);

    renderTable();
}

// Edit Data

const editUser = selectedIndex => {

    console.clear()
    console.log("Edit User Start!!!");

    const user = users[selectedIndex]
    let nameField = document.userInput.name
    let indexField = document.userInput.idx
    let genderField = document.querySelector(`input[name='gender'][value='${user.gender}']`)
    let religionField = document.userInput.religion.value
    let addressField = document.userInput.address.value

    indexField.value = selectedIndex
    nameField.value = user.name
    genderField.checked = true

    console.log("nameField : ", nameField);
    console.log("genderField : ", genderField);
    console.log("religionField : ", religionField);
    console.log("addressField : ", addressField);

    console.log("Edit Selesai !!!!");

}


// Pagination
/** 
var state = {
    'querySet': users,

    'page': 1,
    'rows': 5,
    'window': 5,
}

buildTable()

function pagination(querySet, page, rows) {

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows

    var trimmedData = querySet.slice(trimStart, trimEnd)

    var pages = Math.round(querySet.length / rows);

    return {
        'querySet': trimmedData,
        'pages': pages,
    }
}

function pageButtons(pages) {
    var wrapper = document.getElementById('pagination-wrapper')

    wrapper.innerHTML = ``
	console.log('Pages:', pages)

    var maxLeft = (state.page - Math.floor(state.window / 2))
    var maxRight = (state.page + Math.floor(state.window / 2))

    if (maxLeft < 1) {
        maxLeft = 1
        maxRight = state.window
    }

    if (maxRight > pages) {
        maxLeft = pages - (state.window - 1)
        
        if (maxLeft < 1){
        	maxLeft = 1
        }
        maxRight = pages
    }
    
    

    for (var page = maxLeft; page <= maxRight; page++) {
    	wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
    }

    if (state.page != 1) {
        wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
    }

    if (state.page != pages) {
        wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
    }

    $('.page').on('click', function() {
        $('#table-body').empty()

        state.page = Number($(this).val())

        buildTable()
    })

}


function buildTable() {
    var table = document.querySelector(".userList tbody")

    var data = pagination(state.querySet, state.page, state.rows)
    var myList = data.querySet

    for (var i = 1 in myList) {
        //Keep in mind we are using "Template Litterals to create rows"
        var row = `<tr>
                  <td>${myList[i].nama}</td>
                  <td>${myList[i].gender}</td>
                  <td>${myList[i]}</td>
                  <td>${myList[i].religion}</td>
                  <td>${myList[i].address}</td>
                  <td align="center">
                        <button class="edit-data" >Edit</button>
                        <button class="delete-data" >Delete</button>
                    </td>
                  `
        table.append(row)
    }

    pageButtons(data.pages)
}
*/


