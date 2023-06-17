document.querySelector('.js-add-button').addEventListener('click', () => {
  addDetails();
});
document.querySelector('.js-draw-button').addEventListener('click', () => {
  drawWinner();
});

const details = [{
  name: '',
  phone: '',
  amount: 0,
  total: 0
}];

JSON.parse(localStorage.getItem('details'));

function displayDetails() {
  let detailInfo = '';
  let total = 0;

  for(let i = 1; i < details.length; i++) {
    const detailObject = details[i];
    const name = detailObject.name;
    const phone = detailObject.phone;
    const amount = detailObject.amount;

    const listDetail = `
      <div>${i}</div>
      <div>${name}</div>
      <div>${phone}</div>
      <div>${amount}</div>
      <button onclick = "details.splice(${i}, 1);
      displayDetails();"
      class = "delete-button">Delete</button>`;
    const totalAmount = `
      <div>${total += amount}</div>`
    
    detailInfo += listDetail;
  }
  document.querySelector('.js-display-details').innerHTML = detailInfo;
  document.querySelector('.js-display-total').innerHTML = total;
}

function addDetails() {
  
  const nameInput = document.querySelector('.js-name-input');
  const name = nameInput.value;
  const phoneInput = document.querySelector('.js-phone-input');
  phone = Number(phoneInput.value);
  const amountInput = document.querySelector('.js-amount-input');
  amount = Number(amountInput.value);

  details.push({
    name: name,
    phone: phone,
    amount: amount
  });

  localStorage.setItem('details', JSON.stringify(details));

  nameInput.value = '';
  phoneInput.value = '';
  amountInput.value = '';

  displayDetails();
}

function drawWinner(){
  
  let detailInfo = '';


    let x = Math.floor(Math.random() * details.length) + 1;
    console.log(`x: ${x}`);

    const detailObject = details[x];
    const name = detailObject.name;
    const phone = detailObject.phone;
    const amount = detailObject.amount;

    const listDetail = `
      <div>The Winner is: </div>
      <div>Name: ${name} </div>
      <div>Phone No.: ${phone}</div>`
    
    detailInfo = listDetail;

document.querySelector('.js-draw').innerHTML = listDetail;
}