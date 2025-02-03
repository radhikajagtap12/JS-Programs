function x(){
    let a = 7;
    return function y(){
        console.log(a);
    }
}
const z = x();
z();