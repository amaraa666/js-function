// 1. 2 тоон утга авдаг 2 function үүсгэ.
// 2. 2 авсан тоон утгын хоорондох тэгш тоонуудын array буцаадаг 1 function.
// 2. 2 авсан тоон утгын хоорондох сондгой тоонуудын array буцаадаг 1 function
let x = Number(prompt("garaas toon utga oruulna uu"));
let y = Number(prompt("garaas toon oruulna uu"));
let even = [];
let odd = [];
function myFunc(a,b){
    if(a<b){
        for(let i = a ; i<=b ; i++){
            if(i%2 == 0){
                even.push(i);
            }else{
                odd.push(i);
            }
        }
    }else if (b<a){
        for(let i = b ; i<=a ; i++){
            if(i%2 == 0){
                even.push(i);
            }else{
                odd.push(i);
            }
        }
    }else{
        console.log("Adilhan too bainaa dahin oroldno uu?");
    }
    console.log("tegsh too",even);
    console.log("sondgoi too",odd);
}
myFunc(x,y);
















// function myFunc(a,b){
//     if(a<b){
//         for(let i=a ; i<b ; i++){
//             if(i%2==0){
//                 even.push(i);
//             }else{
//                 odd.push(i);
//             }
//         }
//     }else if(x>y){
//         console.log("zuv utga oruulna uu?");
//     }
// }
// myFunc(x,y)
// console.log("tegsh" , even);
// console.log("sondgoi", odd);
