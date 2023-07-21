import calcAge from "./calcAge.js";

function getAllPeople() {    
    const btnInclude = document.querySelector('#include');
    const btnPrevious = document.getElementById('btn-previous-page');
    const btnNext = document.getElementById('btn-next-page');
    const numberPage = document.getElementById('number-page');     
    const pageSize = 20;
    let elementHeader = document.querySelector('[data-container="parent"]');    
    let page = 1;
    let totalItens = 0;
    let itensPage = 0;

    if (itensPage === 0 && page === 1) {
        btnPrevious.style.display = 'none';
        currentPage(page, pageSize);
    }

    function btnVerify(e) {
        if (e.target.id === `img-previous-page`) {
            page--;
            numberPage.innerText = page;
            btnNext.style.display = "flex";

            elementHeader.querySelectorAll('ul').forEach((item) => {
                item.remove();
            })
            
            if (page === 1) {
                btnPrevious.style.display = "none";
                btnNext.style.display = "flex";
            }
            currentPage(page, pageSize);                                    
        }
    
        if (e.target.id === `img-next-page`) {
            page++;
            numberPage.innerText = page;
            btnPrevious.style.display = "flex";

            elementHeader.querySelectorAll('ul').forEach((item) => {
                item.remove();
            })
            
            if ((totalItens / page) <= pageSize) {
                btnPrevious.style.display = "flex";            
                btnNext.style.display = "none";
                currentPage(page, pageSize); 
                return;
            } 
            currentPage(page, pageSize);                                     
        }
    }

    ['touchstart', 'click'].forEach((itemEvent) => {
        window.addEventListener(itemEvent, btnVerify);
    })  
    
    async function currentPage(pageCurrent, pageSizeConst) {
        const urlAll = `http://peopletest.leadsoft.inf.br/api/v1/People?CurrentPage=1&PageSize=1&IsPaged=false`;
        const url = `http://peopletest.leadsoft.inf.br/api/v1/People?CurrentPage=${pageCurrent}&PageSize=${pageSizeConst}&IsPaged=true`;
        const optionsFetch = {
            method: 'GET',        
            headers: {
                "authorization":localStorage.token,
                "content-type":"application/json; charset=utf-8"            
            }
        }       
        
        let responsePerson = await fetch(urlAll, optionsFetch);
        totalItens = await responsePerson.json();
        totalItens = totalItens.length;                   

        if (totalItens === 0) {
            btnInclude.classList.remove('off');
        }
        
        if (totalItens <= pageSize) {
            btnPrevious.style.display = "none";
            btnNext.style.display = "none";            
        }        
    
        responsePerson = await fetch(url, optionsFetch);
        let responseObjPerson = await responsePerson.json();                
        itensPage = responseObjPerson.length;       
    
        if (itensPage !== 0) {
            btnInclude.classList.add('off');
    
            responseObjPerson.forEach((itemObj) => {
                const agePerson = calcAge(itemObj.DateOfBirth);
                const height = itemObj.Height.toString().replace('.', ",");            
                
                const newPerson = `
                <ul class="header-inline person" id="ul-${itemObj.Id}">
                    <li id="fullName">${itemObj.Name} ${itemObj.Surname}</li>
                    <li id="age">${agePerson} anos</li>
                    <li id="weigth">${itemObj.Weigth} kgs</li>
                    <li id="height">${height} mts</li>
                    <button class="btn handleBtn" id="${itemObj.Id}">
                        <img class="btnImg" id="btn-img-imc" src="../img/imc.png" name="imc">
                    </button>
                    <button class="btn handleBtn" id="${itemObj.Id}">
                        <img class="btnImg" id="btn-img-edit" src="../img/pencil.png" name="Editar">
                    </button>
                    <button class="btn handleBtn" id="${itemObj.Id}">
                        <img class="btnImg" id="btn-img-exclude" src="../img/trash.png" name="Excluir">
                    </button>    
                </ul>`
                
                elementHeader.innerHTML += newPerson;
            })
        } 
    }     
}
export default getAllPeople; 