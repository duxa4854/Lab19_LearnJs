for (let i = 0; i < 5; i++){
    console.log(i);
}

let count = 0;

while (count < 3){
    console.log("Count:", count);
    count++;
}

let doValue = 0;
do{
    console.log("Value:",doValue);
    doValue++;
} while (doValue <3);

for (let i = 0; i < 10; i++){
    if (i === 5){
        break;
    }
    console.log(i);
}

for (let i; i<= 3; i++){
    for (let j = 1; j <= 3; j++){
        console.log(`i = ${i}, j = ${j}`);
    }
}