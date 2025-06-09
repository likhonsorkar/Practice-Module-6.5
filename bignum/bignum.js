var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var bignumber = numbers[0];

for(var i=0; i<numbers.length; i++){
    element = numbers[i];
    if(bignumber<element){
        bignumber=element
    }
}

console.log(bignumber);