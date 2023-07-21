function loginEffect() { 
    const elementlist = document.querySelector('[data-login="container"]');    
    
    function addClass() {
        elementlist.classList.add('loaded');
    }     
    window.addEventListener('load', addClass);

    setTimeout(() => {
        window.removeEventListener('load', addClass);
    }, 2000)    
}
export default loginEffect;