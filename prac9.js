document.querySelector('.main_content').innerHTML = ` 
    <p>Enter the mass of water Mw <input type="number" id="wMass"></p>
    <p>Enter the specific Heat of water Sw <input type="number" id="sWater"></p>
    <p>Enter the mass of vessel Mv <input type="number" id="vMass"></p>
    <p>Enter the specific Heat of vessel Sv <input type="number" id="sVessel"></p>
    <p>Enter the initial temperature of water as recorded Ti <input type="number" id="iTemp"></p>
    <p>Enter the final temperature of water Tf <input type="number" id="fTemp"></p>
    <p>Enter the volatage applied across the heating coil V <input type="number" id="voltage"></p>
    <p>Enter the current throug the heating coil I <input type="number" id="current"></p>
    <p>Enter the duration for which the current passes through the coil dT <input type="number" id="time"></p>
    <button onclick="calculation()">Get result</button>
`
function calculation(){
  const wMass = document.getElementById('wMass');
  const Mw = wMass.value;

  const sWater = document.getElementById('sWater');
  const Sw = sWater.value;

  const vMass = document.getElementById('vMass');
  const Mv = vMass.value;

  const sVessel = document.getElementById('sVessel');
  const Sv = sVessel.value;

  const iTemp = document.getElementById('iTemp');
  const Ti = iTemp.value;

  const fTemp = document.getElementById('fTemp');
  const Tf = fTemp.value;

  const voltage = document.getElementById('voltage');
  const V= voltage.value;

  const current = document.getElementById('current');
  const I= current.value;

  const time = document.getElementById('time');
  const dT= time.value;

  const J = V*I*dT/(Mw*Sw+Mv*Sv)*(Tf-Ti);

  document.querySelector('.result').innerHTML = `
  The Mechanical equivalent of heat J is ${J}.`
}