
// Commentaire sur une seule ligne

/*
  Ce commentaire est
  sur plusieurs lignes
*/

// Variables

let maVariableBooleenne = true;

let maVariable = 12;

const maConstante = 12;

let maChaine = "hello world";

let maVariableNB = 12;

let maVariableNV = 12.5;

/*
  Règles de nommages
  Règles à respecter pour le nommage des variables:
  1. Commencer par une lettre ou un underscore_
  2. Peut contenir des chiffres, lettres, underscores, pas de tirets ou points
  3. Pas de mots clés (new, ofr, while)
  4. Sensible à la casse : Mavar différent de mavar
  5. Si plusieurs mots : majuscule sur première lettre de chaque mot sauf premier mot. Ex : monAdresse
  6. Le nom doit décrire la variable
  7. Pronoçable
  8. Aussi court que possible, mais aussi long que nécessaire"
*/

if (prixTTC > 100) {
    console.log("C'est cher");
} else {
    console.log("C'est bon");
}

// Affiche le double d'une valeur si celle-ci est inférieure
// au seuil donné
const seuil = 10;
let valeur = 2;

if(valeur < seuil)
{
    valeur = valeur * 2;
}

console.log(`Voici la valeur finale : ${valeur}`)

// CONDITIONS
let note = 15;

if(note >= 12) {
    console.log("Reçu avec mention Très Bien");
} else if(note >= 10) {
    console.log("Reçu avec mention Assez Bien");
} else {
    console.log("Reçu mention Passable");
    console.log("Insuffisant");
}

< plus petit que

> plus grand que

<=plus petit ou égal

>=plus grand ou égal

== égal à

!= est différent de

let genre;

{/* SWITCH */}
switch (genre) {
    case "M":
        break;
    case "Mme":
        break;
    case "Mlle":
        break;
    default:
        console.log("Monsieur");
        console.log("Madame");
        console.log("Mademoiselle");
        console.log("Non genré/Autre");
}