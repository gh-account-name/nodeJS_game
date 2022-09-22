const readlineSync=require('readline-sync');
const numsAreRepeat = function(str){
    for (i of str){
        if (str.split(i).length - 1 > 1){
            return true
        }
    }
    return false
}
const cowsAndBulls = function(imagNum, tryNum, n_digit = 4){
    imagNum = String(imagNum);
    tryNum = String(tryNum);
    if (typeof(n_digit)!='number' || n_digit%1 != 0){
        console.log('Разрядность указывается целыми числами')
        return -1;
    }
    if (n_digit<2 || n_digit>9) {
        console.log('Число должно иметь от 2-х до 9-ти разрядов');
        return -1
    }

    if (!Boolean(Number(tryNum)) || !Boolean(Number(imagNum)) || imagNum.charAt(0)=='0' || imagNum.charAt(0)=='0'){
        console.log('Вы ввели не число');
        return -1;
    }

    if (imagNum.includes('.') || tryNum.includes('.')){
        console.log('Числа должны быть целыми');
        return -1;
    }

    if (imagNum.length != n_digit || tryNum.length != n_digit){
        console.log(`Числа должны быть ${n_digit}-значными`);
        return -1;
    }
    
    if (numsAreRepeat(imagNum) || numsAreRepeat(tryNum)){
        console.log('Цифры в числе не должны повторяться');
        return -1;
    }

    if (tryNum == imagNum){
        console.log('Вы выиграли!');
        return 1;
    }

    let cows = 0;
    let bulls = 0;
    for (let i = 0; i<n_digit; i++){
        for (let j = 0; j<n_digit; j++){
            if (imagNum[i] == tryNum[j]){
                cows++;
                if (i == j){
                    bulls++;
                    cows--;
                }
            }
        }
    }
    console.log(`Число быков равно: ${bulls}\nЧисло коров равно: ${cows}`);
    return 1;
}
cowsAndBulls(readlineSync.question('Загаданное число:'), readlineSync.question('Предполагаемое число:'));
module.exports = cowsAndBulls;