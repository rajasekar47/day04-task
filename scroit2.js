// 2. Do the below programs in arrow functions.
//a.Print odd numbers in an array
var odds =(arr)=>{
    var rst = [];
    for(var i=0;i<arr.length;i++){
      if(arr[i]%2!==0){
          rst.push(arr[i]);
      }
    }
    return rst;
  }
  console.log(odds([11,12,13,14,15,16,17,18,19,20]));
//output [ 11, 13, 15, 17, 19 ]
//------------------------------------------------------------------
//b.Convert all the strings to title caps in a string array
 var titleCase= (str)=>{
var a = [];
str = str.toLowerCase().split(' ');
for (var i = 0; i <str.length; i++) {
str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
a.push(str[i]);
}
return a;
};console.log(titleCase("guvi geek"));
//output [ 'Guvi', 'Geek' ]
//------------------------------------------------------------------
//c. Sum of all numbers in an array
var sum = (x,y,z)=> {
var a =[];
sum= (x+y+z);
a.push(sum);
return a;
}; console.log(sum(10, 25, 35));
//output [ 70 ]
//---------------------------------------------------------------------
//d. Return all the prime numbers in an array
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
numArray = numArray.filter((number) => {
for (var i = 2; i <= Math.sqrt(number); i++) {
if (number % i === 0) return false;
}
return true;
}); console.log(numArray);
// output [ 2, 3, 5, 7 ]
//--------------------------------------------------------------------
//e. Return all the palindromes in an array
var a = (arr)=>{
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
// output [ 'mom', 'dad', 'wow' ]