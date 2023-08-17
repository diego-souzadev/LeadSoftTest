import initProcessLogin from "./initProcessLogin.js";
import loginEffect from "./loginEffect.js";
import handlePassword from "./handlePassword.js";
import loadPeopleList from "./loadPeopleList.js";

function loadLoginPage() {    
    const appContainer = document.getElementById('app');

    if (!localStorage.request) {        
        appContainer.innerHTML =  `
            <div class="login-container" data-login="container">
                <h1>Bem vindo(a)!</h1>
                <input type="email" id="email" placeholder="E-mail: exemplo@leadsoft.inf.br" required>                
                <input type="password" id="password" placeholder="Senha" required>                
                <button class="btn-password" id="btn-password"><img src="../img/hide.png" name="Ocultar senha"></button>              
                <button id="btnLogin" class="btnLogin">Login</button>                      
            </div>`
    
        loginEffect();       
        handlePassword();
        initProcessLogin(); 
        return;              
    }

    loadPeopleList();
}
export default loadLoginPage;


