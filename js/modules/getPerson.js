import loadModalForm from "./loadModalForm.js";

async function getPerson(idPerson) {
    localStorage.personId = idPerson;
    const regexBirth = /[A-Za-z:]\d*/g;    
    const url = `http://peopletest.leadsoft.inf.br/api/v1/People/${idPerson}`

    const optionsFetch = {
        method: 'GET',        
        headers: {
            "authorization":localStorage.token,
            "content-type":"application/json; charset=utf-8"
        }
    }            

    const responsePerson = await fetch(url, optionsFetch);
    const responseObjPerson = await responsePerson.json();    
    responseObjPerson.DateOfBirth = responseObjPerson.DateOfBirth.replace(regexBirth, "") 
    loadModalForm(responseObjPerson);
           
}
export default getPerson; 