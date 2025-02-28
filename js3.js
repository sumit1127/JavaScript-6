



//find first and last index of target value
let arr = [2,1,0,4,1,2,5,1]
let target = 4

function num(){
    let first = -1;
    let last = -1;
    let count = 0
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] == target){
            count++
            if(first == -1){
                first = i
            }
            last = i
        }
    }
    if(count == 1) return first
    if(count > 1) return [first, last]
}
console.log(num())


//prime numbers between the range
function prime(n){
    if(n<2) return false
    
    for(let i=2; i<n; i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}

function print(a,b){
    for(let i=a; i<b; i++){
        if(prime(i)){
            console.log(i)
        }
    }
}
print(2,20)

//count uppercase, lowercase

let str = 'Hello world!'
let uppercount = 0;
let lowercount = 0
 
function num(){
    for(let i=0; i<str.length; i++){
        if(str[i] !== ' ' && str[i] !== '!'){
         if(str[i] === str[i].toUpperCase()){
            uppercount++
        }   
        }
    }
    console.log(`uppercase ${uppercount}`)
    
    for(let i=0; i<str.length; i++){
        if(str[i] !== ' ' && str[i] !== '!'){
         if(str[i] === str[i].toLowerCase()){
            lowercount++
        }   
        }
    }
    console.log(`lowercount ${lowercount}`)
}
num()

let str2 = 'Engineer'
let obj = {}

function fun(){
    let str = str2.toLowerCase()
    for(let i=0; i<str.length; i++){
        if(obj[str[i]] == undefined){
            obj[str[i]] = 1
        }else{
            obj[str[i]]++
        }
    }
    return obj
}
fun()

let rev = ''
for(let t in obj){
    rev += `${t}${obj[t]}`
}
console.log(rev)

// print true or false based on frequency
let arr = [1,2,3,4,1,5,9,8,9]
let obj = {}
function num(){
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]] == undefined){
            obj[arr[i]] = 1
        }else{
            obj[arr[i]]++
        }
    }
    console.log(obj)
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]] > 2){
            return false
        }
    }
    return true
}
console.log(num())

let arr3 = [80, 60, 10,50, 30, 100, 0, 50]
function pair(target){
    for(let i=0; i<arr3.length; i++){
        for(let j = i+1; j<arr3.length;j++){
            if(arr3[j] + arr3[i] == target){
                console.log([arr3[i], arr3[j]])
            }
        }
    }
}
pair(100)

//dup element
let arr = [3,1,9,3,5,7,1]
function dup(){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] == arr[i]){
                for(let k = j; k<arr.length; k++){
                    arr[k] = arr[k+1]
                }
                arr.length--
                j--
            }
        }
    }
    return arr
}
console.log(dup())

function dup(){
    for(let i=0;i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] == arr[i]){
                console.log(arr[j])
            }
        }
    }
}
dup()

//recursion
function fib(n){
    if(n<2) return n
    return fib(n-1) + fib(n-2)
}
function print(n){
    for(let i=0; i<n; i++){
        console.log(fib(i))
    }
}
print(8)

//without recursion
function fibo(n){
    let a = 0, b = 1, c
    
    for(let i=2; i<n; i++){
        console.log(a)
        c = a+b
        a = b
        b = c
    }
}
fibo(8)

let str1 = 'pqowieuryt';
let str2 = "poiuyqwert";
function ana(){
    if(str1.length !== str2.length) return console.log('not anagram')
    let ans1 = str1.split('').sort().join()
    let ans2 = str2.split('').sort().join()
    if(ans1 === ans2){
        console.log('Anagram')
    }else{
        console.log('Not anagram')
    }
}
ana()

function anagram(){
    if(str1.length !== str2.length) return console.log("not anagram")
    let obj1 = {}
    let obj2 = {}
    
    for(let i=0; i<str1.length; i++){
        if(obj1[str1[i]]){
            obj1[str1[i]]++
        }else{
            obj1[str1[i]] = 1
        }
    }
    for(let i=0; i<str2.length; i++){
        if(obj2[str2[i]] == undefined){
            obj2[str2[i]] = 1
        }else{
            obj2[str2[i]]++
        }
    }
    for(let i=0; i<obj1; i++){
        if(obj1[i] !== obj2[i]){
            return console.log("not anagram")
        }
    }
    console.log('anagram')
}
anagram()

let n = 25
function sqrt(){
    if(n < 0) return -1
    let i = 0
    while(i*i <= n){
        if(i === n) return n
        i++
    }
    return i-1
}
console.log(sqrt())


function prime(n){
    if(n<2) return false
    for(let i=2; i<n; i++){
        if(n%i == 0){
            return false
        }
    }
    return true
}

function print(n){
    let count = 0
    let num = 2
    let sum = 0
    while(count < n){
        if(prime(num)){
            sum += (num*num)
            count++
        }
        num++
    }
    console.log(sum)
}
print(4)

function sqrt(n){
    if(n<0) return -1
    let i = 0
    while(i*i <=n){
        if(i == n) return n
        i++
    }
    return i-1
}
console.log(sqrt(25))

function callMe(){
    console.log('normal func')
}
callMe()

(function callMe(){
    console.log('iife')
})()


function myfunc(x,y){
    try{
        if(y == 0){
            throw new Error('Divide by zero exception')
        }else{
            c = x/y
            console.log(c)
        }
    }catch(e){
        console.log(e)
    }finally{
        console.log(`${x} and ${y}`)
    }
}
myfunc(5,2)

// const nums = [2,4,1,6,8]
// console.log(nums.includes(4))