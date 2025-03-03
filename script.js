const bouton1 = document.getElementById("bouton1");
const bouton2 = document.getElementById("bouton2");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const formulaire = document.getElementById("form1");
const form2 = document.getElementById("form2");
let input1Value = "";
let input2Value = "";

const latinToMorse = {
    'A':'.-',
    'B':'-...',
    'C':'-.-.',
    'D':'-..',
    'E':'.',
    'F':'..-.',
    'G':'--.',
    'H':'....',
    'I':'..',
    'J':'.---',
    'K':'-.-',
    'L':'.-..',
    'M':'--',
    'N':'-.',
    'O':'---',
    'P':'.--.',
    'Q':'--.-',
    'R':'.-.',
    'S':'...',
    'T':'-',
    'U':'..-',
    'V':'...-',
    'W':'.--',
    'X':'-..-',
    'Y':'-.--',
    'Z':'--..',
    ' ': '/'
};


function Alphabet(a) {
    return latinToMorse[a];
}

function AlphabetVersMorse(alphabet) {
    let morse = alphabet.split('').map(Alphabet).join(' ');
    console.log(morse);
    return morse;
}

formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    input1Value = input1.value;
    console.log(input1Value);
    
    document.getElementById("outputMorse").textContent = AlphabetVersMorse(input1Value);
});



const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H",
    '/': " "
  };
  function Morse(a) {
    return morseToLatin[a];
  }

function MorseVersAlphabet(morse) {
    let alphabet = morse.split(' ').map(Morse).join('');
    console.log(alphabet);
    return alphabet;
}
 
form2.addEventListener("submit", (e) => {
    e.preventDefault();
    input2Value = input2.value;
    console.log(input2Value);
    document.getElementById("outputText").textContent = MorseVersAlphabet(input2Value);
});


AlphabetVersMorse("SOS"); // --> "... --- ..."
MorseVersAlphabet("... --- ..."); // --> "SOS"




//---------------------------------------------------
// ca marche pas trop comme je veux ca


// function caca(a) {
//     return { A: ".-" ,C: "-.-.", B: "-...", D: "-.. ", E: ".", F: "..-.", G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--.." ," ": "/"}[a];
// }

// function reverse(b){
//     let mademande = b.split('').map(caca).join(' ');
//     console.log(mademande);
//     return mademande;
// }

// reverse("SOS"); // --> "... --- ..."
// reverse("... --- ..."); // --> "SOS"