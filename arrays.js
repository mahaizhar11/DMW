// Arrays
var array=[1,2,3,4,5];
console.log(array);
// we can also print value of array in index
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
// now we can change any value easily
array[0]=10;
console.log(array);
// array methods
// 1) to string
var array=[1,2,3,4,5];
console.log(array.toString());
// 2) concat
var array1=[1,2,3,4,5];
var array2=[6,7,8,9,10];
var array3=[11,12,13,14,15];
var store= array1.concat(array2,array3);
console.log(store);
// 3) sort
var array1=[4,2,3,1,5];
var save= array1.sort();
console.log(save)
// 4) slice
var string="Hello Dear";
var save = string.slice(0,6);
console.log(save)


// loopin in arrays
// for each loop; print every array element
var array = [1,2,3,4]
var save = array.forEach(function(value)
{
    document.write(value + "<br>");
})