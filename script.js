//Do the below programs in anonymous function & IIFE
//1.a.Print odd numbers in an array
// * anonymous function
var a = function (arr){
    var result = []; 
    for(var i=0;i<arr.length;i++){
      if(arr[i]%2!==0){
          result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(a([1,2,3,4,5,6,7,8,9,10]));
  //output [ 1, 3, 5, 7, 9 ]

  //*IIFE 
  (function (arr1,num){
    var res = [];
    for(var j=0;j<arr1.length;j++){
      if(arr1[j]%2!==0){
          res.push(arr1[j]);
      }
    }
    console.log(res) 
  })([11,12,13,14,15,16,17,18,19,20])
  //output [ 11, 13, 15, 17, 19 ]
//---------------------------------------------------------------------------------
//1.b  Convert all the strings to title caps in a string array
//  * anonymous function
function titleCase(str) {
    var a = [];
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    a.push(str[i]);
    }
    return a;
    }
    console.log(titleCase("guvi geek"));
    // output [ 'Guvi', 'Geek' ]

    //*  IIFE
    (function titleCase(str) {
    var b = [];
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    b.push(str[i]);              
    }console.log(b);
   }) ("guvi geek");
   //output [ 'Guvi', 'Geek' ]
   //-------------------------------------------------------------
   //1.c  Sum of all numbers in an array
// *ANONYMOUS FUNCTION
var num= [10,25,35]
function sum (x,y,z) {
var a =[];
var plus= (x+y+z);
a.push(plus);
console.log(a);
return a;
 } sum(10, 25, 35);
// output [70]

//  *IIFE
(function sum (x,y,z) {
var a =[];
var plus= (x+y+z);
a.push(plus);
console.log(a);
})(10, 25, 35);
//output [70]
//----------------------------------------------------------------------
// 1.d Return all the prime numbers in an array
//  * ANONYMOUS FUNCTION
var array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
function isPrime(num) {
for (let i= 2; num >i; i++) {
if (num % i == 0) {
return false;
}
}
return num > 1;
}
console.log(array.filter(isPrime));
//output [ 2, 3, 5, 7 ]

//*IIFE
(function findPrimes(arr) {
const primes = [];
for (var i = 0; i < arr.length; i++) {
let isPrime = true;
for (var j = 2; j < arr[i]; j++) {
if (arr[i] % j === 0) {
isPrime = false;
break;
}
}
if (isPrime && arr[i] > 1) {
primes.push(arr[i]);
}
}
console.log(primes);
})([1,2,3,4,5,6,7,8,9,10])
  //output will be[2,3,5,7]
//--------------------------------------------------------------
//1.e Return all the palindromes in the array
// *ANONYMOUS FUNCTION
var a = function(arr){
var resu= [];
for (var i=0; i<arr.length;i++){
var data=arr [i].split("").reverse().join("");
if  (data===arr[i]){
resu.push(arr[i]);
}
}
return resu;
}
console.log (a(["mom","dad","data","wow"]));
//output [ 'mom', 'dad', 'wow' ]

// *IIFE
(function palindromes(data){
var palindromesArray=[];
for(var i=0;i<data.length;i++){
if(data[i]==data[i].split('').reverse().join('')){
palindromesArray.push(data[i]);
}
}
console.log(palindromesArray);
})(['nitin','malayalam','suriya','madam'])
// output [ 'nitin', 'malayalam', 'madam' ]
//-------------------------------------------------------------------
//1.f. Return median of two sorted arrays of the same size
// * ANONYMOUS FUNCTION
const arr1= [1,3,5,7];
const arr2=[2,4,6,8];
var m = function(arr1,arr2){
  var arr= [...arr1, ...arr2]
  arr.sort((a,b)=>a-b)
  var n= arr.length
if(n%2===0){
  return((arr[n/2]+arr[n/2-1])/2)
} else{
  return[arr.Math.floor(n/2)];
}
}
console.log(m(arr1,arr2))
//output 4.5
// *IIFE
(function median(a,b){
var concat=[...a,...b];
var result=[];
var length=concat.length;
if(length%2==0){
result.push(concat[length/2-1],concat[length/2])
}else{
result.push(concat[Math.floor(length/2)])
}
console.log(result);
})([1,2,3,4],[5,6,7,8])
//output 4.5
//---------------------------------------------------------------------
//  1.g  Remove duplicates from an array
//* function
var arr = [1, 2, 2, 3, 4, 4, 5];
 function indexMethod(arr){
var unique = arr.filter((item, index) => {
return arr.indexOf(item) === index;});
return unique;
}
console.log(indexMethod(arr));
//output [ 1, 2, 3, 4, 5 ]

//*IIFE
(function indexMethod(arr){
var unique = arr.filter((item, index) => {
return arr.indexOf(item) === index;});
console.log(unique);
})([1, 2, 2, 3, 4, 4, 5])
//output [ 1, 2, 3, 4, 5 ]
//-----------------------------------------------------------------
//1.h Rotate an array by k times
//ANONYMOUS FUNCTION
var ab= function(arr,k){
for(var i=0; i<k; i++){
arr.push(arr[i])
}for(var i=0; i<k;i++) {
arr.shift()
} return(arr)
} 
console.log(ab([1,2,3,4,5],3))
// output [ 4, 5, 1, 2, 3 ]