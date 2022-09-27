const ExpressError = require('./errorHandler')

/** Convert and validate an Array of strings to an array of numbers */
function convertNumsArray(stringsArr) {
    let res = [];
    for (let i = 0; i < stringsArr.length; i++) {
        let numVal = Number(stringsArr[i]);
        if (isNaN(numVal)) {
            throw new ExpressError(`"${stringsArr[i]}" is not a valid number`, 400);
        }
        res.push(numVal);
    }
    return res;
}


/** Create frequency counter from an array */
function countFrequency(arr) {
    return arr.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 1;
        } else {
            acc[curr] += 1;
        }
        return acc;
    }, {});
}


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
    nums.sort(function compareNumbers(a, b) {
        return a - b;
    });

    const midIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        //if array is an even length, avarage out the 2 middle numbers
        median = (nums[midIndex] + nums[midIndex - 1]) / 2;
    } else {
        median = nums[midIndex];
    }
    return median;
}


/**  Find the mode (most frequent) of numbers passed in an array */
function findMode(nums) {
    const freqCounter = countFrequency(nums);

    let count = 0;
    let mode;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            count = freqCounter[key];
            mode = key;
        }
    }
    return mode;
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


module.exports = {
    convertNumsArray,
    findMean,
    findMedian,
    findMode
}