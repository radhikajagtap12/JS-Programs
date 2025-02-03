const p = new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve('Promise resolved successfully')
	}, 5000);
})

async function myFun() {
	console.log('Hi there')
	const dataPromise = await p;
	console.log(dataPromise)
	console.log('Hi, How are you?');
}

myFun();


// dataPromise.then((res) => console.log(res))
