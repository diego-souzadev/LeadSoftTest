function validationModal(valid) {
    const getElements = document.querySelectorAll('#people input');
    const inputName = document.getElementById('name-input');
    const inputSurname =  document.getElementById('surname-input');
    const inputDate =  document.getElementById('date-input');
    const inputWeigth = document.getElementById('weigth-input');
    const inputHeigth = document.getElementById('height-input');
    const regexName = /[^a-zA-ZÀ-ÿ]+/;
    const regexSurname = /[^a-zA-ZÀ-ÿ ]+/;
    
    if (valid) {
        getElements.forEach((item) => {
            item.classList.add('valid');
        })        
    }

    inputName.addEventListener('change', () =>{ 
        if (inputName.value.length >= 2) {
            inputName.classList.add('valid');          
            return;
        }
        inputName.classList.remove('valid');                               
    })

    inputSurname.addEventListener('change', () => {       
        if (inputSurname.value.length >= 2) {            
            inputSurname.classList.add('valid');           
            return;
        }
        inputSurname.classList.remove('valid');                  
    })

    inputDate.addEventListener('change', (e) => {                    
        const date = new Date(e.target.value);
        const currentYear = date.getFullYear();
        
        if (currentYear >= 1980) {
            inputDate.classList.add('valid');           
            return;
        }        
        inputDate.classList.remove('valid');       
    }) 
    
    inputWeigth.addEventListener('change', (e) => {                    
       inputWeigth.classList.add('valid');     
    })
    
    inputWeigth.addEventListener('change', (e) => {                    
        inputHeigth.classList.add('valid');     
     })  

    getElements.forEach((itemElement) => { 
        switch(itemElement.id){
            case "name-input": {
                itemElement.addEventListener('keyup', (e) => {
                    e.preventDefault();                   
                    itemElement.value = itemElement.value.replace(regexName, "");                                                
                })
                break;                                       
            }
            case "surname-input": {
                itemElement.addEventListener('keyup', (e) => {
                    e.preventDefault();
                    itemElement.value = itemElement.value.replace(regexSurname, "");                                              
                })
                break; 
            }
            case "height-input": {
                const showHeight = document.getElementById('show-height')
                let itemString = itemElement.value.toString();
                showHeight.innerText = `Altura: ${itemString.replace('.', ',')} mts`;

                itemElement.addEventListener('input', (e) => {
                    e.preventDefault();
                    itemString = itemElement.value.toString();                
                    showHeight.innerText = `Altura: ${itemString.replace('.', ',')} mts`;                                                                                     
                })                                      
                break; 
            }
            case "weigth-input": { 
                const showWeigth = document.getElementById('show-weigth')
                let itemString = itemElement.value.toString();
                showWeigth.innerText = `Peso: ${itemString.replace('.', ',')} kgs`;

                itemElement.addEventListener('input', (e) => {
                    e.preventDefault();                    
                    itemString = itemElement.value.toString();
                    showWeigth.innerText = `Peso: ${itemString.replace('.', ',')} kgs`;                                                                                     
                })                    
            }                
        }            
    })    
}
export default validationModal;

