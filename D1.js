/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  /*a lezione abbiamo visto 3 macro-datatype che sono:

1- String: abbreviazione di stringa, sta a significare quel datatype di tipologia " scritta ". Viene contenuto tra i due apici, che possono essere di tipo doppio "" o di tipo singolo''. Non c'è diffenza ma vanno appunto a rappresentare una porziene di testo, totalmente inventata da noi, e che verrà poi riprodotta esattmente come la scriveremo.

let ilMioNome = "MaRco"

2- numerico: si divide in due micro-datatype che sono Int e Float. Int rappresenta i numeri interi mentre float rappresenta i numeri decimali che vengono rappresentati con il punto e non con la virgola. I numeri vengono trascritti senza i due apici, perchè nel caso venissero scritti con i due apici il browser li leggerebbe in quanto parte testuale, parte string e non numerica

let valore1 = 5;
let valore2 = 10;

3- Booleano: il datatype booleano che anch'esso non viene trascritto dentro apici risponde a True o False

let valoreBooleano = false;

possiamo chiudere le variabili sia con punto e virgola, che senza. nel caso non mettiamo il punto e virgola siamo obbligati ad andare a capo per far si che l'operazione si concluda.

abbiamo anche datatype di tipo null, che rappresenta la mancanza di un oggetto, in modo intenzionale

e abbiamo anche il datatype di tipo undefined che rappresenza che invece un oggetto, che stiamo cercando di richiamare in realtà non gli è stato dato un valore


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//const name = "Marco"; 

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//let numero1 = 12;

//let numero2 = 20;

//let somma = numero1 + numero2;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//name = "Silveri"

//console.log(name) 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeroQuattro = 4;

console.log (x - numeroQuattro);
console.log (numeroQuattro - x);

let sottrazione = numeroQuattro - x;
console.log (sottrazione);

let sottrazione2 = x - numeroQuattro;
console.log (sottrazione2)

let numero5 = numeroQuattro -= x;
console.log (numero5)

let numero6 = x -= numeroQuattro;
console.log (numero6)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 let name1= "jhon"

 let name2= "Jhon"

 console.log(name1 + name2)

 console.log(name1 !== name2)

 console.log(name1 != name2)

 console.log(name1 == name2)

 console.log(name1 === name2)

 console.log(name1.toLowerCase() === name2.toLowerCase())

let celsius= prompt("inserisci gradi celsius")

let fahrenheit= (celsius * 1.8);

let fahrenheit1= (fahrenheit + 32)

console.log(fahrenheit1)