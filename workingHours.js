function workingHours(input){
    let hour = Number(input[0]);
    let day  = input[1];

    let isValid = (hour >= 10 && hour <= 18 && (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday"));

    

    if (!isValid){
        console.log("closed")
    }else{
        console.log("open");
    }


    // if (hour >= 10 && hour <= 18 && (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday")){
    //     console.log("open");
    // }else{
    //     console.log("closed");
    // }  става и по двата начина 
}
workingHours(["11","Sunday"]);