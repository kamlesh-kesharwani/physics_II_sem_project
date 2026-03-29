document.querySelector('.main_content').innerHTML = `
    <p>Enter the mass of Bottom Metal Disk m: <input type="number" id="mass"> </p>
    <p>Enter the Specific Heat of Bottom Metal Disk s: <input type="number" id="sHeat"> </p>
    <p>Enter the thickness of Bottom Metal Disk x: <input type="number" id="thickness"> </p>
    <p>Enter the Area of Bottom Metal Disk A: <input type="number" id="area"> </p>
    <p>Enter the Steady temperature of Bottom Metal Disk T1: <input type="number" id="sTempBottom"> </p>
    <p>Enter the Steady temperature of Top Metal Disk T2: <input type="number" id="sTempTop"> </p>
    <p>Enter the slope of the curve dT/dt: <input type="number" id="slope"> </p>
    <button onclick="calculation()">Calculate</button>
`
function calculation(){
  const ms = document.getElementById('mass');
  const m = ms.value;

  const sHeat = document.getElementById('sHeat');
  const s= sHeat.value;

  const thick = document.getElementById('mass');
  const x = thick.value;

  const area = document.getElementById('area');
  const A = area.value;

  const sTempBottom = document.getElementById('sTempBottom');
  const T1 = sTempBottom.value;

  const sTempTop = document.getElementById('sTempTop');
  const T2 = sTempTop.value;

  const slope = document.getElementById('slope');
  const dT = slope.value;

  k = (m*s*dT*x)/A*(T2-T1);

  document.querySelector('.result').innerHTML = `
  The result is ${k}.
  `
}