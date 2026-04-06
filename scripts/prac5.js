document.querySelector('.main_content').innerHTML = `
    <div>
      <p>Enter the battery E:<input type="number" id="Emf"></p>
      <p>Enter the Applied Resistance R:<input type="number" id="aResistance"></p>
      <p>Enter the total Length of the Bridge Wire L:<input type="number" id="Length"></p>
      <p>Enter the resistance of the Bridge Wire r:<input type="number" id="bResistance"></p>
      <button onclick="calculation()">Get Thermo emf</button>
    </div>
`
function calculation(){
  const Emf = document.getElementById('Emf');
  const E = Emf.value;

  const aResistance = document.getElementById('aResistance');
  const R = aResistance.value;

  const Length = document.getElementById('Length');
  const L = Length.value;

  const bResistance = document.getElementById('bResistance');
  const r = bResistance.value;

  const e = c/b;
  const a = (R+r);
  const b = (L*a);
  const c = (E*r);

  document.querySelector('.result').innerHTML = `
  The Thermo emf is ${e} volt.`
  

}