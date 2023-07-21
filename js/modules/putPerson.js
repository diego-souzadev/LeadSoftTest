import calcAge from "./calcAge.js";

async function putPerson(idPerson) {
    const getInputs = document.querySelectorAll('form input');
    const elementUl = document.getElementById(`ul-${idPerson}`)     
    let personObject = {};        
    const url = `http://peopletest.leadsoft.inf.br/api/v1/People/${idPerson}`;
    
    localStorage.personId = "";    

    getInputs.forEach(({name, value}) => {
        if (name !== "height" && name !== "weigth") {
            personObject[name] = value;                    
        }else{
            personObject[name] = +value;                    
        }                                                
    })
    
    personObject.id = idPerson;

    const optionsFetch = {
        method: 'PUT',
        body: JSON.stringify(personObject),        
        headers: {
            "authorization":localStorage.token,
            "content-type":"application/json; charset=utf-8"
        }
    }            

    const responsePerson = await fetch(url, optionsFetch);
    const responseObjPerson = await responsePerson.json();
    const agePerson = calcAge(responseObjPerson.DateOfBirth);
    const height = responseObjPerson.Height.toString().replace('.', ",");  
    
    const editPerson = ` 
        <li id="fullName">${responseObjPerson.Name} ${responseObjPerson.Surname}</li>
        <li id="age">${agePerson} anos</li>
        <li id="weigth">${responseObjPerson.Weigth} kgs</li>
        <li id="height">${height} mts</li>
        <button class="btn handleBtn" id="${idPerson}">
            <img class="btnImg" id="btn-img-imc" src="../img/imc.png" name="imc">
        </button>
         <button class="btn handleBtn" id="${idPerson}">
            <img class="btnImg" id="btn-img-edit" src="../img/pencil.png" name="Editar">
        </button>
        <button class="btn handleBtn" id="${idPerson}">
            <img class="btnImg" id="btn-img-exclude" src="../img/trash.png" name="Excluir">
        </button>`

    elementUl.innerHTML = editPerson;      
    
}
export default putPerson;