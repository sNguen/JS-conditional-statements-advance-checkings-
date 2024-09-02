function newHouse (input){
let flower = input[0];
let numberFlower = Number(input[1]);
let budget = Number(input[2]);

let flowerPrice = 0;

switch(flower){
    case "Roses":
        flowerPrice = numberFlower * 5;

        if (numberFlower > 80 ){
          flowerPrice *= 0.9;

        }
        break;
    case  "Dahlias":
        flowerPrice = numberFlower * 3.80;
        
        if (numberFlower > 90){
           flowerPrice *= 0.85;
        }
        break;
    case  "Tulips":
        flowerPrice = numberFlower * 2.80;

        if (numberFlower > 80 && flower === "Tulips"){
             flowerPrice *= 0.85;
             }

        break;
    case  "Narcissus":
        flowerPrice = numberFlower * 3;

        if (numberFlower < 120 && flower === "Narcissus"){
                flowerPrice *= 1.15;
        }

        break;
    case   "Gladiolus":
        flowerPrice = numberFlower * 2.50;

        if (numberFlower < 80 && flower === "Gladiolus"){
               flowerPrice *= 1.20;
        }

        break;         
}
// if (numberFlower > 80 && flower === "Roses"){
//     flowerPrice *= 0.9;
// }else if (numberFlower > 90 && flower === "Dahlias"){
//     flowerPrice *= 0.85;
// }else if (numberFlower > 80 && flower === "Tulips"){
//     flowerPrice *= 0.85;
// }else if (numberFlower < 120 && flower === "Narcissus"){
//     flowerPrice *= 1.15;
// }else if (numberFlower < 80 && flower === "Gladiolus"){
//     flowerPrice *= 1.20;
// }
if (budget >= flowerPrice){
    let moneyLeft = budget - flowerPrice;
    console.log(`Hey, you have a great garden with ${numberFlower} ${flower} and ${moneyLeft.toFixed(2)} leva left.`)
}else{
    let moneyNeeded = flowerPrice - budget;
    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
}
}
newHouse(["Roses","55","250"]);
//"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus