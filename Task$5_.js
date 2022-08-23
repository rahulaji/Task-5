//1.even numbers Immidiately invokeing func exp and annonomys function

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = [];

arr.forEach(number => {
  if (number % 2 !== 0) {
    odds.push(number);
  }
});
};
console.log(odds)




//covert all strings to uperCase
(function (n){
    console.log(n.toUpperCase())
  })("geeks")

//sum of all array
function sumArray(array) {
    const ourArray = [1, 4, 0, 9, -3];
    let sum = 0;
  
    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i];
    }
    
    return sum;
  }
  
  console.log(sumArray());
  //all prime number
  let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = [];
function isPrime(num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

//5.palindrome 

(function (str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
})(1)




//Arrow functions


//print all odd numbers

[1,2,3,4,5,6,7,8,9,10].forEach((num)=> num%2==0 &&console.log(num));
 


//upperCase 
((n)=>{
    console.log(n.toUpperCase()) 
   })("geeks")
