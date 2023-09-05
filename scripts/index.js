// let userValue = prompt("Введіть камінь ножиці або папір ");
// let userValue2 = prompt("Введіть камінь ножиці або папір ");

// let computerValue = Math.floor(Math.random() * 3);//0 - камінь, 1 - ножиці, 2 - папір

// if(userValue == "камінь"){
//     if(computerValue == 0){
//         alert("Нічия"+"комп'ютер виюбрав"+computerValue);
//     }
//     else if(computerValue == 1){
//         alert("Ви виграли!");
//     }
//     else{
//         alert("Комп'ютер переміг!");
//     }
// }
// if(userValue == "ножиці"){
//     if(computerValue == 0){
//         alert("Комп'ютер переміг!");
//     }
//     else if(computerValue == 1){
//         alert("Нічия");
//     }
//     else{
//         alert("Ви виграли!");
//     }
// }
// if(userValue == "папір"){
//     if(computerValue == 0){
//         alert("Ви виграли!");
//     }
//     else if(computerValue == 1){
//         alert("Комп'ютер переміг!");
//     }
//     else{
//         if(randon == 0){
//             let answer = answer1;
//         }
            
//         alert(answer + "");
//     }
// }

// if(userValue != "папір" && userValue != "камінь" && userValue != "ножиці"){
    
//     alert("Неправильні значення!");
// }

// let answer1 = "Ви програли";
// let answer2 = "Нічого, наступного разу повезе";
// let answer3 = "Хахах ти лузер!";

// if(random == 0){
//     alert(answer1);
// }
// else if(random == 1){
//     alert(answer2);
// }
// while(true){

// }

// console.log(age);
// let article = {};
// if(age >= 18) {
//     alert("Welcome!");
// }
// else if(age >= 16){
//     alert("Будьте обережні!");
// }
// else{
//     alert("Вам сюди не можна!");
//     location = "https://ru.wikipedia.org/";
// }

// age >= 18 ? 
//     alert("Welcome!") : 
//     age >= 16 ? 
//     alert("Будьте обережні!") : 
//     alert("Вам сюди не можна!");

// while(age <= 8){
//     age = age + 1;
//     console.log(age);
// }

// do{
//     age = age + 1;
//     console.log(age);
// }
// while(age <= 8);

// for(i = 0, j = 0; age <= 8, i <= 10; age = age + 1, i = i + 2){
//         console.log(age);
//         if(age == 5){
//             console.log("Вітаю, вам 5 років!");
//             break;
//         }
//         console.log(i);
// }

//game
// Math.floor(Math.random() * 3);//0 - камінь, 1 - ножиці, 2 - папір

// answer1 = "Ви програли";
// answer2 = "Нічого, наступного разу повезе";
// answer3 = "Хахах ти лузер!";
// if(random == 0){
//     alert(answer1);
// }
// else if(random == 1){
//     alert(answer2);
// }
// while(true){

// }

// if(age >= 18){
//     alert("Доступ дозволено!");
// }
// else if(age >= 16){
//     alert("Доступ дозволено, але будьте обережні!");
// }
// else{
//     alert("У доступі відмовлено!");
// }

// age >= 18 ? alert("Доступ дозволено!") : 
//     age >= 16 ? alert("Доступ дозволено, але будьте обережні!") : 
//     alert("У доступі відмовлено!");

// while(age < 18){
//     age = age + 1;
//     alert("У доступі відмовлено!");
// }

// do {
//     age = age + 1;
//     alert("У доступі відмовлено!");
// } while(age < 18);

// for(; age < 18; age = age + 1){
//     alert("У доступі відмовлено1!");
//     if(age == 5){
//         alert("Ваш вік - 5 років");
//         continue;
//     }
//     alert("У доступі відмовлено2!");
// }

// let arr = ['one', 3, true, 121];

// arr[1] = "3232143";

// // alert(arr[1]);
// arr.unshift(12);// 12 one 323323 true 121
// arr.shift();// one 323323 true 121
// arr.pop();// 12 one 323323 true
// arr.push(12345);// 12 one 323323 true 121 12345

// for(let i = 0; i < arr.length; i++){
//     alert(arr[i]);
// }

// let user = {
//     name: "Vlad",
//     surname: "Test",
//     age: 12
// };

// let user2 = {};

// for(let pameters in user){
//     user2[pameters] = user[pameters];
// }
// // alert(user.name);

// user2.name = "Dima";

// for(let pameters in user){
//     alert(user[pameters]);
// }

// function findMultiples(integer, limit) {//integer = 2 limit = 6
//     //your code here
//     let arr = [];
//     let sum = integer;//integer = 2 limit = 6 sum = 2
//     while(sum <= limit){//integer = 2 limit = 6 sum = 2
//       arr.push(sum);//[2, 4, 6]
//       sum = sum + integer;//integer = 2 sum = 8
//     }
    
//     return arr;
//   }
  

// findMultiples(2, 6);


// for(let i = 1; i <= 7; i++){
//   for(let j = 1; j <= i-1; j++){
//     console.log("P");
//   }
//   console.log("\n");
// }



// function kvadrRivn(a, b, c){
//   let disk = b**2 - 4 * a * c;
//   x1 = (-b + Math.sqrt(disk))/2/a;
//   return x1;
// }

// let ar = (a, b, c) =>{
//   let disk = b**2 - 4 * a * c;
//   x1 = (-b + Math.sqrt(disk))/2/a;
//   return x1;
// }



// let a = ar(1, 5, 12);
// alert(a);
// let b = kvadrRivn(62354345, 23532);
// alert("0036");
// let arr =[34, 645, -645, 256, 2];
// let min = arr[0];

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] < min){
//     min = arr[i];
//   }
// }
// alert(min);

// if(arr[i] == 'a' || arr[i] == 'b' || arr[i] == 'c'){

// }
