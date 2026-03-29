document.querySelector('.main_content').innerHTML = `

    
    <div>
      <pre>Enter for which you want calculation
        1: For ice
        2: For water in Room temperature
        3: For boiling Water
        <input type="number" placeholder="Enter only serial number" id="user_choice">
        <button onclick="choice()"> Next</button>
      </pre>
    </div>
    
`
function choice(){
  const user_choice = document.getElementById('user_choice');
  const choice = Number( user_choice.value);
  
  if(choice === 1){
    document.querySelector('.interface_on_user_choice').innerHTML = `
    <p > 
        For ice 
      </p>
      <p>Enter the value of Fractional Resistance r1(ohm) <input type="number" id = "ohm"></p>
      <p>Enter the value of l1 (cm) <input type="number" id="l1"></p>
      <p>Enter the value of l2 (cm) <input type="number" id="l2"></p>
      <p>Enter the value of Fractional Resistance r2(ohm) <input type="number" id = "ohm2"></p>
      <p>Enter the value of l'1 (cm) <input type="number" id="l_1"></p>
      <p>Enter the value of l'2 (cm) <input type="number" id="l_2"></p>
      <button onclick = "getValue()">Get Result </button>
    `
  }
  else if(choice === 2){
    document.querySelector('.interface_on_user_choice').innerHTML = `
    <p > 
        For water in Room temperature
      </p>
      <p>Enter the value of Fractional Resistance r(ohm) <input type="number" id = "ohm"></p>
      <p>Enter the value of l1 (cm) <input type="number" id="l1"></p>
      <p>Enter the value of l2 (cm) <input type="number" id="l2"></p>
      <p>Enter the value of Fractional Resistance r2(ohm) <input type="number" id = "ohm2"></p>
      <p>Enter the value of l'1 (cm) <input type="number" id="l_1"></p>
      <p>Enter the value of l'2 (cm) <input type="number" id="l_2"></p>
      <button onclick = "getValue()">Get Result </button>
    `
  }
  else if(choice === 3){
    document.querySelector('.interface_on_user_choice').innerHTML =`
    <p > 
        For boiling Water 
      </p>
      <p>Enter the value of Fractional Resistance r(ohm) <input type="number" id = "ohm"></p>
      <p>Enter the value of l1 (cm) <input type="number" id="l1"></p>
      <p>Enter the value of l2 (cm) <input type="number" id="l2"></p>
      <p>Enter the value of Fractional Resistance r2(ohm) <input type="number" id = "ohm2"></p>
      <p>Enter the value of l'1 (cm) <input type="number" id="l_1"></p>
      <p>Enter the value of l'2 (cm) <input type="number" id="l_2"></p>
      <button onclick ="getValue()">Get Result </button>
    `
  }
  else{
    document.querySelector('.interface_on_user_choice').innerHTML =`
    <p> Enter a Vailid Value Sir/Mam </p>
    `
  }

}

function getValue(){
  const Resis = document.getElementById('ohm');
  const r = Resis.value;

  const length1 = document.getElementById('l1');
  const l1 = length1.value;

  const length2 = document.getElementById('l2');
  const l2 = length2.value;

  const Resis2 = document.getElementById('ohm2');
  const r2 = Resis2.value;

  const length_1 = document.getElementById('l_1');
  const l_1 = length_1.value;

  const length_2 = document.getElementById('l_2');
  const l_2 = length_2.value;


  const R1 = r*(l_2 - l_1) - r2*(l2-l1);

  document.querySelector('.resistance_of_platinum').innerHTML = `
  The Resistence of Platinum is ${R1}.`
}
