
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