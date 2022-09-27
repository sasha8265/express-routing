const express = require('express');
const ExpressError = require('./errorHandler')
const { convertNumsArray, findMean, findMedian, findMode } = require('./helpers');
const app = express();





app.get("/mean", (req, res, next) => {
    try {
        const nums = req.query.nums;
        if (!nums) throw new ExpressError("nums are required", 400);
        const numsArr = convertNumsArray(nums.split(","))
        const mean = findMean(numsArr);

        res.send({
            operation: "mean",
            value: mean
        })        
        
    } catch (err) {
        next(err);
    }
})


app.get("/median", (req, res, next) => {
    try {
        const nums = req.query.nums;
        if (!nums) throw new ExpressError("nums are required", 400);
        const numsArr = convertNumsArray(nums.split(","));
        const median = findMedian(numsArr)

        res.send({
            operation: "median",
            value: median
        })

    } catch (err) {
        next(err);
    }
})


app.get("/mode", (req, res, next) => {
    try {
        const nums = req.query.nums;
        if (!nums) throw new ExpressError("nums are required", 400);
        const numsArr = convertNumsArray(nums.split(","));
        const mode = findMode(numsArr);

        res.send({
            operation: "mode",
            value: mode
        })
    } catch (err) {
        next(err);
    }
})


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