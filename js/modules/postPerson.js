import calcAge from "./calcAge.js";

async function postPerson(peopleObject) { 
    const headerList = document.querySelector('[data-container="parent"]');
    const btnInclude = document.querySelector('#include');     
    const url = "http://peopletest.leadsoft.inf.br/api/v1/People";
    const token = localStorage.token;   

    const optionsFetch = {
        method: 'POST',
        body: JSON.stringify(peopleObject),
        headers: {
            "authorization":token,
            "content-type":"application/json; charset=utf-8"
        }
    }         
    
    const personResponse = await fetch(url, optionsFetch);
    const people = await personResponse.json();    
    const agePerson = calcAge(people.DateOfBirth);
    const height = people.Height.toString().replace('.', ",");         
    
    const newPerson = `
        <ul class="header-inline person" id="ul-${people.Id}">
            <li id="fullName">${people.Name} ${people.Surname}</li>
            <li id="age">${agePerson} anos</li>
            <li id="weigth">${people.Weigth} kgs</li>
            <li id="height">${height} mts</li>
            <button class="btn handleBtn" id="${people.Id}">
                <img class="btnImg" id="btn-img-imc" src="../img/imc.png" name="imc">
            </button>
            <button class="btn handleBtn" id="${people.Id}">
                <img class="btnImg" id="btn-img-edit" src="../img/pencil.png" name="Editar">
            </button>
            <button class="btn handleBtn" id="${people.Id}">
                <img class="btnImg" id="btn-img-exclude" src="../img/trash.png" name="Excluir">
            </button>    
        </ul>`

    btnInclude.classList.add('off');
    headerList.innerHTML += newPerson;    
}
export default postPerson;