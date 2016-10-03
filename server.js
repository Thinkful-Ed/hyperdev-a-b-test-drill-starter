'use strict';

// Solution to A/B test drill
// ==========================

const express = require('express');

const app = express();


// listen for requests :)
app.listen(process.env.PORT, () => console.log(`Your app is listening on port ${process.env.PORT}`));
