//Question 1;
function fizzBuzz(n) {
    const answer=[];
    for (let i=1 ;i<=n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            answer.push('FizzBuzz')
        }else if(i % 3 === 0){
            answer.push ('Fizz')
        }else if(i % 5 === 0){
            answer.push('Buzz')
        }else{
            answer.push(i.toString())
        }
        
    }return answer;
}

console.log(fizzBuzz(15));


//Question 3
// a.DOM refers to a way of representing the webpage in a structured hierarchical way so that it will become easier for programmers and users to glide through the document and manipulate it.

// b.Promises are an essential concept in JavaScript used to manage asynchronous operations, such as making API requests or reading files, where the results may not be immediately available. 

// c. Object-oriented programming (OOP) is a way of writing code that's like playing with building blocks. In OOP, we create building blocks called "objects" that contain both information (data) and actions (functions). These objects help us represent real-world things and their actions in a computer program.

//  d. a callback is a function that is passed as an argument to another function and is executed at a later point in time. It allows us to achieve asynchronous behavior and handle tasks that take time to complete.


//Question 4
//  1 gigabyte = 1,073,741,824 bytes;


//Question 5
function inAscendingOrder(arr) {

    return arr.slice().sort((a, b) => a - b);
  }
  
  function inDescendingOrder(arr) {
    return arr.slice().sort((a, b) => b - a);
  }
 
  
  //for testing purposes;
const numbers = [10,54,80,9,25,2,36,16,8];
const ascendingList = inAscendingOrder(numbers);
const descendingList = inDescendingOrder(numbers);

console.log("The ascending order = ",ascendingList);
console.log("The descending order = ",descendingList);






