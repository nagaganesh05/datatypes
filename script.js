var a = 1234;
console.log(typeof a)
console.log(a)

var b = 'ganesh';
console.log(typeof b)
console.log(b)

let c = null;
console.log(typeof c)
console.log(c)

const d = ['a','b','c','d'];
console.log(typeof d)
console.log(d[1])
console.log(d)

let e = undefined;
console.log(typeof e)

const details = {
    name:"ganesh",
    age:"123",
    city:"siddipet",
    degree: {
        btech:{
            m1:'80',
            m2:'90',
            english:'90'
        }
    }
}
console.log(typeof details)
console.log(details)
console.log(details.name)
console.log(details.city)
console.log(details.degree.btech)
console.log(details.degree.btech.m2)