<img src = "https://getsharex.com/img/ShareX_Logo.png" width = "60px" height = "60px" alt = "sharex logo" class = "styledcontent"/>

In this Guide I will be showing you how to make custom `Share X` server using express js.

## Initiating the Project
Share X servers are great they can be used to host files on your website!

So lets make one ? Follow the steps below -

- Make a suitable directory
```bash
mkdir sharex-server
```
- Open the new directory
```bash
cd sharex-server
```
- Init the project
```bash npm2yarn
npm init
```
- Install the required dependencies
```bash npm2yarn
npm install jsonwebtoken express body-parser hash-generator express-fileupload
```

### Dependencies and their Usage
- `express` for HTTP utility methods
- `jsonwebtoken` to generate tokens to authorize requests
- `body-parser` an express middleware to parse request body
- `hash-generator` to generate hash , so that each file has an unique name
- `express-fileupload` an express middleware to handle file uploads

#### Project initiated !
