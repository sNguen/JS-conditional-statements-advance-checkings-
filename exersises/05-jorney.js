function jorney (input){
let budget = Number(input[0]);
let season = input[1];

let moneySpent = 0; 
let destination = '';
let holidayType = '';

switch (season){
    case 'summer':

        if (budget <= 100){
             destination = 'Bulgaria';
             holidayType = 'Camp'
             moneySpent = budget *= 0.3;
             console.log(`Somewhere in ${destination}`);
             console.log(`${holidayType} - ${moneySpent.toFixed(2)}`);
             }else if (budget <= 1000){
                destination = 'Balkans';
                holidayType = 'Camp'
                moneySpent = budget *= 0.4;
                console.log(`Somewhere in ${destination}`);
                console.log(`${holidayType} - ${moneySpent.toFixed(2)}`); 
             }else{
                destination = 'Europe';
                holidayType = 'Hotel';
                moneySpent = budget *= 0.9;
                console.log(`Somewhere in ${destination}`);
                console.log(`${holidayType} - ${moneySpent.toFixed(2)}`);
             }
        break;


    case 'winter':
        if (budget <= 100){
            destination = 'Bulgaria';
            holidayType = 'Hotel'
            moneySpent = budget *= 0.7;
            console.log(`Somewhere in ${destination}`);
            console.log(`${holidayType} - ${moneySpent.toFixed(2)}`);
            }else if (budget <= 1000){
                destination = 'Balkans';
                holidayType = 'Hotel'
                moneySpent = budget *= 0.8;
                console.log(`Somewhere in ${destination}`);
                console.log(`${holidayType} - ${moneySpent.toFixed(2)}`); 
             }else{
                destination = 'Europe';
                holidayType = 'Hotel';
                moneySpent = budget *= 0.9;
                console.log(`Somewhere in ${destination}`);
                console.log(`${holidayType} - ${moneySpent.toFixed(2)}`);
             }
        break;    
}
}
jorney(["1220", "winter"]);