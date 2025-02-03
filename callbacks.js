// console.log('namaste');

// setTimeout(function(){
//     console.log('Javascript');
// }, 5000);

// console.log('Hello World');

// const card = ['dress', 'saree', 'clips'];

// createOrder(cart, function(OrderId){
//     ProceedToPayment(OrderId);
// });

// function createOrder(card){
//     console.log('Hello Promise');
// }

// const Promise = createOrder(card);

// Promise.then(function(OrderId){
//     ProceedToPayment(OrderId);
// });

// console.log(Promise);

const API_CALL = 'https://api.github.com/users/akshaymarch7';

const Promise = fetch(API_CALL);

// console.log(Promise)

const card = ['dress', 'saree', 'clips'];
const orderId  = 'abc';
const paymentInfo = '200';

let createOrder = card => console.log('Hi I am from create Oredr');
const proceedToPayment = (orderId) => console.log(orderId);
const showOrderSummery = (paymentInfo) => console.log(paymentInfo);
const updateWalletballence = (paymentInfo) => console.log(paymentInfo);


Promise.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) => showOrderSummery(paymentInfo))
.then((paymentInfo) => updateWalletballence(paymentInfo));
