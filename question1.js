//1. WAP to find Second largest element in an array : arr[] = [12, 35, 1, 10, 34, 1, 35]

let arr = [12,35,1,10,34,1,35]
let first = 0;
let second = 0
let third = 0
function largest(){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > first){
            first = arr[i]
        }
    }
    console.log(`largest element of array is ${first}`)
    for(let i=0; i<arr.length; i++){
        if(arr[i] > second && arr[i] < first){
            second = arr[i]
        }
    }
    console.log(`second largest element of array is ${second}`)
    for(let i=0; i<arr.length; i++){
        if(arr[i] > third && arr[i] < second){
            third = arr[i]
        }
    }
    console.log(`third largest element of array is ${third}`)
}
largest()

// with sorting
function largestWithsort(){
    for(let i=0; i<arr.length; i++){
        for(let j=0;j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
    return arr[arr.length-2]
}
console.log(largestWithsort())

//WAP to reverse an integer without converting it to a string, without using any built-in methods.
let n = 12345

function reverse(){
    let rev = 0
    
    while(n>0){
        let last = n%10  //5
        rev = (rev * 10) + last  //5
        n = (n - n%10) / 10 // 1234
    }
    return rev
}
console.log(reverse())

//using str 
let number = 12345
let str = number.toString()

function reverseNum(){
    let rev = ''
    for(let i=str.length-1;i>=0; i--){
        let num = Number(str[i])
        rev += num
    }
    return rev
}
console.log(reverseNum())

//Swap Values without using any variable a=10, b=12.
let a = 10;
let b = 20
const swap=()=>{
    a = a+b //10+20 = 30
    b = a-b // 30-20 = 10
    a = a-b // 30-10 = 20
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
}
swap()

// using third variable
function swap2(){
    let temp = a
    a = b
    b = temp
    console.log(a)
    console.log(b)
}
swap2()

//Logic for anagram program with its time complexity. (for large strings).

//logic -> first check the length of the given strings -> if the string is equal split it into an array, sort an array and join them
let str1 = 'CATqwertalskdjfhg'
let str2 = 'ACTtrewqlkjasdfhg'

function anagram(){
    if(str1.length !== str2.length) return false
    console.log(str1.split('').sort().join(''))
    console.log(str2.split('').sort().join(''))
    return str1.split('').sort().join("") === str2.split('').sort().join("")
}
console.log(anagram())

//method 2
function anagram2(){
    let match = false
    if(str1.length !== str2.length) return false
    console.log(str1.split('').sort().join(''))
    console.log(str2.split('').sort().join(''))
    for(let i=0; i<str1.length; i++){
        if(str1[i] == str2[i]){
            match = true
        }
    }
    console.log(match)
    if(match){
        console.log(`anagram`)
    }else{
        console.log(`not anagram`)
    }
}
anagram2()

// reverse string
let string = 'programming'
function revString(){
    let rev = ''
    for(let i=string.length-1; i>=0; i--){
        rev += string[i]
    }
    return rev
}
console.log(revString())

//WAP to find missing elements from the array?
// [0, 1, 2, 3, 5]
// 0 !== n, n=1
// 1 == 1, n++
// 2 == 2, n++
// 3 == 3, n++
// 5 != 4, n=4
// return n
let arr1 = [3,2,5,0,1]

function missing(){
    for(let i=0;i<arr1.length; i++){
        for(let j=0; j<arr1.length-i-1; j++){
            if(arr1[j] > arr1[j+1]){
                let temp = arr1[j]
                arr1[j] = arr1[j+1]
                arr1[j+1] = temp
            }
        }
    }
    let n = 1
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] == n){
            n++
        }
    }
    return n
}
console.log(missing())

//WAP to find the given string is Palindrome or not.

let str3 = 'naman'
function palindrome(){
    let rev = ''
    for(let i=str3.length-1; i>=0; i--){
        rev += str3[i]
    }
    if(rev == str3){
        console.log('palindrome')
    }else{
        console.log('not palindrome')
    }
}
palindrome()

// number
let n1 = 12121
function palindrome1(){
    let rev = 0
    let dup = n1
    while(n1 > 0){
        let last = n1%10
        rev = (rev * 10) + last 
        n1 = (n1- n1%10) / 10
    }
    // console.log(n1)
    if(rev === dup){
        console.log('palindrome')
    }else{
        console.log('not palindrome')
    }
}
palindrome1()
// WAP to print Fibonacci series with recursion.

function fib(n){
    if(n<=2) return n
    return fib(n-1) + fib(n-2)
}
function print(n){
    for(let i=0; i<n; i++){
        console.log(fib(i))
    }
}
print(12)

//Code to find even numbers in a list
let evn = 100
function findEven(){
    let i = 1
    while(i <= evn){
        if(i % 2 == 0){
            console.log(i)
        }
        i++
    }
}
findEven()


// find prime
function prime(n){
    if(n<2)
    return `${n} is not prime`
    
    for(let i=2; i<n; i++){
        if(n%i == 0){
            return `${n} is not prime`
        }
    }
    return `${n} is prime`
}


//find all duplicate numbers in an array.
let arr2 = [3,1,9,3,5,7]

function dup(){
    for(let i=0;i<arr2.length; i++){
        for(let j=i+1; j<arr2.length; j++){
            if(arr2[i] === arr2[j]){
                console.log(arr2[j])
            }
        }
    }
    return arr2
}
console.log(dup())

//remove duplicate element 
function dup1(){
    for(let i=0;i<arr2.length; i++){
        for(let j=i+1; j<arr2.length; j++){
            if(arr2[i] === arr2[j]){
                for(let k = j; k<arr2.length; k++){
                    arr2[k] = arr2[k+1]
                }
                arr2.length--
                j--
            }
        }
    }
    return arr2
}
console.log(dup())

//14. [80, 60, 10, 50, 30, 100, 0, 50]
//Find pairs whose sum = 100;

let arr3 = [80, 60, 10,50, 30, 100, 0, 50]
function pair(sum){
    for(let i=0; i<arr3.length; i++){
        for(let j=i+1; j<arr3.length; j++){
            if(arr3[i] + arr3[j] == sum){
                console.log([arr3[i], arr3[j]])
            }
        }
    }
}
pair(100)


let str9 = 'Hello world!'
let uppercount = 0
let lowercount = 0

function countStr(){
    for(let i=0; i<str9.length; i++){
        if(str9[i] !== " " && str9[i] !== '!'){
        if(str9[i] == str9[i].toUpperCase()){
            uppercount++
        }
    }
    }
    console.log(`uppercount ${uppercount}`)
    for(let i=0; i<str9.length;i++){
        if(str9[i] !== ' ' && str9[i] !== '!'){
        if(str9[i] == str9[i].toLowerCase()){
            lowercount++
        }
    }}
    console.log(`lowercount ${lowercount}`)
}
countStr()


let str7 = 'ENGINEER'
let obj = {}

function num(){
    str7 = str7.toLowerCase()
    for(let i=0; i<str7.length; i++){
        if(obj[str7[i]] == undefined){
            obj[str7[i]] = 1
        }else{
            obj[str7[i]]++
        }
    }
    return obj
}
num()
let rev = ''

for(let t in obj){
    rev += `${t}${obj[t]}`
}
console.log(rev)