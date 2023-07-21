import loadLoginPage from "./loadLoginPage.js";

function countDownSession() {
    if (localStorage.request) {
        const dateCurrent = new Date();
        let minutes = 59 - (dateCurrent.getMinutes());        
        let seconds = 60 - (dateCurrent.getSeconds());            
        const elementPage = document.querySelector('[data-log="countdown"]');            

        const interval = setInterval(() => {
            if (minutes !== 0 || seconds !== 0) {
                if (seconds !== 0) {
                    seconds--;
                    elementPage.innerHTML = `${minutes} min ${seconds} s`;
                    return; 
                } 
                if (seconds === 0 && minutes !== 0) {
                    minutes--;
                    seconds = 60;
                    return;                  
                }                     
            }

            clearInterval(interval);        
            localStorage.request = "";           
            location.reload();
            loadLoginPage();

        },1000)
    }    
} 
export default countDownSession;



