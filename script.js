
/* ===========================================
         Uppgift 2 — Variabler och scope
===========================================
*/

// Block-scope demonstration
{
    const constGreetInsideBlock = "Assalamualaikum, Umi! const inside block";
    let letGreetInsideBlock = "Assalamualaikum, Camii! let inside block";
    var varGreetInsideBlock = "Assalamualaikum, Ya Cabdalla! var inside block";

    console.log("INUTI block - constGreetInsideBlock:", constGreetInsideBlock);
    console.log("INUTI block - letGreetInsideBlock:", letGreetInsideBlock);
    console.log("INUTI block - varGreetInsideBlock:", varGreetInsideBlock);
}

// Logga efter block:
// - constGreetInsideBlock och letGreetInsideBlock är block-scoped => inte åtkomliga utanför
// - varGreetInsideBlock deklarerad i blocket med var blir åtkomlig här (i global kontext)
/*    console.log("EFTER block - typeof constGreetInsideBlock:",  constGreetInsideBlock);
   console.log("EFTER block - typeof letGreetInsideBlock:", letGreetInsideBlock);

   // varGreetInsideBlock: eftersom var inte är block-scoped i global kontext kan den finnas kvar
   console.log("EFTER block - varGreetInsideBlock:", varGreetInsideBlock); */


/* ===========================================
   Reflektion uppgift 2 — Variabler och scope
   ===========================================
   - var: function/global-scoped. Om du deklarerar var inne i ett block (i global kontext)
     blir variabeln åtkomlig även utanför blocket.
   - let/const: block-scoped. De kan inte nås utanför det block där de deklarerats.
   - console.log före/inuti/efter block visar dessa skillnader tydligt.
*/



/* ===========================================
    Uppgift 3 — Jämförelser och specialvärden
   ===========================================
*/

console.log("'3' == 3:", '3' == 3);     // true
console.log("'3' === 3:", '3' === 3);   // false
console.log("NaN === NaN:", NaN === NaN); // false
console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false

const siffra = 9;
console.log("siffra == '9':", siffra == "9");   // true (typkonvertering)
console.log("siffra === '9':", siffra === "9"); // false (olika typer)

// Ternary: villkor och meddelanden ska matcha varandra
siffra > 9
    ? console.log("Ternary: Siffra är större än 9")
    : console.log("Ternary: Siffra är mindre än eller lika med 9");

// NaN-example (sträng delat med nummer blir NaN)
const hi = "Hej";
console.log("hi / 2 =>", hi / 2); // NaN

// Undersök undefined
let x; // deklarerad men ej tilldelad => undefined
console.log("x innan tilldelning:", x);
x = 5;
console.log("x efter tilldelning:", x);

// Null
let y = null;
console.log("y initialt (null):", y);
y = 10;
console.log("y efter tilldelning:", y);

/* ===========================================
  Reflektion uppgift 3 — Jämförelser och specialvärden
  ===========================================
  - '==' (loose equality) gör typkonvertering innan jämförelse.
  - '===' (strict equality) jämför både typ och värde.
  - NaN === NaN är false — NaN är aldrig lika med något, använd Number.isNaN(x).
  - null == undefined är true (löskoppling), men null === undefined är false.
  - Ett uttryck i en ternary används som villkor: if it is truthy => första gren, annars andra.
*/



/* ===========================================
    Uppgift 4 — Funktioner
   ===========================================
*/

let name = "Abdalla"; // global variabel med namnet 'name'

function greet(name) { // 'name' här är en parameter (lokal till funktionen)
    console.log("Name inside function (parameter):", name);
    return `Hej, ${name}!`;
}

console.log("Global 'name' före funktionsanrop:", name);

// Anropa funktionen med argument "Shakur"
const greetResult = greet("Shakur");
console.log("Returvärde från greet('Shakur'):", greetResult);

// Global variabel påverkad? nej, parametern är lokal
console.log("Global 'name' efter funktionsanrop (oförändrad):", name);

// Exempel: funktionsuttryck och arrow (visar skillnad i hoisting)
// Funktion deklaration kan anropas tidigare än dess kod (hoisting):
hoistedFunction(); // fungerar — hoisting för funktionsdeklaration

function hoistedFunction() {
    console.log("Hoisted function körs — funktionsdeklaration blir hoistad.");
}

// Funktionsuttryck (hoistas inte):
//nonHoisted(); // ReferenceError: Cannot access 'nonHoisted' before initialization

const nonHoisted = function () {
    console.log("Funktionsuttryck körs — måste deklareras innan anrop.");
};

nonHoisted(); // fungerar — anrop efter deklaration

// console.log(arrowFn("Vän")); // ReferenceError: Cannot access 'arrowFn' before initialization
const arrowFn = (who) => `Hej från arrow, ${who}!`;
console.log(arrowFn("Vän"));


/* ===========================================
       Reflektion uppgift 4 — Funktioner
  ===========================================
  - Funktionsdeklaration (function namn() {}) hoistas: kan anropas innan deklarationen.
  - Funktionsuttryck / arrow (const f = function(){} eller const f = () => {}) hoistas inte.
  - Parametern 'name' i funktionen är lokal och shadows global variabel med samma namn.
  - Parameter = variabelnamn i funktionsdefinition; argument = värdet du skickar in vid anrop.
*/



function multSum() {
    let n1 = Number(prompt("Ange första numret:"));
    let n2 = Number(prompt("Ange andra numret:"));
    if (isNaN(n1) || isNaN(n2)) {
        return "Fel: båda värdena måste vara siffror.";
    }

    let sum = n1 + n2;
    let mult = n1 * n2;
    return n1 === n2 ? `Summan är: ${sum}, Produkten är: ${mult} (Båda numren är lika)`
        : `Summan är: ${sum}, Produkten är: ${mult}`;

}

alert(multSum());
