let x = 10;
let y = 20;
let even = [];
let odd = [];
function myFunc(a,b){
    if(a<b){
        for(let i=a ; i<b ; i++){
            if(i%2==0){
                even.push(i);
            }else{
                odd.push(i);
            }
        }
    }else if(x>y){
        console.log("zuv utga oruulna uu?");
    }
}
myFunc(x,y)
console.log("tegsh" , even);
console.log("sondgoi", odd);
