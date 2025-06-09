let numbers = [14, 3, 19, 7, 1, 20, 4, 10, 8, 13, 2, 5, 6, 15, 9, 11, 17, 18, 12, 16];
console.log(numbers);
for (let i=0; i<numbers.length; i++){
    
    for (let j=0; j<numbers.length; j++){
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log(numbers);