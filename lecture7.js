//Array

//declaring variable
let fruits=['apple','orange','banana'];

//displaying complete array
console.log('Elements are in array format');
console.log(fruits); // elements are present in array format.

//displaying fruit name at index 1.
console.log(fruits[1]);

//replacing element at index 1 from orange to pear.
fruits[1]= 'pear';
console.log('replacing element at index 1 from orange to pear');
console.log(fruits);

//accessing array elements
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}


// COMMON OPERATIONS ON ARRAYS


//Converting array to String
console.log('elements in CSV format');
console.log(fruits.toString()); // elements are present in CSV format.

//Pushing an element into the array
console.log('element papaya pushed at the end');
console.log(fruits.push('papaya'),fruits); //elements are pushed at the end of the array.
console.log('element guava pushed at the beginning');
console.log(fruits.unshift('guava'),fruits);   //elements are pushed at the beginning of the array.


//Poping an element from the array
console.log('element popped from end');
console.log(fruits.pop(),fruits);   // element is popped from the end of the array.
console.log('element popped from beginning');
console.log(fruits.shift(),fruits);    // element is removed from the beginning of the array.


//Reversing the array
console.log('reversing the list');
console.log(fruits.reverse());


//Sorting the array
console.log('sorting the list alphabetically');
console.log(fruits.sort());


//Concatenating two arrays.
let vegetables= new Array('cauliflower','brinjal','onions');
console.log(vegetables.toString());

let grocerries=fruits.concat(vegetables);
console.log('concatenating fruits and vegetables');
console.log(grocerries.sort()); //sorting is case sensitive.


//Joining the array element with some symbols. Displaying symbols in between of array elements.
console.log(vegetables.join(' * '));
console.log(fruits.join(' & '));


//Slice can also be performed on arrays
console.log(grocerries.slice(1,4));


//Sorting numbers is a bit different from sorting Strings.
let someNumber= new Array(34,6,6,7,31,67,49,40,29,21,65);
console.log(someNumber);
console.log(someNumber.sort()); //sorting on the basis of initial letters of the array.

console.log(someNumber.sort(function(a, b) {return(a-b)})); //sorting in ascending order.
console.log(someNumber.sort(function(a,b) {return(b-a)}));  //sorting in descending order.


 




