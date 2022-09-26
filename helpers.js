/** Convert and validate an Array of strings to an array of numbers */
function convertNumsArray(stringsArr) {
    let res = [];
    for (let i = 0; i < stringsArr.length; i++) {
        let numVal = Number(stringsArr[i]);

        if (isNaN(numVal)) {
            return new Error(`"${stringsArr[i]}" is not a valid number`);
        }
        res.push(numVal);
    }
    return res;
}


/** Create frequency counter from an array */
function freqCounter(arr) {
    return arr.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 1
        } else {
            acc[curr] += 1
        }
        return acc
    }, {})
}


// function checkNums(arr) {
//     const notNums = nums.filter(function (num) {
//         if (isNaN(num)) {
//             return num;
//         }
//     })
// }

// function checkNums(arr) {
//     const notNums = arr.filter(item => typeof item !== 'number');
//     return notNums;
// }



/**  Find the mean (avaerage) of numbers passed in an array */
function findMean(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total / nums.length;
}


/**  Find the median (midpoint) of numbers passed in an array */
function findMedian(nums) {

}



/**  Find the mode (most frequesnt) of numbers passed in an array */
function findMode(nums) {
    
}