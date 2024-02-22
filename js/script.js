console.log("linked");
/*
Exercice 1 : 

    Définissez plusieurs variables.
    Attribuez des valeurs différentes aux variables.

    Vous devez avoir :
        
Une variable booléenne
Une variable qui ne peut pas changer de valeur une fois initialisée
Une chaîne de caractère
Une variable numérique avec un entier
Une variable numérique à virgule
*//*
let maVariableBooleenne = true;

const maConstante = 12;

const seuil = "Ne change pas";

let maChaine = "hello world";

let nombre = 12;

let maVariableNV = 12.5;
*//*
let bob = "Bobo";

console.log(`Le mot afficher est : ${bob}`);
*//*
Exercice 2 : Ecrivez un programme qui permet de prendre deux valeurs différentes en entrée renseignée par l'utilisateur (simulée : 12 et 18)
    Le programme doit inverser les valeurs : la première valeur doit devenir la deuxième et inversement
    Le programme doit afficher à l'utilisateur le résultat des deux variables en indiquant clairement les valeurs.
    Par exemple :      
L'utilisateur entre 6 en première valeur
L'utilisateur entre 3 en deuxième valeur

Le programme inverse les deux valeurs(variables), soit :
La première variable doit valoir 3
La deuxième variable doit valoir 6
*//*

let maVariable1 = 12;
let maVariable2 = 18;
let maVariable3 = 0;

maVariable3 = maVariable1 
maVariable1 = maVariable2
maVariable2 = maVariable3 

console.log(`La Variable 1 : ${maVariable1}`);
console.log(`La Variable 2 : ${maVariable2}`);
*/

/*
Exercice 3 :
    Calculer le prix TTC grâce à un prix HT
    On souhaite calculer et afficher, à partir d'un prix hors taxe saisi, la TVA ainsi que le prix TTC.
    Le montant TTC dépend :
        Du prix HT
        Du taux de TVA qui est de 20%
// exo2  in "/Java Script/js/script.js"
*//*
let prixHT = 100;
let tauxTVA = 20;
let prixTTC = 0;

prixTTC= prixHT + (prixHT * tauxTVA / 100);

console.log(`Le prix TTC est : ${prixTTC}`);

CORRECTION : 
const tva = 20;
const titre = "Résultat : ";

let prixHT, prixTTC, montantTVA; // délaration de trois variables sans attribution de valeur

prixHT = 130; // pour attribuer une valeur à une variable déjà déclaré, il n'est pas utile de réécrire let devant

prixTTC = prixHT * (1 + tva/100);
montantTVA = prixTTC - prixHT;

console.log(${titre} ${prixHT}€ HT + TVA ${montantTVA}€ devient ${prixTTC}€ TTC);
*//*

Exercice 4
    Ecrivez un programme qui permet de saluer l'utilisateur en fonction de l'heure :
        
S'il est avant 12h, afficher "Salut"
S'il est entre 12h et 17h, afficher "Bonjour"
S'il est après 17h mais avant 23h, afficher "Bonsoir"
S'il est après 23h et avant 7h30, afficher "Vas te coucher ! "

CORRECTION :
// Corrigé Exo 1

// La valeur du temps simulée par nous même
let time = 5;

if(time < 12 && time >= 7.5){
    console.log("Salut !");
} else if(time >= 12 && time < 17) {
    console.log("Bonjour !");
} else if(time >= 17 && time < 23) {
    console.log("Bonsoir !");
} else {
    console.log("Vas te coucher !");
}
*/
// let heure = 12;

// if (heure < 12) {
//     console.log("Salut");
// } else if (heure < 17) {
//     console.log("Bonjour");
// } else if (heure < 23) {
//     console.log("Bonsoir");
// } else {
//     console.log("Vas te coucher !");
// }


/*
Exercice 5 : 
    Ecrivez un programme qui permet d'entrer une valeur (simulée = 12)

    Une fois la valeur entrée, le programme doit :
        
Multiplier la valeur par 6 si la valeur est inférieure à un seuil donnée (seuil = 15)
Ne rien faire sur la valeur si celle si est supérieure ou égale au seuil
Dans tous les cas, afficher à l'utilisateur le résultat de la valeur

CORRECTION 
let valeur = 12;
const seuil = 15;

if(valeur < seuil){
    // valeur = valeur * 6;
    valeur *= 6;
}

console.log(Le résultat de votre valeur : ${valeur})
*/

