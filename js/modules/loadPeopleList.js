import countDownSession from './countDownSession.js';
import loadModalForm from './loadModalForm.js';
import getPerson from './getPerson.js';
import deletePerson from './deletePerson.js';
import getPersonIMC from './getPersonImc.js';
import getAllPeople from './getAllPeople.js';
import loadLoginPage from './loadLoginPage.js';

function loadPeopleList() {
    const divElement = document.getElementById('app');       
    let personId = "";    
    
    const elementHtml = `
          
        <section class="grid-section">
            <div class="countContainer">
                <span class="headerTimer">Esta sessão expira em:</span>
                <span class="countDown" data-log="countdown"></span>
            </div>
            <div class="data-container" data-container="head">            
                <ul class="header-inline" data-header="inline">
                    <li>Nome completo</li>                
                    <li>Idade</li>
                    <li>Peso</li>
                    <li>Altura</li>                                  
                </ul>
                <div class="data-container new" data-container="parent">
                    <button id="include" class="btn includeBtn">                     
                        <img src="../img/AddUser.png">
                    </button>            
                </div>
                <div class="container-btn-page">
                    <button class="btn btn-previous" id="btn-previous-page">
                        <img class="img-previous" id="img-previous-page" src="../img/left.png">
                    </button>
                    <div class="number-page" id="number-page">1</div>               
                    <button class="btn btn-next" id="btn-next-page">
                        <img class="img-next" id="img-next-page"src="../img/right.png">
                    </button>
                </div>            
                <button class="btn close-session" id="close-session">Encerrar sessão</button>
            </div>
            <div class="modal-container" id="modal-container"></div>                       
        </section>`     

    divElement.innerHTML = elementHtml;

    function includeBtn(e) {        
        if (e.target === document.querySelector('#include img')) {
            loadModalForm();
        }        
    }

    function handleBtnPerson(e) {
        if (e.target.id === `btn-img-imc`) {
            personId = e.target.parentNode;
            getPersonIMC(personId.id);
        }
        
        if (e.target.id === `btn-img-edit`) {
            personId = e.target.parentNode;                    
            getPerson(personId.id);

        }

        if (e.target.id === `btn-img-exclude`) {
            personId = e.target.parentNode;
            deletePerson(personId.id);            
        }

        if (e.target.id === `close-session`) {
            localStorage.Login = "";
            localStorage.request = "";
            divElement.innerHTML = "";
            location.reload();
            loadLoginPage();                     
        }        
    }   

    ['touchstart', 'click'].forEach((itemEvent) => {
        window.addEventListener(itemEvent, includeBtn);
        window.addEventListener(itemEvent, handleBtnPerson);         
    })

    getAllPeople();             
    countDownSession();    
}
export default loadPeopleList;  