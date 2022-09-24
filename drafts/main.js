// alert('Wasssssssssssssssssup???...');
console.log('Again - Wassup???...');
console.error('This is a great idea');
console.warn('Yabalulu Shambalulu');
let age = 39;
age = 67;
console.log(age);
const otherName = "Jerry";
const number = 54;
const isHeep = false;
const empty = null; //this is an empty variable. a null is just an empty varriable
const notLet = undefined;
let notConst; //שים לב - לט יכול להיות לא מוגדר אבל בקונסט צריך לכתוב לו - אתה לא מוגדר
console.log(typeof isHeep); // זאת פונקציה שבודקת סוג ופה בחרתי להדפיס את זה לקונסול
//concatanation - שרשור
console.log('My name is' + otherName + ' and my age is' + number);
console.log(`My name is ${otherName} + and my age is ${number}`);
const Hello = `My name is ${otherName} + and my age is ${number}`;
const ss = 'Jack Sparrow';
console.log(ss.length);
console.log(ss.toUpperCase());//שים לב שבגלל שזו מתודה צריך סוגריים - כי כל פונקציה צריכה סוגריים לפעול בתוכם, גם אם לא מכניסים שם נעלם
console.log(ss.substring(0,6).toLowerCase());
const digitsA = new Array(1,2,3,4,5,6,7,8,9);//כאן בנינו אריי עם קונסטרקטור - שים לב למילה ניו ואז לכך שכתבנו שזה אריי
const notDigits = ['Apples', 'Suckles', 'Dragons', 'Peaches', true, false, 109];// שני אלה בונים אריי וזו הדרך לבנות ישירות. שים לב שיש פה כמה סוגי משתנים
notDigits[8]='Goku';
notDigits.push('Beemer');// דחיפת עוד איבר לסוף הרשימה
notDigits.unshift('Vox');//דחיפת איבר לתחילת הרשימה
console.log(Array.isArray(notDigits));
const citizen = {
    firstName: 'Kack',
    lastName: 'Gool',
    age: 65,
    meals: ['hotdogs', 'eggs', 'cotton candy'],
    address:{
        street: 'schmeckel',
        num: 56,
        city: 'Louiville',
        state: 'AL'
    }
}
console.log(citizen.meals, citizen.age);
console.log(citizen.meals[2]);
console.log(citizen.address.state);
citizen.mail='juko@feget.it.il';
//אובייקט היינו חבילה של דברים שיש בפנים רכיבים שזה הפרופרטיס וגם פעולות שזה המתודות
const todos= [
    {
        id: 1,
        text:'scratch my back',
        isCompleted: true,
    },
    {
        id: 2,
        text:'sniffe and chill',
        isCompleted: false,
    },
    {
        id: 3,
        text:'give back some',
        isCompleted: true,
    }
];
const todosJSON= JSON.stringify(todos);//קובץ ג'ייסון זה הדרך שבה שולחים קוד לשרת. כאן אנחנו לוקחים את מה שבנינו והופכים אותו לטקסט ג'ייסון שאפשר לשלוח לשרת
console.log(todosJSON);

for(let i=0; i<=14; i++){
    console.log(`For Loop Number: ${i}`);
}
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}
//דרך הרבה יותר יפה:
for(let stam of todos){//בעצם הכנסנו את האריי לתוך לולאה שיש בה נעלם ואז הלולאה מחפשת רק את מה שאומרים לה
    console.log(stam.id);
}

//forEach, map, filter - לולאות ברמה גבוהה יותר שמתמודדות עם רשימה או אריי
todos.forEach(function(samSample){
    console.log(samSample.text);
    console.log('YeeeeeeeHaaaaaaa!');
});

// עכשיו מסתכלים על לולאה מפה
const todoTexting = todos.map(function(samSample){
    return samSample.text;
});
console.log(todoTexting);

//עכשיו מסתכלים על לולאת פילטר
const todoCompleted = todos.filter(function(samSample) {
    return samSample.isCompleted === true;
}).map(function(samSample){
    return samSample.text;
})// פה זה נעשה מסובך - בהתחלה מפעילים פילטר שמכניס לנעלם רק את איפה שבפועל יש ערך בוליאני של טרו ואז הוא מפעיל עוד פונקציה לחלץ מאותם חלקים את הטקסט שיש בתוכם - שים לב שמשתמשים באותו נעלם לשני הפונקציות כי בשפה הזאת אפשא לשחק עם נעלמים

console.log(todoCompleted);