"use strict";
//TypeScript mein aik data type hai jo kisi bhi set ke constant values ko represent karta hai
//"Set ke constant" ka matlab hota hai ek set ya group mein shamil hone wale mukhtalif values
// *******************************  Enums  *******************************//
// enum Color {Red =4, Green=6, Blue };//starts with 0
// var c: Color = Color.Blue; //2, 1
// console.log(c) //7
// enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// let colorIndex = Color2["Blue"];
// console.log(colorIndex);
// enum Color2 {Red = 1, Green = 2, Blue = 4};
// let colorIndex = Color1["Green"];
// console.log(colorIndex); //error
// enum Color3 {Yellow = 8888, Green = 90, Pink = 499999};
// let colorIndexn = Color3["Pink"];
// console.log(colorIndexn);  //499999
//Explicit casting (ya type casting) TypeScript mein ek technique hai jisse 
//hum ek variable ko ek specific data type mein convert karte hain
// *******************************  Explicit casting  *******************************//
//let myname: unknown = "MehwishSaleem"; //13
// //1 
// console.log((myname as string).length);
// let myname: unknown = "Wania";
// console.log((<string> myname).length)
// let myname: unknown = "Wania";
// console.log((<number> myname).length) //error
// let myname: unknown = 12;
// console.log((<string> myname).length) //undefined
// let myname: unknown = true;
// console.log((<number> myname).length) //error
// let myname: unknown = 12; 
// console.log((myname as string).length);
//undefined
// let myname: unknown = "12"; 
// console.log((myname as string).length);
//2
// let myname:number = "NitoKumari"; 
// console.log((myname as boolean).length);
//Type 'string' is not assignable to type 'number'.
// let myname: unknown = 13; 
// console.log((myname as number).length);
// const enum ka matlab hota hai ke TypeScript compile time mein hi enum ke values ko replace kar deta hai
// uski actual values se.
// Isse result hota hai ke generated JavaScript code mein koi enum object create nahi hota, 
//balki direct numeric values replace ho jate hain.
// const enum ki values compile time constants hote hain, jo runtime mein available nahi hote.
// *******************************  Const Enums  *******************************//
// const enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;
// const enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color[2]; //Not allowed with const enums
// console.log(colorName);
// const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex); // 4
//pyramid of doom callback hell
//Yeh ek technical term hai jo directly JavaScript ki language mein istemal hoti hai. 
//Jab kisi code mein multiple levels par deep nested callback functions use hoti hain,
// tab us situation ko "callback hell" kaha jata hai. 
//Is wajah se code ko maintain aur samajhna mushkil ho jata hai.
// function simulateAsyncOperation(callback: (result: string) => void) {
//     setTimeout(() => {
//         const result = "Async operation completed";
//         callback(result);
//     }, 1000); 
// }
// ************ Nested callbacks (Callback hell) *****************************
// simulateAsyncOperation((result1) => {
//     console.log(result1);
//     simulateAsyncOperation((result2) => {
//         console.log(result2);
//         simulateAsyncOperation((result3) => {
//             console.log(result3);
//         });
//     });
// });
// function myCallBack(text: string) {
//     console.log("inside myCallback " + text);
// }
// function callingFunction(initialText: string, callback: (text: string) => void)
// {
//     callback(initialText);
// }
// callingFunction("myText", myCallBack);
// type CallbackFunction = ( result:string) => void;
// function perform(cb :CallbackFunction ){
//     setTimeout(() =>{
//         const result = "Mehwish pass hogaye"
//   cb(result)
//     },2000)
// }
// setTimeout()
// console.log('Mehwish pizza') //
//  //asynchronus
// setTimeout(() =>{
//     console.log("Wania pizza ly gaye")
// }, 6000)
// console.log("Nitu pizza ly gaye")
// function outerFunction(callback: () => void) {
//     callback();
//   }
// const greeting = (message:string) => console.log(`Hello ${message}`);
// interface definitionInterface{
//     (message:string):void;
// }
// function sayHello(callback: definitionInterface) {
//   callback('World!')
// }
// sayHello(greeting);
// function doSomethingAsync(callback: (result: string) => void) {
//     setTimeout(() => {
//         const result = "Hello, world!";
//         callback(result); 
//     }, 1000);
// }
// function Mehwish(cb:(result: string) =>void){
//     setTimeout(() =>{
//    const result = "Mehwish pass hogaye"
//    console.log(cb)
//    },2000)
// }
// Mehwish()
function Wania(cb) {
    setTimeout(() => {
        const result = "wania pass hogaye";
        cb(result);
    }, 2000);
}
Wania((result) => {
    console.log(result);
});
