// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


// use function fleche
const jsSarter = edu0 => {  
  // const day = 'Monday'; 
  const userName = 'Mike'; 

  if (edu0 === 'Wednesday') {
    return `Hi ${userName}, it's wednesday.`;
  } else if (edu0 === 'friday') {
    return `Hi ${userName}, it's friday.`; 
  } else if (edu0 === 'friday') {
    return `Hi ${userName}, it's Monday. `;  
  } else { 
    return `Hi ${userName}, it's nothing.`; 
  }  
} 

console.log(jsSarter()); 


// use nrormal function 
function adiitional () {
  const add0 = 'hi'; 

  if (add0 === 'no') {
    return 'No'; 
  } else if (add0 === 'hi') {
    return 'hi'; 
  } else {
    return 'oups!';  
  }
}

console.log(adiitional()); 

// simple calcule 
let a = 10; 
let e = 20; 
let t = 30;  
let u = 40; 
let o = 50; 
let res0 = a * e * t * (u % o); 
console.log(res0);  


// Définir le temps de sommeil 
const getSleepyHours = day => {
  if (day === 'monday') {
    return 8; 
  } else if (day === 'tuesday') {
    return 8; 
  } else if (day === 'wednesday') {
    return 8; 
  } else if (day === 'thursday') {
    return 8; 
  } else if (day === 'firday') {
    return 8; 
  } else if (day === 'saturday') {
    return 8; 
  } else if (day === 'sunday') {
    return 8; 
  } else {
    return ''; 
  }
}

console.log(getSleepyHours());  



// fonction qui renvoie le nombre d'heures de repos d'une nuit donnée
const getSleepHours = day => {
  switch (day) {
    case 'Monday': 
      return 8; 
      break; 
    case 'tuesday':
      return 8; 
      break;
    case 'wednesday': 
      return 8; 
      break;  
    case 'thursday': 
      return 8;
      break;
    case 'friday':
      return 8; 
    case 'saturday':
      return 8;  
    case 'sunday': 
      return 8; 
      break;
    dafault: 
      break;  
  }
}; 

console.log(getSleepHours('tuesday')); 

// Pour obtenir le nombre total d'heures de sommeil
const getActualSleepHours = () => {
return getSleepHours('Monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');    
};  

console.log(getActualSleepHours());  
 
// Pour obtenir les heures de sommeil idéales
const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours;  
}

console.log(getIdealSleepHours()); 

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours(); 
  const idealSleepHours = getIdealSleepHours(); 

  if (actualSleepHours === idealSleepHours) {
    console.log('The user got the perfect amount of sleep.');  
  } else if (actualSleepHours > idealSleepHours) {
    console.log('The user got more sleep than needed.'); 
  } else {
    console.log('The user should get some rest.'); 
  } 
}; 

console.log(calculateSleepDebt());  

// zéro paramètre
const theFunc0 = () => {
 //...
}; 
console.log(theFunc0());

// un paramètre
const theFunc1 = param01 => {
  //... 
}; 
console.log(theFunc1()); 

// un ou plusieurs paramètres
const theFunc2 = (param02, param03, param04) => {
  //... 
}; 

console.log(theFunc2(5, 10, 10)); 

// fonction sur une seule ligne 
const theFunc3 = num => num * num * num; 
console.log(theFunc3(10)); 
console.log(typeof theFunc3); 


const dayWeek = () => {
  return getWeek('lundi') + getWeek('mardi') + getWeek('mercredi') + getWeek('jeudi') + getWeek('vendredi') + getWeek('samedi') + getWeek('dimanche');  
}; 

console.log(dayWeek); 


const colorChoice = () => {
  let color = 'red'; 
  // color = 'blue';
  console.log(color);  
}

colorChoice(); 

const city = 'New York City'; 
function logCitySkyline () {
  let skyscraper = 'Empire State Building'; 
  return 'The stars over the ' + skyscraper + ' in ' + city; 
  console.log(logCitySkyline()); 
}; 

logCitySkyline(); 

// scope (ou variabl) global(e)
let myVariable = 'Je suis là'; 

function myFuncFunc () {
  console.log(myVariable);
};  

myFuncFunc();


let choiceTheCar = 'Je choisi cette voiture.';  

const theChoice  = () => { 
  return choiceTheCar; 
}; 

console.log(theChoice());  
 



