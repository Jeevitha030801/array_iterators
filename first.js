
const afterFilter=(name)=>{
    console.log(name.toUpperCase())
}
const filter=(name,size,cb)=>{
    if(size>4)
    {
        cb(name)
    }
}
const names=["Alice","Bob","Charlie","David"]
for (const name of names) {
    filter(name,name.length,afterFilter)
}

//ARRAY ITERATORS

//forEach - no new array is created
const students=[
    {name:"Alice",age:18,extra:"chess"},
    {name:"Bob",age:19,extra:"carrom"},
    {name:"Charles",age:28,extra:"yoga"}
]

students.forEach(students => {
    console.log(`${students.extra} are the extracurriculars`)
});

//map - new array is created from the original array with same number of elements
//anonymous function
const updatedMap=students.map((student)=>{
    return {
        ...student,age:student.age+10
    }
})
console.log(updatedMap)

//filter - new array, length of array can be changed(less ) 
//based on conditions

const filterAge = students.filter((student) =>{
    return (student.age>20)
    
})
console.log(filterAge)

//reduce - reduces to single value
//accelerator, current value as parameters - acc meaning the var which holds the total , curr means the current index
// 0 or {} or [] at the end meaning the datatype
const reduceAge = students.reduce((acc,curr) =>{
    acc+=curr.age;
    return acc;
    
},0)
console.log(reduceAge)

//EXAMPLE FOR ARRAY ITERATORS - MAP, FILTER, REDUCE, FIND, SOME, EVERY
//Question: You are building a music streaming application. Given an array of songs, write a program to perform the following tasks:

//1.Get an array of song titles from the list of songs.
//2.Filter the songs to include only those with a duration greater than 3 minutes.
//3.Find the song with the highest rating.
//4.Calculate the total duration of all songs.
//5. find less than 4 ratings

const songs = [
    { title: 'Song 1', duration: 179, rating: 4.5 },
    { title: 'Song 2', duration: 210, rating: 3.8 },
    { title: 'Song 3', duration: 30, rating: 4.2 },
    { title: 'Song 4', duration: 240, rating: 4.9 },
    { title: 'Song 5', duration: 28, rating: 3.6 }
  ];
//1
  const titles=songs.map((song)=>{
    return song.title
  })
  console.log(titles)
//2
const filterDuration =songs.filter((song)=>{
    return song.duration>3*60
})
console.log(filterDuration)
//3
const ratings =songs.map((song)=>{
    return song.rating
})
const highestRating = Math.max(...ratings)
console.log(highestRating)
//4 
const totalDuration = songs.reduce((acc,curr)=>{
    acc+=curr.duration
    return acc
},0)
console.log(totalDuration)
//5 - returns only the first , single instance return
const lessDuration=songs.find((song)=>{
    return song.rating<4;
})
console.log(lessDuration)

//Math object
//MAth.floor , Math.ceil, Math.MIN, Math.MAX

//DATE object - returns only the index and not the string. so we will get date(day num) and the year as integer itself
//but the month and day(str) is received only as index. so for that we use arrays
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date=new Date();

console.log(`Today's date is ${date.getDate()} ${month[date.getMonth()]}, ${date.getFullYear()} and the day is ${days[date.getDay()]}`)

//DOM MANIPULATION
//first, select the element/group of elements 
// second, do something on the elements
//In general returns a node/object

//hierarchy - window -> document , in case the js is not able to find the property/method it by default searched in the window object. if not found throws error
//window object - the tab that you are currently working on
//document - the document specific consisting the head and body
//console.dir - to get info regarding the doc

//getElementById
//assigning to a variable is a good choice rather than starting off from scartch each time
var manipulateId=document.getElementById("dom")
manipulateId.style.backgroundColor='red'

//getElementByTagName 
//returns a node-list , but cannot use array methods
//in order to use the node-list, change it to an array
//so in order to manipulate, we need to manipulate the elements and not the whole node-list
var manipulateTag=document.getElementsByTagName("h3")
manipulateTag[0].style.color="blue"
//to convert to array- use spread operator to use array methods
var arrayManipulateTag=[...manipulateTag]
for (const array of arrayManipulateTag) {
    console.log(array)
}

//getElementByClassName - exact same as tag name
var manipulateClass=document.getElementsByClassName('dom1')
manipulateClass[1].style.backgroundColor='lightgrey'

//querySelector - single element
//querySelectorAll - multiple elements