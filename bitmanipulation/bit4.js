/**
 * Binary Maniplation:-
 * check given number of power of two or not
 */

function countSetBits(n){
    let count = 0;
    while((n>0)){
     count++;
     n = n&(n-1);
    }
    return count;
}
function checkIsPowerOfTwo_1(n){
    /**
     * This function is used to find given number is of power of two or not
     * but it takes help of another function in order to count number of 
     * bits.
     */
    if(n<0)
    return false;
    const cnt = countSetBits(n);
    if(cnt===1)
    return true;
    else 
    return false;
}
function checkIsPowerOfTwo_2(n){
    /**
     * This is function is used to count a given numebr is power of two or not
     * but it does not takes any help of function in order to count number of 
     * bits.
     * This is best one in comparison to above one.
     */
    if(n<0)
    return false;
    const rst = n&(n-1);
    if(rst===0)
    return true;
    else 
    return false;
}
// console.log(countSetBits(10));
console.log(checkIsPowerOfTwo_2(3));