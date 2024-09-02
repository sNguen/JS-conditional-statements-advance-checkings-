function tradeCommissions (input){
    let city = input[0];
    let sells = Number(input[1]);

    let commission = 0;
    
    if (sells < 0) {
        console.log('error');
        return;
    }


    switch (city){
        case 'Sofia':
            if (sells >= 0  && sells <= 500){
                commission = sells *  0.05; 
            }else if (sells > 500  && sells <= 1000){
                commission = sells *  0.07;
            }else if (sells > 1000  && sells <= 10000){
                commission = sells * 0.08;
            }else if (sells > 10000){
                commission = sells * 0.12;
            }else{
                console.log('Error')
            }
            console.log(commission.toFixed(2));
            break;
        case 'Varna':
            if (sells >= 0  && sells <= 500){
                commission = sells * 0.045; 
            }else if (sells > 500  && sells <= 1000){
                commission = sells  * 0.075;
            }else if (sells > 1000  && sells <= 10000){
                commission = sells *  0.1;
            }else if (sells > 10000){
                commission = sells * 0.13;
            }else{
                console.log('Error')
            }
            console.log(commission.toFixed(2));
            break;   
             
        case 'Plovdiv':
                if (sells >= 0 &&sells <= 500){
                    commission = sells * 0.055; 
                }else if (sells > 500  && sells <= 1000){
                    commission = sells * 0.08;
                }else if (sells > 1000  && sells <= 10000){
                    commission = sells * 0.12;
                }else if (sells > 10000){
                    commission = sells * 0.145;
                }else{
                    console.log('Error');
                }
                console.log(commission.toFixed(2));
                break;   
                default: console.log('error');              
    }

    
}

tradeCommissions(["Sofia", "1500"]);