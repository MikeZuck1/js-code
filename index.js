// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS((X)) StarTerCode</h1>`;

// portée globae 
let theAstro = 'I like to watch the moon.'; 

const astro = () => {
  return theAstro; 
};  

console.log(astro()); 


// utilisation du scope (portée)
const city = 'Brussel'; // variable globale. 
function thecity () {
  const sayWelc = 'welcome '; // variable locale. 
  const nameUSer = 'Mike';  
  return `Hi ${nameUSer} and ` + sayWelc + `to ` + city;   
}; 

console.log(thecity()); 
 
// utilisation uniquement de la scope (portée) globale
let scopeGlobale = 'Je suis une variable globale.'; 
function scope0 () { 
  console.log(scopeGlobale); 
} 

scope0(); 

// utilisation de la scope (portée) locale. 
function scope1 () { 
  let scopeLocal = 'Je suis à une variable locale.'; 
  console.log(scopeLocal); 
};  

scope1(); 




