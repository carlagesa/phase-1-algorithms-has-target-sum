function hasTargetSum(array, target) {
  // Write your algorithm here

for (let num1 = 0; num1 < array.length; num1++){
  for (let num2 = 0; num2 < array.length; num2++){
    if (array[num1] + array[num2] === target){
      return true;
    }
  }
}
return false;

}

/*I believe this is a more optimized code but doesn't seem to give the
correct output value that is expected */
// function hasTargetSum(array, target){
//   for (let num1, num2 = 0; num1 && num2 < array.length; num1++ && num2++){
//     if(array[num1] + array[num2] === target){
//       return true;
//     }   
//   }
//   return false;
// }

 
/* If we console.log the function & input array, target of our own we should
be able to see our output */
console.log(hasTargetSum([2,3,4,5,6,7,1], 10))

/* 
  Write the Big O time complexity of your function here
  
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
