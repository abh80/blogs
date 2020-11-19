<img src = "https://getsharex.com/img/ShareX_Logo.png" width = "60px" height = "60px" alt = "sharex logo" class = "styledcontent"/>

Previously we have made upload part ! Now lets get how to authorize or get the access token

```js
app.get("/auth", (req, res) => {
  const token = jwt.sign({ name: "SOME_NAME" }, "secret");
  res.status(200).send(
    JSON.stringify({
      message: { token: token },
    })
  ); // sends token
});
```
> ⚠️ if you are replacing SOME_NAME make sure to replace it in `app.post("/upload"...` function

### Atlast try fetching the url and copy the token
