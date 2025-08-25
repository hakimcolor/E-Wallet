let num = '01818777856';
let pass = '1234';

document.getElementById('btn').addEventListener('click', (e) => {
  e.preventDefault();

  let inputNum = document.getElementById('num').value;
  let inputPass = document.getElementById('pass').value;

  if (inputNum === num && inputPass === pass) {
    console.log('Login Successful!');
    window.location.href = 'stapeone.html';
  } else {
    alert('Your input is not matched, ok sir .. please try again');
  }

  console.log('button is clicked');
});

const dlr = document.getElementById('dlr');
const dlrInput = document.querySelector('.dlr1');
const dlrBtn = document.querySelector('.dlr2');

dlrBtn.addEventListener('click', () => {
  let current = Number(dlr.innerText);
  let addValue = Number(dlrInput.value);

  let vall = current + addValue;
  console.log(vall);

  document.getElementById('dlr').innerText = vall;
  dlrInput.value = '';
});
