document.querySelector('.main_content').innerHTML = `
    <p>Enter the mass of calorimeter & stirrer M :<input type="number" id="cMass"></p>
    <p>Enter the mass of water taken in calorimeter W  :<input type="number" id="wMass"></p>
    <p>Enter the specific heat of the material of the calorimeter S :<input type="number" id="sHeat"></p>
    <p>Enter the initial temperature of calorimeter T1 :<input type="number" id="iTemp"></p>
    <p>Enter the Final temperature of calorimeter T2 :<input type="number" id="fTemp"></p>
    <p>ENter the time for which steam was passed t :<input type="number" id="time"></p>
    <p>Enter the internal radius of the rubber r1 :<input type="number" id="iRadius"></p>
    <p>Enter the external radius of the rubber r2 :<input type="number" id="eRadius"></p>
    <p>Enter the length od position of rubber tube dipped in water l :<input type="number" id="length"></p>
    <p>Enter the temperature of steam T(steam) :<input type="number" id="sTemp"></p>
    <button onclick="calculation()">Get Result</button>
`
function calculation(){
  const cMass = document.getElementById('cMass');
  const M = cMass.value;

  const wMass = document.getElementById('wMass');
  const W = wMass.value;

  const sHeat = document.getElementById('sHeat');
  const S = sHeat.value;

  const iTemp = document.getElementById('iTemp');
  const T1 = iTemp.value;

  const fTemp = document.getElementById('fTemp');
  const T2 = fTemp.value;

  const time = document.getElementById('time');
  const t = time.value;

  const iRadius = document.getElementById('iRadius');
  const r1 = iRadius.value;

  const eRadius = document.getElementById('eRadius');
  const r2 = eRadius.value;

  const length = document.getElementById('length');
  const l = length.value;

  const sTemp = document.getElementById('sTemp');
  const T = sTemp.value;

  const r = Math.log10(r2/r1);

  const k = (2.303 * r*(M*S + W)*(T2 - T1))/(2*3.14*l*t)*(T-[(T2+T1)/2]);

  document.querySelector('.Result').innerHTML = `
  The coefficient of thermal conductivity of rubber in the form of a tube is ${k}.`

}