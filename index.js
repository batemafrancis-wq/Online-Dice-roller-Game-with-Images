
//Dice roller program
function rolldice(){

  const numofdice=document.getElementById("inputtb").value;
  const diceresult=document.getElementById("diceresult");
  const diceimg=document.getElementById("diceimg"); 
  const values = [];
  const images =[];
   let result1;


   // This iterates the program to accomodate more than one dice 
  for(let i=0; i<numofdice; i++){

    const value= Math.floor(Math.random()*6  +1);
    values.push(value);


// Creates an Array of images the (alt =" ...")  gives an alternative when the images fail to load 
   images.push(`<img src="dice_images/${value}.png" alt ="Dice ${value}">`);
  }
  result1=values.join(', ');


  //  This is used to display the images 
  console.log(result1);
diceresult.textContent = `dice:  ${result1}`;
diceimg.innerHTML=images.join('');

}