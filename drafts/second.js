const s=50;

if (s==10){
    console.log('s equals 10');
} else if (s>10){
    console.log('s is greater than 10');
} else{
    console.log('s is less than 10');
}

const y=8;
const u=7;

if(y>3 && u>5){
    console.log('Y is greater than 3 or U is greater than 7');
}

const x=90;
const color= x>10 ? 'yellow' : 'purple';

switch(color){
    case 'purple':
        console.log('the color is purple');
        break;
    case 'yellow':
        console.log('the color is yellow');
        break;
    default:
        console.log('the color is not purple and not yellow!');
        break;
}