document.getElementById('Add-money').addEventListener('click', () => {
  document.getElementById('stn').classList.toggle('hidden');
  document.getElementById('Add-money').classList.add('border-red-500');
  document.getElementById('stns').classList.add('hidden');
  document.getElementById('cashout').classList.remove('border-red-500');
  document.getElementById('tr').classList.remove('border-red-500');
  document.getElementById('stntr').classList.add('hidden');
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

document.getElementById('logout').addEventListener('click', () => {
  alert('you want logout?');
  window.location.href = 'index.html';
});

// Cashout

let acNms = '01818777856';
let Passs = '1234';

let crs = document.getElementById('craccount');
let nums = document.getElementById('account-nums');
let amnts = document.getElementById('amounts');
let passs = document.getElementById('bankpasss');
let buttons = document.getElementById('btns');

buttons.addEventListener('click', () => {
  let accountnums = nums.value;
  let bankpasss = passs.value;
  let craccounts = Number(crs.innerText);
  let amounts = Number(amnts.value);

  if (acNms === accountnums && Passs === bankpasss) {
    if (amounts > 0 && amounts <= craccounts) {
      let valls = craccounts - amounts;
      crs.innerText = valls;
      console.log('Cashout successful. New balance:', valls);
    } else {
      alert('Invalid amount');
    }
  } else {
    alert('Try again, something error');
  }

  // reset
  nums.value = '';
  passs.value = '';
  amnts.value = '';
});
document.getElementById('cashout').addEventListener('click', () => {
  document.getElementById('stns').classList.toggle('hidden');
  document.getElementById('cashout').classList.add('border-red-500');
  document.getElementById('Add-money').classList.remove('border-red-500');
  document.getElementById('stn').classList.add('hidden');
  document.getElementById('tr').classList.remove('border-red-500');
  document.getElementById('stntr').classList.add('hidden');
});

// Tr
let acNmtr = '01818777856';
let Passtr = '1234';

let crtr = document.getElementById('craccount');
let numtr = document.getElementById('account-numtr');
let amnttr = document.getElementById('amounttr');
let passtr = document.getElementById('bankpasstr');
let buttontr = document.getElementById('btntr');

buttontr.addEventListener('click', () => {
  let accountnums = numtr.value;
  let bankpasss = passtr.value;
  let craccounts = Number(crtr.innerText);
  let amounts = Number(amnttr.value);

  if (acNmtr === accountnums && Passtr === bankpasss) {
    if (amounts > 0 && amounts <= craccounts) {
      let valltr = craccounts - amounts;
      crtr.innerText = valltr;
      console.log('Cashout successful. New balance:', valltr);
      alert('Invalid amount');
    }
  } else {
    alert('Try again, something error');
  }

  numtr.value = '';
  passtr.value = '';
  amnttr.value = '';
});
document.getElementById('tr').addEventListener('click', () => {
  document.getElementById('stntr').classList.toggle('hidden');
  document.getElementById('tr').classList.add('border-red-500');
  document.getElementById('stns').classList.add('hidden');
  document.getElementById('cashout').classList.remove('border-red-500');
  document.getElementById('Add-money').classList.remove('border-red-500');
  document.getElementById('stn').classList.add('hidden');
});
