const express = require('express');
const ExpressError = require('./expressError')

const app = express();



app.listen(3000, () => {
    console.log("Server running on port 3000")
});