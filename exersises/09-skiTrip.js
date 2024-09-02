// вид помещение             по-малко от 10 дни          между 10 и 15 дни             повече от 15 дни 
// room for one person       не ползва намаление        не ползва намаление            не ползва намаление
// apartment                 30% от крайната цена       35% от крайната цена           50% от крайната цена
// president apartment       10% от крайната цена       15% от крайната цена           20% от крайната цен
function skiTrip(input){
let days = Number(input[0]);
let spaceType = input[1];
let feedback = input[2];

let nights = days - 1;
let price = 0;

switch(spaceType){
    case 'room for one person':
        price = nights * 18;
        break;
    case 'apartment':
        price = nights * 25;
        if (days <= 10){
            price *= 0.7;
        }else if (days <= 15){
            price *= 0.65;
        }else{
            price *= 0.5;
        }
        break;
    case 'president apartment':
        price = nights * 35;  
        if (days <= 10){
            price *= 0.9;
        }else if (days <= 15){
            price *= 0.85;
        }else{
            price *= 0.8;
        }
        break;      
}
if (feedback === 'positive'){
    price *= 1.25;
}else{
    price *= 0.9;
}
console.log(price.toFixed(2));
}
skiTrip(["14","apartment","positive"]);
// § "room for one person" – 18.00 лв за нощувка
// § "apartment" – 25.00 лв за нощувка
// § "president apartment" – 35.00 лв за нощувк