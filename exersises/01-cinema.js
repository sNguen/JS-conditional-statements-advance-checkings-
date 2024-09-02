function cinema (input){
let projectionType = input[0]
let r = Number(input[1]);
let c = Number(input[2]);

let tickets = r * c;
let income = 0;

if (projectionType === 'Premiere'){
    income = tickets * 12;
}else if(projectionType === 'Normal'){
    income = tickets * 7.5;
}else if(projectionType === 'Discount'){
    income = tickets * 5;
}
console.log(`${income.toFixed(2)} leva.`);
}
cinema(["Premiere","10","12"]);