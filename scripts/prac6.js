
function calculation(){
  const Height = document.getElementById('H');
  const H = Height.value;

  const height = document.getElementById('h');
  const h = height.value;

  const a = (H-h);
  const G = H/a;

  document.querySelector('.Result').innerHTML = `
  The ratio of Specific Heat of air is ${G}.`
}

