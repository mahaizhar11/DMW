// Objects
// how to access object
// let car={name:"mehran",model:2000,color:"white"}
// console.log(car.name);
// console.log(car.model);
// console.log(car.color);
// new keywords in object
// let bike=new Object();
// bike.name="unique"
// bike.model=2000;
// console.log(bike);
// object methods
// let person=
// {
//     firstname:"Mahnoor",
//     lastname:"Izhar",
//     fullname:function()
//     {
//         return this.firstname+""+this.lastname;
//     }
// };
// console.log(person.fullname());
// object using constructor
// function persons (name,age)
// {
//     this.name=name;
//     this.age=age;
// }
// let myname= new persons("Mahnoor",19);
// console.log(myname);
// console.log(myname.name);
// console.log(myname.age);
// for inloop example
// let human={name:"Naveera", age:20, hair:"black"}
// for(let x in human)
// {
//     document.write(human[x]+"<br>");
// }


// Arrays
// var array=[1,2,3,4,5];
// console.log(array);
// we can also print value of array in index
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// now we can change any value easily
// array[0]=10;
// console.log(array);
// array methods
// 1) to string
// var array=[1,2,3,4,5];
// console.log(array.toString());
// 2) concat
// var array1=[1,2,3,4,5];
// var array2=[6,7,8,9,10];
// var array3=[11,12,13,14,15];
// var store= array1.concat(array2,array3);
// console.log(store);
// 3) sort
// var array1=[4,2,3,1,5];
// var save= array1.sort();
// console.log(save)
// 4) slice
// var string="Hello Dear";
// var save = string.slice(0,6);
// console.log(save)


// loopin in arrays
// for each loop; print every array element
// var array = [1,2,3,4]
// var save = array.forEach(function(value)
// {
//     document.write(value + "<br>");
// })

// map: create a new array by performing some operation in array element
// var array2=[2,5,6,7,8];
// var save1=array2.map(function(value)
// {
//     return value * 2;
// })
// document.write(save1 + "<br>")

// filter: also create a new array by performing some operation on the basis of test condition
// var age = [11,12,13,14,15]
// var some = age.filter(checkage);
// function checkage(age)
// {
//     return age >=14;
// }
// document.write(some);;

// for ofloop: it is also used to get values from and array
// let array=[20,30,40,50,60];
// for(let value of array)
// {
//     document.write(value + "<br>");
// }


// switch statement
// the switch statement is used to perform different actions based on different conditions
var name = prompt("Enter your name");
switch(name)
{
    case "Naveera":
        document.write("yes Naveera is here");
    break;

    case "Mahnoor":
        document.write("yes Mahnoor is here");
    break;

    case "Fatima":
        document.write("yes Fatima is here");
    break;

    default:

    document.write("no one is here")
}