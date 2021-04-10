function seeAll(){
    let seeAll = document.querySelector("#lstClient")
    seeAll.setAttribute("class", "listHome")
    console.log
}

//-------------------------------------------------//

//-- FUNÇÕES PARA ESCONDER PAGINA -- 

function hiddenHome(){
    let hiddenHome = document.querySelector("#home")
    hiddenHome.setAttribute("class", "hidden")
}

function hiddenCreateSeller(){
    let hiddenCreateSeller = document.querySelector("#createSeller")
    hiddenCreateSeller.setAttribute("class", "hidden")
}

function hiddenEditSeller(){
    let hiddenEditSeller = document.querySelector("#editSeller")
    hiddenEditSeller.setAttribute("class", "hidden")
}

function hiddenCreateClient(){
    let hiddenCreateClient = document.querySelector("#createClient")
    hiddenCreateClient.setAttribute("class", "hidden")
}

function hiddenEditClient(){
    let hiddenEditClient = document.querySelector("#editClient")
    hiddenEditClient.setAttribute("class", "hidden")
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  //

//-- TELA DE INICIO --
function goToHome(){
    let seeHome = document.querySelector("#home")
    seeHome.setAttribute("class", "home")

    hiddenCreateSeller()
    hiddenEditSeller()
    hiddenCreateClient()
    hiddenEditClient()
}

//-- TELA PARA CRIAR VENDEDOR --
function btnCreateSeller(){
    let seeCreateSeller = document.querySelector("#createSeller")
    seeCreateSeller.setAttribute("class", "createSeller")

    hiddenHome()
    hiddenEditSeller()
    hiddenCreateClient()
    hiddenEditClient()
}

//-- TELA PARA EDITAR VENDEDOR --
function btnEditSeller(){
    let seeEditSeller = document.querySelector("#editSeller")
    seeEditSeller.setAttribute("class", "createSeller")

    hiddenHome()
    hiddenCreateSeller()
    hiddenCreateClient()
    hiddenEditClient()
}

//-- TELA PARA CRIAR CLIENTE -- 
function btnCreateClient(){
    let seeCreateClient = document.querySelector("#createClient")
    seeCreateClient.setAttribute("class", "createClient")

    hiddenHome()
    hiddenCreateSeller()
    hiddenEditSeller()
    hiddenEditClient()
}

//-- TELA PARA EDITAR CLIENTE --
function btnEditClient(){
    let seeEditClient = document.querySelector("#editClient")
    seeEditClient.setAttribute("class", "createClient")

    hiddenHome()
    hiddenCreateSeller()
    hiddenEditSeller()
    hiddenCreateClient()
}

//-------------------------------------------------//

//-- ARRAY DE VENDEDORES
let sellers = [
    {id: 0, idSeller: 0, name: "", date: ""}
]

//-- CRIAR NOVO VENDEDOR --
function newSeller() {
    let idSeller = sellers[sellers.length - 1].id
    let nameSeller = document.getElementById("name").value;
    let birthDate = document.getElementById("date").value;

    if (nameSeller == "" || birthDate == "") {
        alert("Preencha os campos para criar um vendedor")
    } else {
        let seller = {id: (idSeller + 1), name: nameSeller, date: birthDate}
        sellers.push(seller);
        
        let lstSeller = document.getElementById("lstSeller").innerHTML;
        lstSeller = lstSeller + "<button id='"+ idSeller + "'>" +nameSeller+"</button>"
        document.getElementById("lstSeller").innerHTML = lstSeller;

        let lstSellerToClient = document.getElementById("sellerToClient").innerHTML;
        lstSellerToClient = lstSellerToClient + "<button id='"+ idSeller + "' onclick='selectSellerClient()'>" +nameSeller+"</button>"
        document.getElementById("sellerToClient").innerHTML = lstSellerToClient;
    }       
}

//-- DELETAR VENDEDOR --
function deleteSeller() {
    let nameSeller = document.getElementById("name").value;

    sellers.forEach((element, index) => {
        if(element.name == nameSeller){
            sellers.splice(index);
            let del = document.getElementById(element.id - 1);
            del.parentNode.removeChild(del);

            let delToClient = document.getElementById(element.id - 1);
            delToClient.parentNode.removeChild(delToClient);
        }
    })
}

//-- BOTÃO CRIAR CLIENTE -- 
function goNewClient(){
    btnCreateClient()
}

//-------------------------------------------------//

//-- ARRAY DE CLIENTES
let clients = [
    {id: 0, name: "", type: "", cred: ""}
]

//-- CRIAR NOVO CLIENTE --
function newClient() {
    let idClient = clients[clients.length - 1].id
    var nameClient = document.getElementById("nameClient").value;
    let peopleType = document.getElementById("peopleType").value;
    let limCred = document.getElementById("limCred").value;
    
    if (nameClient == "" || limCred == "") {
        alert("Preencha os campos para criar um vendedor")
    } else {
        if(peopleType == "PF" || peopleType == "PJ"){
            let client = {id: (idClient + 1), name: nameClient, type: peopleType, cred: limCred}
            clients.push(client);
            console.log(clients)

            let lstClient = document.getElementById("lstClient").innerHTML;
            lstClient = lstClient + "<button>" + nameClient +"</button>"
            document.getElementById("lstClient").innerHTML = lstClient;
        } else {
            alert("Preencha o campo (Tipo de pessoa) somente com PF ou PJ")
        }    
    }
}

//-- DELETE CLIENTE --
function deleteClient() {
    let nameClient = document.getElementById("nameClient").value;
    let peopleType = document.getElementById("peopleType").value;

    clients.forEach((element, index) => {
        if(element.name == nameClient && element.type == peopleType){
            clients.splice(index);
        }
    })
}

//-- BOTÃO CRIAR VENDEDOR --
function goNewSeller(){
    btnCreateSeller()
}

//-------------------------------------------------//

//-- EDITAR VENDEDOR -- 
function editSeller(){
    let nameSeller = document.getElementById("nameSellerEdit").value;
    let birthDate = document.getElementById("dateSellerEdit").value;
    
    if (nameSeller == "" || birthDate == "") {
        alert("Preencha os campos para criar um vendedor")
    } else {
        sellers.forEach((element, index) => {
            if(element.name == nameSeller){
                sellers.splice(index);
                let seller = {id: element.id, name: nameSeller, date: birthDate}
                sellers.push(seller);
            }
        })
    }
}

//-------------------------------------------------//

//-- EDITAR CLIENTE --
function editClient() {
    let nameClient = document.getElementById("nameClientEdit").value;
    let peopleType = document.getElementById("peopleTypeEdit").value;
    let limCred = document.getElementById("limCredEdit").value;
    
    if (nameClient == "" || limCred == "") {
        alert("Preencha os campos para criar um vendedor")
    } else {
        if(peopleType == "PF" || peopleType == "PJ"){
            clients.forEach((element, index) => {
                if(element.name == nameClient){
                    clients.splice(index);
                    let client = {id: element.id, name: nameClient, type: peopleType, cred: limCred}
                    clients.push(client);
                }
            })
        } else {
            alert("Preencha o campo (Tipo de pessoa) somente com PF ou PJ")
        }    
    }
}
