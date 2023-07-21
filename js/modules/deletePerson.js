function deletePerson(idPerson) {
    const dataContainer = document.querySelector('[data-container="parent"]');      
    const divElement = document.getElementById('modal-container');
    const divPerson = document.getElementById(`ul-${idPerson}`);
    const fullName = divPerson.querySelector('#fullName').innerText;             
    const url = `http://peopletest.leadsoft.inf.br/api/v1/People/${idPerson}`;
    const optionsFetch = {
        method: 'DELETE',        
        headers: {
            "authorization":localStorage.token,
            "content-type":"application/json; charset=utf-8"
        }
    } 
    
    const modalExclude = `
        <div class="modal-confirm" id="modal-confirm">
            <div class="container-confirm">
                <h3>Tem certeza que deseja excluir o cadastro de:</h3>
                <h3>${fullName}</h3>
                <button class="btn confirm" id="confirmYes">Sim</button>
                <button class="btn confirm" id="confirmNo">Não</button>
            </div>    
        </div>` 
        
    divElement.innerHTML = modalExclude;
    divElement.classList.add('open');
    const btnYes = document.getElementById('confirmYes');
    const btnNo = document.getElementById('confirmNo'); 

    async function delPerson() {
        const responsePerson = await fetch(url, optionsFetch);
        
        if (responsePerson.ok) {
            divPerson.remove();                       
        }
        divElement.classList.remove('open');
        divElement.innerHTML = "";
    }

    ['touchstart', 'click'].forEach((itemEvent) => {
        btnYes.addEventListener(itemEvent, delPerson);
        btnNo.addEventListener(itemEvent, () => {
            divElement.innerHTML = "";
            divElement.classList.remove('open');
        })
    })          
}
export default deletePerson; 