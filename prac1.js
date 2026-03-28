document.querySelector(".prac1_readings").innerHTML = `
      <p>Enter the value of temperature ti <input type="number" id="temperature1"></p>
      <p>Enter the value of temperature t2 <input type="number" id="temperature2"></p>
      <p>Enter the value of current i1  <input type="number" id="current1"></p>
      <p>Enter the value of current i2 <input type="number" id="current2"></p>
      <p>Enter the value of voltage v1<input type="number" id="voltage1"></p>
      <p>Enter the value of voltage v2 <input type="number" id="voltage2"></p>
      <p>Enter the value of Flow Rate m1 (g/sec) <input type="number" id="flowRate1"></p>
      <p>Enter the value of Flow Rate m2 (g/sec) <input type="number" id="flowRate2"></p>
      <button onclick = "getvalue()">Submit</button>
`
function getvalue(){ 
   const temp1 = document.getElementById('temperature1');
   const t1 = temp1.value;

   const temp2 = document.getElementById('temperature2');
   const t2 = temp2.value;

   const curr1 = document.getElementById('current1');
   const i1 = curr1.value;

   const curr2 = document.getElementById('current2');
   const i2 = curr2.value;

   const volt1 = document.getElementById('voltage1');
   const v1 = volt1.value;

   const volt2 = document.getElementById('voltage2');
   const v2 = volt2.value;
   
   const fr1 = document.getElementById('flowRate1');
   const m1 = fr1.value;

   const fr2 = document.getElementById('flowRate2');
   const m2 = fr2 .value;

   const  s = 1;

  const f = v2*i2 - v1*i1;
  const l = s*(m2 - m1);
  const u = t2 - t1;

  const j = f/l*1/u;

  document.querySelector('.result').innerHTML = `<p> The result is ${j}`

}

