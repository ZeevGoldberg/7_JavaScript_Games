//constructor functions
// function Baba(Cushin, Home, Ball){
//     this.firstName = Cushin;
//     this.lastName = Home;
//     this.dob = new Date(Ball);
//     // this.getBirthYear = function(){
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = function(){
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }
// //Instantiate object
// const person1 = new Baba('Jimmy', 'Block', '14-5-1978');
// const person2 = new Baba('Nelly', 'Holler', '27-4-1991');

// console.log(person1.getBirthYear);
// console.log(person2.getFullName);
// //שים לב, יש אפשרות להוציא מידע מרשימה כזו על ידי שימוש במתודה פרוטוטייפ
// Baba.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
// Baba.prototype.getFullName=function(){
//     return `${this.firstName} ${this.lastName}`;
// }
//ועכשיו מקבלים את אותה הוספת מתודה בלי שנראה בלוג המילה פונקציה
// ועכשיו לדרך העדכנית והרבה יותר יפה לכתוב את אותם פונקציות
// שיטת קלאס!
class Baba {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const citiz1 = new Baba('ChuChu', 'Naplem', '5-7-1999');
const citiz2 = new Baba('Bill', 'Noka', '24-6-1997');

// console.log(citiz1.getBirthYear());
console.log(citiz2.getFullName());

function addNum(num1=1, num2=1){
    console.log(num1 + num2);
}
//שים לב שהגדרתי במשתנים של הפונקציה מספר, כי ככה אין מצב שזה חוזר ריק ואם קוראים לפונקציה היא דורסת
addNum(5,78);

//פונקציות חץ
function sumNums(a,b){
    return a+b
}
//לעומת
let sumNums2 = (a,b) => a+b;

function isPositive(number){
    return number>=0;
}
//לעומת
let isPositive2 = number => number>=0;
//פונקציה של החזרת מספר רנדומלי
function returnNum(){
    return Math.random
}
//לעומת
let returnNum2 = (a) = Math.random;

document.addEventListener('click', function() {
    console.log('Click');
})
//לעומת
document.addEventListener('click' ,() => console.log('Click'))