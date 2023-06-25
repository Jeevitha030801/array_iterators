
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
//these 2 can handle all the even difficult css , can use the array methods also
//in this we have to mention the id,class (#,.)
var manipulateQuerySelector = document.querySelector("#heading")
manipulateQuerySelector.style.color="pink"
//in case of get element by id,class or tag - array methods cannot be taken into consideration
var manipulateQuerySelectorAll=document.querySelectorAll(".subheading")
manipulateQuerySelectorAll.forEach(query => {
    query.style.color="red"
});

//parent, firstchild, lastchild
var manipulateFirstChild=document.querySelector("li:first-child")
console.log(manipulateFirstChild)
var manipulateLastChild=document.querySelector("li:last-child")
console.log(manipulateLastChild)
var manipulateColor=document.querySelectorAll(".color")
manipulateColor.forEach(mcolor => {
    mcolor.style.color="green"
});

//childNode - includes all the whitespace characters too
//children - only the children element
//parentElement- up
var allChild = document.querySelector("#list")
console.log(allChild.childNodes)
console.log(allChild.children)
console.log(allChild.parentElement)
console.log(allChild.parentElement.parentElement.parentElement)

//next and previous sibling
console.log(manipulateFirstChild.nextElementSibling)
console.log(manipulateLastChild.previousElementSibling)

//nodevalue and textcontent- used to get the value stored in that specific var, tag or class
var headContent = document.getElementsByTagName("h3")
//needs to access from the first child because it returns a node object
console.log(headContent[0].firstChild.nodeValue)
console.log(headContent[0].textContent)

//getAttribute , setAttribute
var getClassAttribute = document.getElementsByClassName("dom1")
console.log(getClassAttribute[0].getAttribute("data")) 
getClassAttribute[0].setAttribute("data","hello this is changed")
console.log(getClassAttribute[0].getAttribute("data"))

//className and classList 
//classList is used to add, remove and check if the attribute contains the classes
var findname=document.getElementById("firstclass")
console.log(findname.className)
var assignsecond=document.getElementById("secondclass")
assignsecond.className="firstClass"
const firstClassList=document.getElementsByClassName("firstClass")
console.log(firstClassList)
var assignThird=document.getElementById("thirdclass")
assignThird.classList.add("text","hi","hello") //adding of classnames so it will be used with respect to css
assignThird.classList.remove("hi")
 var result =assignThird.classList.contains("text")
 if(result) console.log("hey it is present")
 else {console.log("no not present")}
console.log(assignThird)
//createElement - to create new element using DOM
//textnode - to add a text to the element that has been created
//appendChild - to add the created element to the existing HTML
//document.body - provides access to the body of the html doc
                    //add textnode ->element->body of html doc(to view in doc)->to the div where it should be added
var exisitingDiv=document.getElementById("create")
var creatingDiv=document.createElement("div")
var creatingButton=document.createElement("button")
var textDiv= document.createTextNode("hi")
var textButton=document.createTextNode("okok")
creatingDiv.appendChild(textDiv)
document.body.appendChild(creatingDiv)
creatingButton.appendChild(textButton)
document.body.appendChild(creatingButton)
exisitingDiv.appendChild(creatingDiv)
exisitingDiv.appendChild(creatingButton)
 
creatingDiv.classList.add("firstClass")
console.log(create)
//INSERTBEFORE , REPLACECHILD 
//insertbefore(element,location)
//replacechild(new,old)
//hi okok button to button okok
create.insertBefore(creatingDiv,creatingButton)
console.log(create)

//innerText- similar to text node 
// prepend - adds in the beginning , opp to append
var topMost=document.createElement("h1");
topMost.innerText="This is the example of innerText and prepend"
document.body.prepend(topMost)

//Remove and RemoveChild - common syntax
//innerHTML and textContent - both are same as it displays the message stored in the attribute
//the difference is textcontent shows only the message and innerHTML shows along with the structure
