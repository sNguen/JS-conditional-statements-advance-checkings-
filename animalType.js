function animalType (input){
    let animal = input[0];

    if (animal === "dog"){
        console.log("mammal");
    }else if (animal === "crocodile" || animal === "tortoise" || animal === "snake" ){
        console.log("reptile");
    }else{
        console.log("unknown");
    }


}
animalType([""]);
// 1. dog -> mammal
// 2. crocodile, tortoise, snake -> reptile
// 3. others -> unknown