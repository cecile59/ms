

// 5- Afficher du texte
/*
// exo n°1
var nom =prompt("Saisissez votre nom");
// demande le nom
var prénom = window.prompt("Saisissez votre prénom");
//demande le prenom 

// exo n°2
if (window.confirm("Etes- vous un homme ?") == true) // si ok continue / si anuler aréte 
{ 
    window.alert("Bonjour Monsieur " + nom  + " " + prénom  + "\nBienvenue sur notre site web!" )
 // mesage bonjour + nom+prénom+2eme line binvenu sur le site   (\n= à la ligne)

}
*/



/*
// 6-Les opérateurs


var a = "100m"; 
document.write("Ceci est une chaîne de caractères :"+a+"<br>");


var b =  100 ;
document.write("<br>" + b--); 



var a = "100m"; 
let c = 1.20;  //contien la valeur 1,20
document.write("<br>" +c + a );



var d = true
document.write("<br>" + !d  ) ;
// ! retourne un bouléen  

*/


// 7-Les conditions
/*
              -----*-----*-----*-----*-----
Exercice 1 - Parité
Ecrivez un programme qui demande un nombre à l'utilisateur puis qui teste si ce nombre est pair. 
Le programme doit afficher le résultat nombre pair ou nombre impair.
Vous devez utiliser l'opérateur modulo % qui donne le reste d'une division.
a%2 donne le reste de la division de a par 2, si ce reste est égal à zéro, a est divisible par 2.
              -----*-----*-----*-----*-----

var nombre = prompt("donner un nombre");
console.log ("votre nombre es :" + nombre % 2);//0=Pair    (autre)=impair //

if (nombre %  2 == 0 )
{ 
       console.log ("votre nombre et Pair");
}

else 
{
       console.log (" Votre nombre es Inpere" );
}

/*

/*
              -----*-----*-----*-----*-----
Exercice 2 - Age
Ecrivez un programme qui demande l'année de naissance à l'utilisateur.
En réponse votre programme doit afficher l'âge de l'utilisateur 
et indiquer si l'utilisateur est majeur ou mineur.
              -----*-----*-----*-----*-----

var année_naissance = prompt('quelle es votre année de naissance ?');
var année =(new Date ()).getFullYear();
var age = année - année_naissance ;

console.log ("vous avez " + age );

if (age >= 18)
{
(console.log("vous etes majeur")) ;
}
else 
{
       (console.log("vous etes mineur"));
}
             
*/


/*
              -----*-----*-----*-----*-----
              
Exercice 3 - Calculette
Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur +, -, * ou /.

Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.

Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur division par 0), puis affichera le résultat.
              -----*-----*-----*-----*-----

var nombre_1 = prompt( "Saisie d'un nombres entiers");
var nombre_2 = prompt(" Saisie d'un nombres entiers");
var opérateur = prompt("Saisie d'un opérateur ");



if(nombre)
{
     ( console.log (nombre_1 + opérateur + nombre_2));
}
else( opérateur != + )
{
       alert("opérateur erroné" ) ; 
}*/


var nombre_1=  Number(prompt("Choisi un nombre"));
var opérateur = prompt (" Choisiser votre operateur( +, -, * ou / )");
var nombre_2 = Number(prompt ("Choisi un 2eme nombre"));
var resultat = nombre_1 + opérateur + nombre_2 ;

if ( opérateur =! " +, -, * ou / " )
{
       alert("opérateur erroné" ) ; 
}


else (opérateur == "+")
{
  console.log ( nombre_1 + nombre_2);
  
}


else ( opérateur == "-")
{
   console.log ( nombre_1 - nombre_2);
}


else ( opérateur == "*")
{
   console.log ( nombre_1 * nombre_2);
}


else ( opérateur == "/")
{
   console.log ( nombre_1 / nombre_2);
}

