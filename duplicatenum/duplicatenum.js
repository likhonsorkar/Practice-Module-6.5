var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var uniqueNumbers = [];

for(var i=0; i<numbers.length; i++){
    element = numbers[i];
    var check = false;
    for(j = 0; j<uniqueNumbers.length;j++){
        if(uniqueNumbers[j]== element ){
            check = true;
            break;
        }
    }
    if(!check){
        uniqueNumbers.push(element)
    }
}

console.log(uniqueNumbers)