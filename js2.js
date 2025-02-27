
let obj = {
    name : 'steve',
    age : 23,
    gender : 'M'
}

for(let i in obj){
    console.log(`${i} : ${obj[i]}`)
}

let color = ['red', 'green', 'yellow']

for(let i in color){
    console.log(`${i} : ${color[i]}`)
}


let score = [50, 80, 60, 44, 20]
for(let i of score){
    console.log(i)
}

let str = 'Hello'
for(let s of str){
    console.log(s)
}

imperative way
let a = 4

let isEven;
if(a % 2 == 0){
    isEven = true
}else{
    isEven = false
}
console.log(isEven)

declarative way
function evn(a){
    let isEven;
    if(a % 2== 0){
        isEven = true
    }else{
        isEven = false
    }
    return isEven
}
console.log(evn(8))


callback

const firstName=(name, cb)=>{
    console.log(name)
    cb('Rogers')
}

const lastName=(last)=>{
    console.log(last)
}

firstName('steve', lastName)

let isEven =(a)=>{
    return a%2 == 0
}
function result(fn, num){
    const ans = fn(num)
    console.log(`${num} is even ${ans}`)
}
result(isEven, 9)
let arr = [
    {name : 'A', age : 24, gender : 'M'},
    {name : 'B', age : 51, gender : 'F'},
    {name : 'C', age : 62, gender : 'M'},
    {name : 'D', age : 33, gender : 'F'},
    {name : 'E', age : 44, gender : 'M'},
    {name : 'F', age : 65, gender : 'F'},
    {name : 'G', age : 56, gender : 'M'},
    {name : 'H', age : 27, gender : 'F'},
    {name : 'I', age : 38, gender : 'M'},
]
// print male ages
let ages = []
for(let i=0; i<arr.length; i++){
    if(arr[i].gender == 'M'){
      ages.push(arr[i].age)
    }
}
console.log(ages)

let newArr = []
for(let i=0; i<arr.length; i++){
    if(arr[i].age > 40){
        newArr.push(arr[i].name)
    }
}
console.log(newArr)    

let students = [
    {name : "steve", rollNumber: 34, marks:67},
    {name : "broad", rollNumber:23, marks:40},
    {name : 'alex', rollNumber:20, marks:90},
    {name : 'david', rollNumber:40, marks:35},
    {name : 'aron', rollNumber:50, marks:49}
]

let names = []
for(let i=0; i<students.length; i++){
    names.push(students[i].name.toUpperCase())
}
console.log(names)

let nmap = students.map((x)=> x.name.toUpperCase())
console.log(nmap)

let mark = []
for(let i=0; i<students.length; i++){
    if(students[i].marks > 50){
        mark.push(students[i].marks)
    }
}
console.log(mark)

let filter = students.filter(x => x.marks>50).map(x => x.marks)
console.log(filter)

let sum = 0
for(let i=0; i<students.length; i++){
    sum += students[i].marks
}
console.log(sum)

let reduce = students.reduce((acc, cum)=> acc+cum.marks,0)
console.log(reduce)

// return total marks with marks greater than 60
// and add 20 marks who scored less than 50
let ans = students.map(x => x.marks<50 ? x.marks+20:x.marks).filter(x => x>60)
console.log(ans)

//impure and pure function
//impure => it produce different output for same input values
//pure => it produce same output for same input values

let a = 10
function impure(x){
    return a+x
}
console.log(impure(5))

function pure(a,b){
    return a+b
}
console.log(pure(10,5))

objects
let myObj = {
    name : 'Aron',
    age : 30,
    myFn : function(){
        console.log(this.name)
    }
}

let c = myObj.age
console.log(c)

arrow fn
let obj2 = {
    name : 'Steve',
    age : 30,
    myFn : ()=>{
        console.log(this.age)
    }
}
obj2.myFn()

const user = {
    firstName : 'Peter',
    age : 28,
    getName(){
        const firstName = 'pweojd'
        return this.firstName
    },
    about : function(){
        age : 20
        console.log(this.age)
    }
}
console.log(user.getName())
user.about()

const user2 = {
    name : 'qwerty',
    logMessage(){
        console.log(this.name)
    }
}
setTimeout(user2.logMessage, 1000)
setTimeout(()=>user2.logMessage(), 1000)

let calc = {
    total : 0,
    add(n){
        this.total += n
        return this
    },
    sub(n){
        this.total = this.total-n
        return this
    },
    mul(n){
        this.total *= n
        return this
    },
    div(n){
        this.total /= n
        return this
    }
}

const result =  calc.add(4).add(4).sub(2).mul(2).div(2)
console.log(result.total)

function sumCurried(a){
    return (b)=>{
        return a+b
    }
}
let a = sumCurried(5)
console.log(a(10))

function f(a){
    return (b)=>{
        return `${a} ${b}`
    }
}
console.log(f('Hello')('World'))


function evaluate(operation){
    return function(a){
        return function(b){
            if(operation == 'sum') return a+b
            if(operation == 'sub') return a-b
            if(operation == 'mul') return a*b
            if(operation == 'div') return a/b
        }
    }
}
let ans = evaluate('sum')
console.log(ans(4)(4))

console.log(evaluate('mul')(3)(4))

function add(a){
    return function(b){
      if(b) return add(a+b)
      return a
    }
}
console.log(add(1)(2)(3)(4)())


