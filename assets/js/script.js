//funzione per struttura pagina
function createElements(eTag, eParent, eClass = [], eId = '', eContent = '') {
    const element = document.createElement(eTag);
    if (eParent === 'body') {
        document.body.append(element);
    } else {
        eParent.append(element);
    }
    if (eClass && Array.isArray(eClass)) {
        eClass.forEach(cls => {
            element.classList.add(cls);
        });
    }
    if (eId) {
        element.setAttribute('id', eId);
    }
    if (eContent) {
        element.insertAdjacentHTML('afterbegin', eContent);
    }
    return element; //returns eTag
};

//struttura pagina
const divTitolo=createElements('div', container, ['titolo'], null, null);
const h1 = createElements('h1', divTitolo, null, null, 'Counter');
const divCount = createElements('div', container, ['contatore'], 'count', '0');
const divPulsanti = createElements('div', container, ['pulsanti'], null, null);
const btnPiu = createElements('button', divPulsanti, ['btn', 'incremento'], null, '+');
const btnReset = createElements('button', divPulsanti, ['btn', 'reset'], null, 'reset');
const btnMeno = createElements('button', divPulsanti, ['btn', 'decremento'], null, '-');

//imostazione counter iniziale
let counter = 0;

//selezione di value e buttons
const count = document.getElementById("count");
const buttons = document.querySelectorAll(".btn");

//funzione buttons
buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        const style = e.currentTarget.classList;
        if (style.contains("decremento")) {
            counter--;
        } else if (style.contains("incremento")) {
            counter++;
        } else {
            counter = 0;
        }
        //ciclo dei colori
        if (counter > 0) {
            count.style.color = "green";
        } 
        if (counter < 0) {
            count.style.color = "red";
        }
        if (counter === 0) {
            count.style.color = "white";
        }

        //scrittura numero
        count.textContent = counter;
    });
 });
