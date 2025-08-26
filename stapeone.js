document.getElementById('Add-money').addEventListener('click', () => {
  document.getElementById('stn').classList.toggle('hidden');
  document.getElementById('Add-money').classList.toggle('border-red-500');
});

let acNm = '01818777856';
let Pass = '1234';
let cr = document.getElementById('craccount');

let num = document.getElementById('account-num');

let amnt = document.getElementById('amount');

let pass = document.getElementById('bankpass');

let button = document.getElementById('btn');

button.addEventListener('click', () => {
  let accountnum = num.value;
  let bankpass = pass.value;
  let craccount = Number(cr.innerText);
  let amount = Number(amnt.value);
  if (acNm === accountnum && Pass === bankpass) {
    let vall = craccount + amount;
    cr.innerText = vall;
    console.log(vall);
  } else {
    alert('try again somthing error');
  }
 num.value = '';
 pass.value = '';
 amnt.value = '';
 
  
});

// let acNm = '01818777856';
// let Pass = '1234';

// let cr = document.getElementById('craccount');
// let craccount = Number(cr.innerText);
// let num = document.getElementById('account-num');
// let accountnum = num.value;
// let amnt = document.getElementById('amount');
// let amount = Number(amnt.value);
// let pass = document.getElementById('bankpass');
// let bankpass = pass.value;
// let button = document.getElementById('btn');

// button.addEventListener('click', () => {
//   if (acNm === accountnum && Pass === bankpass) {
//     let vall = craccount + amount;
//     cr.innerText = vall;
//     console.log('Balance Updated:', vall);
//   } else {
//     console.log('Account Number or Password Wrong!');
//   }
// });
