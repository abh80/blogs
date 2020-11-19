<img src = "https://getsharex.com/img/ShareX_Logo.png" width = "60px" height = "60px" alt = "sharex logo" class = "styledcontent"/>

Previously We have created an directory and installed all the required files , Now its time to write some codes !

## Importing Depencies

Before we start lets make a file named `index.js` and add all the required dependencies.

```js
const jwt = require("jsonwebtoken"),
  express = require("express"),
  bodyParser = require("body-parser"),
  createHash = require("hash-generator"),
  fileUploader = require("express-fileupload"),
  fs = require("fs");
```

Lets make a server !

```js
const app = express();
app.listen(process.env.PORT ? process.env.PORT : 3012);
```

Now the server is running !
Lets use the body parsers -

```js
app.use(bodyParser.json()) //to parse jsons

app.use(bodyParser..urlencoded({
  extended: true
}))

app.use(fileUpload({
  safeFileNames: true,
  preserveExtension: true
})) // handling file uploads

app.use("/files",express.static("./cdn")) // this part will serve all your files in `cdn` folder to `files/` endpoint

```

Thats it lets try upload!

```js
app.post("/upload", (req, res) => {
  //if token is not provided
  if (!req.body.token) {
    res.status(401).send(
      JSON.stringify({
        error: {
          message: "No access token was Posted",
        },
      })
    );

    return;
  }
  try {
    //decoding token
    var decoded = jwt.verify(req.body.token, "secret");
    if (decoded.name !== "SOME_NAME")
      return res
        .status(401)
        .send(JSON.stringify({ error: { message: "Invalid token" } }));
  } catch {
    res
      .status(401)
      .send(JSON.stringify({ error: { message: "Invalid token" } }));
  }
  //if no file was uploaded
  if (!req.files.file) {
    res.status(415).send(
      JSON.stringify({
        error: {
          message: "No file was uploaded",
        },
      })
    );
    return;
  }
  res.status(200).send(
    JSON.stringify({
      file: {
        url: "https://" + req.headers["host"] + "/files/" + hash + "." + ext,
        delete_url:
          "https://" +
          req.headers["host"] +
          "/delete?file=" +
          hash +
          "." +
          ext +
          "&token=" +
          req.body.token,
      },
    })
  );
}); //gets a POST request
```
Thats 50 % done , Congrats !
