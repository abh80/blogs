# Blogs

A simple website for blogs and guides built using docusaurus.

# Contributing

If you want to add your own guide go to the `guides/` folder and make a suitable folder and write a `config.json` and one or more md files in there

Paste the following in `config.json` and replace with your choice -

```json
{
  "main": "MAIN File.md",
  "img": "some_image.png",
  "description": "A guide....",
  "name": "The main heading"
}
```
Now run `npm install` and the run `npm generate` this will generate required file and make a Pull Request afterwards!