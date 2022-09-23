const express = require('express');
const ExpressError = require('./errorHandler')

const app = express();


// function checkNums(arr) {
//     const notNums = nums.filter(function (num) {
//         if (isNaN(num)) {
//             return num;
//         }
//     })
// }

function checkNums(arr) {
    const notNums = arr.filter(item => typeof item !== 'number');
    return notNums;
}

function mean(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total / nums.length;
}


app.get("/mean", (req, res, next) => {
    try {
        const nums = req.query.nums;
        // const notNums = checkNums(nums);
        if (!nums) throw new ExpressError("nums are required", 400);
        // if (notNums) throw new ExpressError(`Invalid Number: ${notNums}`, 400)
        
        return res.json(mean(nums));
    } catch (err) {
        next(err);
    }
})

// const nums = [1, 2, "a", 5, "hi"];

// app.get("/mean", (req, res) => {
//     const notNums = checkNums(nums);
//     if (!nums) {
//         console.log('need numbers!')
//     }
//     if (notNums) {
//         console.log(`Invalid Number: ${notNums}`)
//     }
//     return res.send(mean(nums));
// })


// If no other route matches, respond with a 404
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e)
})


//Error Handler
app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let message = err.msg;

    //set the status and aler user
    return res.status(status).json({
        error: { message, status }
    });
});


app.listen(3000, () => {
    console.log("Server running on port 3000")
});