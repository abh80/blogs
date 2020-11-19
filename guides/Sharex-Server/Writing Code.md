<img src = "https://getsharex.com/img/ShareX_Logo.png" width = "60px" height = "60px" alt = "sharex logo" class = "styledcontent"/>

Previously We have created an directory and installed all the required files , Now its time to write some codes !

## Importing Depencies
Before we start lets make a file named `index.js` and add all the required dependencies.
```js
const jwt = require("jsonwebtoken"),
express = require("express"),
bodyParser = require("body-parser"),
createHash = require("hash-generator"),
fileUploader = require("express-fileupload")
```