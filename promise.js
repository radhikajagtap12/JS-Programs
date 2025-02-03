const cart = ['saree', 'pants', 'Jeans', 'kurta'];

const validateCart = cart => false;

const Promis = createOrder(cart);

const proceedToPayment = (orderId) => {
    return new Promise(function(resolve, reject){
        resolve('Payment Successfull');
    });
}

Promis
.then((orderId) => {
    console.log(orderId)
    return orderId;
})
.then((orderId)=> {
    return proceedToPayment(orderId);
})
.then((paymentInfo) => console.log(paymentInfo))
.catch((err) => console.log(err.message))
.then(() => {
    console.log('No matter what happens,i will definately be called')
})

function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
        if(!validateCart(cart)){
            const err = new Error('cart is not valid')
            reject(err);
        }

        const orderId = '12345';

        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            }, 5000)            
        }
        
    })

    return pr;
}