const prompt = require( 'prompt-sync')()

let tab = [
    {
        question : "Quel est la capital de la france ?",
        reponses: ["A) Marseille bébé!!", " B) Paris est magique","C)La capital est morte"],
        good : "C"
    },
    {
        question : "Quel animal est le plus rapide ?",
        reponses: ["A) La tortue", "B) Un ballon","C) La maserati"],
        good : "A",
        
    },
    {
        question : "Qu'est-ce qu'un Hobbit ?",
        reponses: ["A) Un homme de petite taille XXS", "B) Un nain", "C) Un petit elfe", "D) Semi-hommes"],
        good : "D",
        
    },
    {
        question : "Quel est le meilleur jeux zelda ?",
        reponses: ["A) Twilight Princess", "B) Breath of the Wild","C) Wind Waker","D) Ocarina of Time"],
        good : "D",
        
    },
    {
        question : "Quel est le premier Disney ?",
        reponses: ["A) Cendrillon", "B) Merlin l'Enchanteur","C) Blanche-Neige","D)La Petite Sirène"],
        good : "C",
        
    },

]
let count = 0;

for (let i = 0; i < tab.length; i++) {
    console.log(tab[i].question);
    for (let j = 0; j < tab[i].reponses.length; j++) {
        console.log(tab[i].reponses[j]);
    }
    let reponse = prompt("Reponse ??");
    if (reponse.toLowerCase() === tab[i].good.toLowerCase()) {
        console.log("GOOD +1");
        count++;
    } else {
        console.log("Mauvaise réponse!!");
    }
}

console.log("Resultat : " + count);
