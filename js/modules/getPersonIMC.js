async function getPersonIMC(idPerson) {
    const modalImc = document.getElementById('modal-container');          
    const url = `http://peopletest.leadsoft.inf.br/api/v1/People/${idPerson}/IMC`

    const optionsFetch = {
        method: 'GET',        
        headers: {
            "authorization":localStorage.token,
            "content-type":"application/json; charset=utf-8"
        }
    } 
    
    // IMC property generated by API endpoint does not return correct statistical data // 

    const responsePerson = await fetch(url, optionsFetch);
    const responseObjPerson = await responsePerson.json();
    console.log(responseObjPerson.IMC); // Return  API endpoint //   
    

    const currentImc = (responseObjPerson.Weigth / (responseObjPerson.Height * responseObjPerson.Height));
    let img = "../img/IMC.webp";
    
    if (window.innerWidth <= 700) {        
        img = "../img/imc-small.png"
    }       

    const newImc = `
        <div class="modal-imc" id="modal-imc">
            <div class="container-imc">
                <img class="img-imc" src=${img}>
                <h3>IMC: ${currentImc.toFixed(1)}</h3>        
                <button class="btn imc-btn" id="imc-btn">Fechar</button>
            </div>        
        </div>`

    modalImc.innerHTML = newImc;
    modalImc.classList.add('open');   
    
    ['touchstart', 'click'].forEach((itemEvent) => {        
        document.getElementById('imc-btn').addEventListener(itemEvent, () => {
            modalImc.innerHTML = "";
            modalImc.classList.remove('open');    
        })                 
    })
}
export default getPersonIMC; 