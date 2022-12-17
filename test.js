// only testing purpose
function targetSum(array, target) {
     console.log({array, target});
     let i = 0;
     let j = array.length - 1;
     let total = 0;
     let subArray = [];

     while(i < j){
        if( total + array[i] <= target){
            total = total + array[i];
            subArray.push(array[i]);
        }

        if( total + array[j] <= target){
            total = total + array[j];
            subArray.push(array[j]);
        }

        i = i + 1;
        j = j - 1;
     }

     console.log({total, subArray});
     return target === total ? subArray : null

}

const arr = [12, 1, 61, 5, 9, 2];
const target = 24;

console.log(targetSum(arr.slice(1,3), target));