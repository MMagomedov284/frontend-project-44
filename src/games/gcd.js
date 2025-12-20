// алгоритм Евклида для вычисления НОД
export const nodAlgorithm = (num1, num2) =>{
    if(num1 <= 0 || num2 <= 0) {
        return false
    }

    while(num2 !== 0) {  
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}