// let val1 = 12;
// let seuil = 15;

// console.log(`Voici la valeur ${val1}`)
// if (val1 < seuil){
//     let calc = val1*6
//     console.log(`Voici le resultat de ${val1} x 6 = ${calc}`)
// }


// if (resultat < seuil){
//     resultat >= seuil
//     console.log(`Voici le resultat de ${val1}x6 = ${calc}`)
// }

/*
    Exercice 6 :
    En fonction des données fournies par l'utilisateur, vous devez afficher le coût du carburant pour la totalité de son voyage
Pour cela vous avez besoin de connaître :
La distance qu'il souhaite parcourir avec son véhicule (km)
La consommation moyenne en carburant (L/100km)
Le prix du litre de carburant

CORRECTION 
// Corrigé exo 4

// Demande à l'utilisateur les informations nécessaires
let distance = 15;
let consommation = 5.1; //Consommation moyenne en carburant (L/100km)
let prixCarburant = 1.98; //Prix du litre de carburant en euros

// Calcule la quantité de carburant nécessaire en litres
let quantiteCarburant = (consommation / 100) * distance;

// Calcule le coût total du carburant pour le voyage
let coutTotal = quantiteCarburant * prixCarburant;

// Affiche le résultat
console.log(Pour un voyage de ${distance} km avec une consommation moyenne de ${consommation} L/100km et un prix de carburant de ${prixCarburant} €/L, le coût total du carburant sera de ${coutTotal.toFixed(2)} €.);
*/

// let km = 300;
// let ConsoCarbu = 4;
// let PrixCarbu = 2;

// let result= (km * ConsoCarbu) * 2;

// console.log(`pour vos ${km}km le montant du carburan s'éleve à ${result}€`)

// EXO 7
// Corrigé le code :
// let prixPanier = 250;
// let remiseMinRequis = 150;
// let prixFinal;
// let remise;

// if(prixPanier >= remiseMinRequis) {
//     console.log(`Pas de remise pour les clochard ${prixFinal}€`);
// }
// if(prixPanier >= 150) {
//     remise = 40;
// }if(prixPanier >= 250) {
//     remise = 50;
// }if(prixPanier >= 300) {
//     remise = 60;
// }
// let tva=10;
// prixFinal = (prixPanier - remise)
// console.log(`Prix final : ${prixFinal}€`);

// Exercice 8
/*
    Tester si la variable nb1 est égale à 8, dans ce cas afficher "Le nombre 1 vaut 8"
    Tester si la variable nb1 est égale à 10, dans ce cas afficher "Le nombre 1 vaut 10"
    Tester si la variable nb1 est égale à 12, dans ce cas afficher "Le nombre 1 vaut 12"
    Si on n'entre dans aucun des cas, afficher "On n'entre pas dans les autres conditions"

    Pour cela, vous devez utiliser des SWITCH et non des conditions if...else.
*/

// let nb=1;

// switch (nb) {
//     case nb==8:
//         console.log("le nombre est egale a 8");
//         break;
//     case nb==10:
//         console.log("le nombre est egale a 10");
//         break;
//     case nb==12:
//         console.log("le nombre est egale a 12");
//         break;
//     default:
//         console.log("le nombre n'est pas egale");
// }

// Exercice 9 : 
/*
   Vous allez utiliser le SWITCH afin de tester différents niveaux de compte d'un utilisateur.

   Pour cela, n'oubliez pas de définir la variable que vous allez tester.

   Dans le cas ou le niveau de compte est :
        
Abonné :
Afficher : Vous êtes un abonné, vous pouvez faire uniquement...
Contributeur :
Afficher : Vous êtes Contributeur, vous pouvez...
Administrateur :
Afficher : Vous êtes Administrateur, vous avez tous les droits.
Aucune des conditions ci-dessous :
Afficher : Ce type de compte n'est pas connu.
*/
// Abonné=1;
// Contributeur=2;
// Administrateur=3;

// switch (nb) {
//     case Abonné:
//         console.log("Vous êtes un abonné, vous pouvez faire uniquement...");
//         break;
//     case Contributeur:
//         console.log("Vous êtes Contributeur, vous pouvez...");
//         break;
//     case Administrateur:
//         console.log("Vous êtes Administrateur, vous avez tous les droits.");
//         break;
//     default:
//         console.log("Ce type de compte n'est pas connu.");
// }


