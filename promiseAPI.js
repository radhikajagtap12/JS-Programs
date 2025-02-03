const p1 = new Promise((resolve, reject) => {
	// setTimeout(() => {resolve("P1 successfull");}, 3000);
    setTimeout(() => {reject("P1 Failed");}, 3000);
});

const p2 = new Promise((resolve, reject) => {
	// setTimeout(() => {resolve("P2 successfull");}, 1000);
    setTimeout(() => {reject("P2 Failed");}, 6000);
});

const p3 = new Promise((resolve, reject) => {
	// setTimeout(() => {resolve("P3 successfull");}, 4000);
    setTimeout(() => {reject("P3 Failed");}, 2000);
});

Promise.any([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => {
    console.error(err);
    console.log(err.errors)
})
