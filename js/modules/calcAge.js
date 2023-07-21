function calcAge(birth) {
    const dateCurrent = new Date();
    const dateBirth = new Date(birth);
    const currentYear = dateCurrent.getFullYear();
    const birthYear = dateBirth.getFullYear();
    const currentMonth = dateCurrent.getMonth();
    const birthMonth = dateBirth.getMonth();
    const currentDay = dateCurrent.getDate();
    const birthDay = dateBirth.getDate();

    let age = currentYear - birthYear; 

    if((currentMonth < birthMonth) || (currentMonth <= birthMonth) && (currentDay <= birthDay)){
        age--;
    }
    return age;  
} 
export default calcAge; 