// var a  = 100;
// var b  = 5;


// let c;
// c = a
// a = b
// b = c


// b = a && b - a
// a += b 


// console.log("B" + " " + A, "A" + " " + B);
// console.log(a,b);

// failed
// const numbers = [12345678910];
// const Numbers = []
// console.log(numbers);
// // console.log(num);
// for(var i = 0; i < numbers.length; i++){
//     const qoma = numbers.slice(i, i + 3)
//     Numbers.push(qoma.join(','))
// }

// console.log(Numbers);
// const num = '12345678910';
// var result = '';

// console.log(num.length);

// for (var i = 0; i < num.length; i++) {
//   if (i > 0 && i % 3 === 0) {
//     result += ',';
//   }
//   result += num[i];
// }

// console.log(result);

// const num = 12345678910;
// const numStr = num.toString();
// let result = '';

// for (let i = 0; i < numStr.length; i++) {
//   if (i > 0 && i % 3 === 0) {
//     result += ',';
//   }
//   result += numStr[i];
// }

// console.log(result);


// var numbers = [97, 87, 90, 65, 45, 43, 65];
// var small = numbers[0]

// for(var i = 1; i < numbers.length; i++){
//     if(numbers[i] > small){
//         small = numbers[i]
//     }
// }

// console.log(small);

// var array1 = ['ab', 'cd', 'kk', 'okn']
// var array2 = ['bc', 'cd', 'g', 'ok']
// var isFound = true

// for(var i = 0; i < array1.length; i++){
//     for(var j = 0; j < array2.length; j++){
//         if(array1[i] === "cd" && array2[i] === "cd"){
//             console.log();
//         }
//     }
// }



var array1 = ['ab', 'cd', 'kk', 'okn'];
var array2 = ['bc', 'cd', 'g', 'ok'];

var commonWords = [];

for (var i = 0; i < array1.length; i++) {
  if (array2.includes(array1[i])) {
    commonWords.push(array1[i]);
  }
}

console.log("Common words:", commonWords);









