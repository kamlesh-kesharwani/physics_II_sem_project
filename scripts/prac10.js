document.querySelector('.main_content').innerHTML = `
    <p>Enter the resistance of platinum resistance at 0 degree celcius Ro :<input type="number" id="resis"></p>
    <p>Enter the temperature coefficient of resistance a :<input type="number" id="cTemp"></p>
    <p>Enter the temperature at which it has to be found out t:<input type="number" id="Temp"></p>
    <button onclick="calculation()">Get result </button>
`
function calculation(){
  const resis = document.getElementById('resis');
  const Ro = resis.value;

  const cTemp = document.getElementById('cTemp');
  const a = cTemp.value;

  const Temp = document.getElementById('Temp');
  const t = Temp.value;

  const R = Ro*(1 - a*t);
  
  document.querySelector('.result').innerHTML = `
  The result is ${R}.`
}