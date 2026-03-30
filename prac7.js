document.querySelector('.main_content').innerHTML = `
    <p>Enter the Value of Steady temperature T1 <input type="number" id="Temp1"></p>
    <p>Enter the Value of Steady temperature T2 <input type="number" id="Temp2"></p>
    <p>Enter the Value of Steady temperature T3 <input type="number" id="Temp3"></p>
    <p>Enter the Value of Steady temperature T4 <input type="number" id="Temp4"></p>
    <p>Enter the Value of mass flow per second (of water) m <input type="number" id="mass"></p>
    <p>Enter the Value of length of rod under measurement d <input type="number" id="length"></p>
    <p>Enter the Value of cross sectional area of rod A<input type="number" id="area"></p>
    <button onclick="calculation()">Get Result</button>
`
function calculation(){
  const Temp1 = document.getElementById('Temp1');
  const T1 = Temp1.value;

  const Temp2 = document.getElementById('Temp2');
  const T2 = Temp2.value;

  const Temp3 = document.getElementById('Temp3');
  const T3 = Temp3.value;

  const Temp4 = document.getElementById('Temp4');
  const T4 = Temp4.value;

  const mass = document.getElementById('mass');
  const m = mass.value;

  const length = document.getElementById('length');
  const d = length.value;

  const area = document.getElementById('area');
  const A = area.value;

  const k = (m*d*(T4-T3))/A*(T1-T2);

  document.querySelector('.result').innerHTML = `
  The Thermal Conductivity is ${k}.`
}