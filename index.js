function scuberGreetingForFeet(distance){
  // Write your code here!
 let result
 if (distance < 400) {
    result = 'This one is on me!';
  } else if (distance > 2000 && distance < 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
  result = 'No can do.';
  }
  return result
}

function ternaryCheckCity(city){
  // Write your code here!
return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let reaction; 
  
  switch (tip) {
    case 'generous':
      reaction = 'Thank you so much.';
      break;     
    case 'not as generous':
      reaction = 'Thank you.';
      break;
    default:
        reaction = 'Bye.';   
  }
  return reaction;
}

