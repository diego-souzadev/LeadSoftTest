import validationModal from "./validationModal.js";
import handleEventModal from "./handleEventModal.js";

function loadModalForm(content = "") {
    const sectionElement = document.getElementById('modal-container');    
    const modalElement = `
        <section id="modal-create-person" class="section-modal">
            <div class="form-container" data-container="form">
                <form id="people" class="form">
                    <label id="label-date">Nome</label>
                    <input type="text" name="name" id="name-input" class="inputs" placeholder="Nome" value="${content.Name || ""}" required >                    
                    <label id="label-date">Sobrenome</label>                                                     
                    <input type="text" name="surname" id="surname-input" class="inputs" placeholder="Sobrenome" value="${content.Surname || ""}" required>                    
                    <label id="label-date">Data de nascimento</label>
                    <input type="date" name="dateOfBirth" id="date-input" class="inputs" min="1980-01-01" max="2023-12-31" value="${content.DateOfBirth || ""}" required>                    
                    <div class="height-weigth">
                        <div id="div-weigth"><img src="../img/quilograma.png"><span id="show-weigth">Peso: </span></div>                            
                        <input type="range" name="weigth" min="1" max="300" step="1" id="weigth-input" class="inputs" value="${content.Weigth}">                       
                        <div id="div-height"><img src="../img/altura.png"><span id="show-height">Altura: </span></div>                                                                          
                        <input type="range" name="height" min="0.50" max="2.50" step="0.01" id="height-input" class="inputs" value="${content.Height}">                                                   
                        <button class="btn save-btn" id="save">Salvar</button>
                        <button class="btn cancel-btn" id="cancel">Limpar</button>
                        <button class="btn close-btn" id="close-modal">X</button>
                    </div>
                </form>
            </div>
        </section>`
    sectionElement.innerHTML = modalElement;
    sectionElement.classList.add('open');

    if (content !== "") {
        validationModal(true);
    }

    validationModal();
    handleEventModal();
}
export default loadModalForm;