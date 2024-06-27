"use strict";
// // // * Asynchronous Programming
// // //javascript synchronous hai
// // //ik code execute hoga usky baad ik code execute hoga usky baad ik code execute hoga
// // //single threaded laangauge
// // const funct = (callback) =>{
// //     console.log('function invoked')
// //     callback()
// // }
// // const funct1 = () =>{
// // }
// // // * SetTimeout
// // // * Callbacks 
// // // * Promises
// // // * async/await
// // // //paramter
// // // function App(){
// // //     console.log("Nito Kumari")
// // // }
// // // App()
// // // //argument
// // console.log('double cheese')
// // //Muneeza //Nitu
// // console.log('spicy flavour')
// // The void keyword in JavaScript, is used to evaluate an expression which does not return any value.
// // function fetchData(cb: (data: string) => void) {
// //     cb("Data fetched successfully");
// // }
// // fetchData((data) => console.log(data));
// // A callback is a function passed as an argument to another function
// // function Aqsa(cb: (data: string, age: number) => void){
// //   cb("Aqsa",16)
// // }
// // Aqsa((data,age) => console.log(data,age))
// // let array1 : number[] = [5, 6, 7];//correct syntax
// // console.log(array1[1]);
// // let array2 : any[] = ["Mehwish","Nito",10,12]
// // console.log(array2[3]);
// // let array2:Array<number> = [1, 2, 3];//alternative correct syntax
// // console.log(array2[2])
// // let array3 : number[] = [];//correct syntax to define an empty array
// // let array4: number[] = new number[2];//error
// // let array5: number[] = []; //empty array
// // array5.push(1234);//dynamically adding
// // console.log(array5)
// function myCallBack(text: string) {
//     console.log("inside myCallback " + text);
// }
// function callingFunction(initialText: string, callback: (text: string) => void)
// {
//     callback(initialText);
// }
// callingFunction("myText", myCallBack);
// let myname: unknown = "Zia";
// console.log((myname as string).length); //3 
// console.log((<string> myname).length)
// let x: unknown = 'hello';
// console.log((x as string).length); 
let y = 'NitoKumari';
console.log(y.indexOf("K"));
