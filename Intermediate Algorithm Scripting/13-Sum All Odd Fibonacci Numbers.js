function sumFibs(num) {
    var Number1 = 0;
    var Number2 = 1;
    var result = 0;
    while (Number2 <= num) {
        if (Number2 % 2 !== 0) {
            result += Number2;
        }

        Number2 += Number1;
        Number1 = Number2 - Number1;
    }

    return result;
}

// test here
sumFibs(4);
