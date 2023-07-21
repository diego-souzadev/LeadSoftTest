import loadPeopleList from "./loadPeopleList.js";

function verifyLogin(statusLogin) {

    if (!statusLogin) {
        alert('Digite um e-mail e/ou senha válidos!');        
        localStorage.lastUser = "";
        document.querySelector('#password').value = "";
        return;
    }

    loadPeopleList();
}
export default verifyLogin;