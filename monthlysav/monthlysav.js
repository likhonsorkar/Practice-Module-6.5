const monthlySavings =(array,cost) =>{
    if(typeof(array) != "object" || typeof(cost) != "number" ){
        return "Invalid";
    }
    var sum = 0;
    var income = 0;
    for(var i=0; i<array.length; i++){
        income = array[i];
        if(array[i]>=3000){
            tax = income * 0.2;
            income = income-tax;
        }
        sum += income;
    }
    var sav = sum - cost;
    if (sav<0){
        return "Earn More";
    }else{
        return sav;
    }
}

console.log(monthlySavings([1000, 2000, 3000], 5400)); 
console.log(monthlySavings([1000,2000,2500], 5000));  
console.log(monthlySavings([900,2700,3400], 10000));
console.log(monthlySavings(100, [900,2700,3400]));
