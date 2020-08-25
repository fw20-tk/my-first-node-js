'use strict';//jsをstrictモードで利用する
//コマンドライン引数が指定されていればその値、そうでなければ0を変数にnumberに代入
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);