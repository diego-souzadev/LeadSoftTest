import verifyLogin from "./verifyLogin.js";

let passwordElement = '';
let userElement = '';
const url = "http://peopletest.leadsoft.inf.br/api/v1/Auth/LogIn"

function initProcessLogin() {    
    if(localStorage.lastUser){
        userElement = document.querySelector('#email').value = localStorage.lastUser;
    }

    const btnLogin = document.querySelector('#btnLogin');
    ['click', 'touchstart', 'blur'].forEach((itemEvent) => {
        if (itemEvent != 'blur') {
            btnLogin.addEventListener(itemEvent, loginRequestAuth);
        }

        btnLogin.addEventListener('keydown', (event) => {
            event.preventDefault();

            if (event.key === 'Tab') {
                document.querySelector('#email').focus();
                return;
            }

            if(event.key === "Enter"){          
                loginRequestAuth();            
            }                
        })
                          
    })    
    
    function handleSubmit(event) {
        event.preventDefault();                

        if(event.key === "Enter"){          
            loginRequestAuth();            
        }      
    }

    document.querySelector('#password').addEventListener('keyup', handleSubmit);   
}

async function loginRequestAuth() {        
    userElement = document.querySelector('#email').value;
    passwordElement = document.querySelector('#password').value;

    const objLogin = {
        username: userElement, 
        password: passwordElement
    }

    if (userElement) {
        localStorage.lastUser = userElement;
    }
            
    const optionsFetch = {
        method: 'POST',
        body: JSON.stringify(objLogin),
        headers: {
            "content-type":"application/json; charset=utf-8"
        }
    }

    const responseLogin = await fetch(url, optionsFetch);        
    const responseObj = await responseLogin.json();
    const dateLogin = new Date(responseObj.When);
    
    localStorage.token = responseObj.Authorization;
    localStorage.Login = dateLogin;
    localStorage.request = responseLogin.ok;             
           
    verifyLogin(responseLogin.ok);
}
export default initProcessLogin;





       




