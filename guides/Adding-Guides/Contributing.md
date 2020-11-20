In this guide I will show you how to contribute to this repo and add your guides!

## Getting Started
Lets start with cloning this website - 

### Cloning
```bash 
git clone https://github.com/abh80/blogs.git
```
```bash
cd blogs
```

### Installing Dependencies
```bash npm2yarn
npm install
```
Once complete all the required dependencies will be added.

## Adding your own guide
Make a directory in the `guides` folder at the root of the website
and create a `config.json` file and paste the following -
```json
{
  "main": "MAIN_FILE.md",
  "img": "YOUR_IMAGE.png",
  "description": "Your description",
  "name": "A good name for your guide",
  "sidebar": []
}
```
Inside the sidebar add your files in the way you want to show your viewers

> Images should be placed inside `static/img/covers` directory.

Write you `.md` files 

## Generating Config
Once you have done writing your guide , run the following in your bash -
```bash npm2yarn
npm run generate
```

> Note - Commit only if a green line is displaced saying `Happy Contributing`

## Make a pull request
At last create a pull request [here](https://github.com/abh80/blogs)

## Example 
If you want a example refer to this [guide](https://github.com/abh80/blogs/tree/master/guides/Adding-Guides)

## Conclusion
Thanks you for reading this and happy contributing!