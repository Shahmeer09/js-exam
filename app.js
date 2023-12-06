// TEST :

// QUESTION NO 1 :

// let A = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < A.length; i++) {
//   console.log(A[i]);
// }



// }


// QUESTION NO 2 :


//  const a = ["cake" , "pie" , "cookie" , "chips" , "patties"];
//  const userInp = prompt('search any bakery item');

//  for(let i = 0; i < a.length; i++){
//      if(userInp === a[i]){
//          alert('Yes ! This item is available in my bakery')
//          break;
//      }
//      else{
//          alert(' ooohhh  Sorry! this item is not available in my bakery.')
//          break;
//      }
//  }







// QUESTION NO 3 :

// let scores = [12, 45, 3, 22, 34, 50];
//   let stopValue = parseInt(prompt("Enter the stop value:"));

//   if (!isNaN(stopValue)) {
//       let output = [];
//       for (let i = 0; i < scores.length; i++) {
//          if (scores[i] <= stopValue) {
//              output.push(scores[i]);
//     } else {
//              break;
//          }
//     }

//      console.log(output);
//   } else {

//       console.log("Invalid input. Please enter a valid number.");
//   }




// QUESTION NO 4 :

// let initialStars = parseInt(prompt("Enter the initial number of stars:"));
// if (!isNaN(initialStars) && initialStars > 0) {
//   for (let i = initialStars; i > 0; i--) {
//     let line = "";
//     for (let j = 0; j < i; j++) {
//       line += "*";
//     }
//     console.log(line);
//   }
// } else {
//   console.log("Invalid input. Please enter a valid positive number.");
// }



// QUESTION NO 5 :

// function calculate(num1 , num2 , operator){
//     let result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;

//         case '-':
//             result = num1 - num2;
//             break;    
    
//         case '*':
//             result = num1 * num2;
//             break; 
            
//         case '/':
//             result = num1 / num2;
//             break;  

//         default:
//             return 'Invalid operator'
//     }
//     return result;
// }

// let num1 = prompt('enter a first number');
// let num2 = prompt('enter a secound number');
// let operator = '*'
// let result = calculate(num1 , num2 , operator)
// console.log(result);

// question no 6 :

//   let str = prompt('enter any name');

//    function palindrome (str){
//        console.log(str.split('').reverse().join(''));
//        if(str.split('').reverse().join('') ===str){
//            console.log('this is palindrome');
//        }else{
//            console.log('this is not palindrome');
//        }

//    }
//   palindrome(str);






// QUESTION NO 7 :

// function celsiusToFahrenheit() {
//       let c = prompt('Enter number ,  centigrade into fahrenheits ')
//       let f = (c * 9 / 5) + 32
//       console.log(`${c}°C is ${f}°F`);
//    }

//    celsiusToFahrenheit()






// QUESTION NO 8 :


// const books = [
//     { title: "book1", author: "author1", price: 20 },
//     { title: "book2", author: "author2", price: 30 },
//     { title: "book3", author: "author3", price: 25 },
//     { title: "book4", author: "author4", price: 15 },
//   ];
  
//   function filterBooks(bookArray, maxPrice) {
//     const affordableBooks = [];
  
//     for (const book of bookArray) {
//       if (book.price <= maxPrice) {
//         affordableBooks.push(book);
//       }
//     }
  
//     return affordableBooks;
//   }
  
//   const maxPrice = 25;
//   const affordableBooks = filterBooks(books, maxPrice);
  
//   if (affordableBooks.length > 0) {
//     console.log(`Books with prices less than or equal to ${maxPrice}:`);
//     console.log(affordableBooks);
//   } else {
//     console.log(`No books found with prices less than or equal to ${maxPrice}`);
//   }

