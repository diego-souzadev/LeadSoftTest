function handlePassword() {    
    const inputPassword = document.getElementById('password');
    const btnPassword = document.getElementById('btn-password');
    const imgPassword = document.querySelector('#btn-password img');      
    
    ['touchstart', 'click'].forEach((itemEvent) => {
        btnPassword.addEventListener(itemEvent, () => {
            if (inputPassword.type === "password") {                
                inputPassword.type = "text"; 
                imgPassword.src = "../img/hide.png"
                return;
            } 

            if (inputPassword.type === 'text') {               
                inputPassword.type = 'password'; 
                imgPassword.src = "../img/show.png";               
            }              
        })
    })
}
export default handlePassword;