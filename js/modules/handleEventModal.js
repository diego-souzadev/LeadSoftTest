import postPerson from "./postPerson.js";
import putPerson from "./putPerson.js";

function handleEventModal() {
    const getElements = document.querySelectorAll('form input');
    const modalContainer = document.getElementById('modal-container'); 
    const modalSection = document.getElementById('modal-create-person');
    const showHeight = document.getElementById('show-height'); 
    const showWeigth = document.getElementById('show-weigth');  
    const btnClose = document.getElementById('close-modal');
    const btnSave = document.getElementById('save');
    const btnClean = document.getElementById('cancel');       
    let peopleObject = {};
    let formValidation = 0;   
    
    ['touchstart', 'click'].forEach((itemEvent) => {
        window.addEventListener(itemEvent, (e) => {     
            if (e.target === modalSection) {
                modalContainer.innerHTML = "";
                formValidation = 0;
                modalContainer.classList.remove('open');                 
                return;
            }
        })              
        
        btnClose.addEventListener(itemEvent, (e) => {
            e.preventDefault();
            modalContainer.innerHTML = "";
            formValidation = 0;
            modalContainer.classList.remove('open');              
        }) 
        
        btnClean.addEventListener(itemEvent, (e) => {
            e.preventDefault();
            getElements.forEach((item) => {
                showHeight.innerText = "Altura:";
                showWeigth.innerText = "Peso:";
                item.value = "";
                item.classList.remove('valid');
                formValidation = 0;
            })            
        })

        btnSave.addEventListener(itemEvent, (e) => {
            e.preventDefault(); 

            getElements.forEach((item) => {
                if (item.classList.contains('valid') === true) {
                    formValidation++;
                }
            })            
            
            if (formValidation === 5) {
                if (!localStorage.personId) {
                    getElements.forEach(({name, value}) => {
                        if (name !== "height" && name !== "weigth") {
                            peopleObject[name] = value;                    
                        }else{
                            peopleObject[name] = +value;                    
                        }                                                
                    })
        
                    postPerson(peopleObject);
                    modalContainer.innerHTML = "";
                    modalContainer.classList.remove('open');
                    return;  
                } 
    
                putPerson(localStorage.personId);
                modalContainer.innerHTML = "";
                modalContainer.classList.remove('open');  

            } 
            
            formValidation = 0;
        })                                
    })         
}
export default handleEventModal;







