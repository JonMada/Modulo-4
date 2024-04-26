//La estructura 'for in' aplicada a una matriz
let nums = [1,2,3,4,5];

for (let num in nums) { //'num' no representa al número sino que toma el valor de cada índice de la matriz de números
    console.log(nums[num]);
}

/*Salida:
1
2
3
4
5 */