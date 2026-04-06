document.querySelector('.main_content').innerHTML = `
    <p>Enter the value of T <input type="number" id="temperature"></p>
    <p>Enter the value of V <input type="number" id="voltage"></p>
    <p>Enter the value of R <input type="number" id="resistance"></p>
    <p>Enter the value of m <input type="number" id="mass"></p>
    <p>Enter the value of t <input type="number" id="temperature2"></p>
    <button onclick = "calculation() ">Get Result</button>
    
    `

    function calculation(){
      const temp = document.getElementById('temperature');
      const T = temp.value;

      const temp2 = document.getElementById('temperature2');
      const t = temp2.value;
      
      const volt = document.getElementById('voltage');
      const V = volt.value;

      const Resis = document.getElementById('resistance');
      const R = Resis.value;

      const mass = document.getElementById('mass');
      const m = mass.value;

      x = m* 4.2 * 1000 * T * R;
      y = V*V*t;
      eff = (x/y) *100;

      document.querySelector('.result').innerHTML = `
      The efficiency of electrical Kettle with variable voltages is ${eff} joule per kg degree celcius .`
    }