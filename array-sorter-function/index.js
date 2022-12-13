let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
let arr22 = [412345, 3212345, 22345, 534567, 83456, -1044, 2044, 16, 06, -2660];

function myfunc(x){
    for(let j = 0 ; j < x.length ; j++){
        for(let i = 0 ; i < x.length ; i++){
            if(x[i]>x[i+1]){
                let temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
            }
        } 
    } 
    console.log(x)  
}
myfunc(arr);
myfunc(arr22);




















// let arr2 =[]; 
// // function myFunc(x){
// //     for(i=0 ; i<x.length ; i++){
// //         for(j=0 ; j<x.length ; j++){
// //             if(x[j]>x[j+1]){
// //                 let temp = x[j];
// //                 x[j] = x[j+1];
// //                 x[j+1] = temp;
// //             }
// //         }
// //     }
// //     console.log(x);
// // }
// myFunc(arr);
// function myFunc(x){
//     for(i=0 ; i<x.length ; i++){
//         for(j=0 ; j<x.length ; j++){
//             x[0]<x[j+1]

//         }
//     }
// }