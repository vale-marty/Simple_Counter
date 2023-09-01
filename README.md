# Simple_Counter
contatore semplice

## Linguaggi usati
Per questo progetto ho utilizzato 3 linguaggi:
- HTML5
- CSS3
- JavaScript

## Descrizione progetto 
Il progetto che ho realizzato è un semplice contatore con tre tasti (+, reset, -). In oltre il numero cambia in colore rosso se negativo (n < 0) e in verde se è positivo (n > 0).

## JavaScript
Per prima cosa ho creato una funzione che mi permettesse di creare i nodi del DOM in maniera più veloce e semplice:
```javascript
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
```
questo mi ha permesso di scrivere ogni elemnto in una sola riga (esempio: `const div = document.createElements('div', container, ['titolo', 'rosso'], 'count', 'ciao sono un div')`)

Quindi ho scritto 2 cicli per i pulsanti e il cambio colore
```javascript
//ciclo dei pulsanti
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
        count.textContent = counter;
  });
});
```

## Istruzioni 
- Premere il tasto + per amentare il numero di 1
- Premere il tasto - per diminuire il numero di 1
- Premere il tasto reset per riportare il contatore a 0
