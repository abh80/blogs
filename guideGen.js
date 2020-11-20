//Any manual modifying to this file will not be accepted

/*
* MIT License

* Copyright (c) 2020 Stars Tracker
      
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const fs = require("fs");
const chalk = require("chalk");
const { join } = require("path");
const dirs = fs.readdirSync(__dirname + "/guides");
const arr = [];
let sideBar = [];
console.log(chalk.blue("Please wait Generating required files"));
function generateError() {
  console.log(chalk.red("Aborting file generation \nPlease don't commit"));
  process.exit(0);
}
dirs.forEach((dir) => {
  const configExists = fs.existsSync(
    __dirname + "/guides/" + dir + "/config.json"
  );
  if (!configExists) {
    console.log(
      chalk.red("No config file at : " + join(__dirname, "guides", dir))
    );
    generateError();
  }
  const { main, img, description, name } = require("./guides/" +
    dir +
    "/config.json");
  if (!main || !img || !description || !name) {
    console.log(
      chalk.red(
        "No Image, description , name or Main file was provided \nError At : " +
          join(__dirname, "guides", dir, "config.json")
      )
    );
    generateError();
  }
  const Imageexists = fs.existsSync(
    join(__dirname, "static", "img", "covers", img)
  );
  if (!Imageexists) {
    console.log(
      chalk.red(
        "Image File : " +
          join(__dirname, "static", "img", "covers", img) +
          " Does not exist!"
      )
    );
    generateError();
  }
  arr.push({
    name: name,
    desc: description,
    url: `/${dir}/${encodeURIComponent(main.split(".")[0])}`,
    img: `img/covers/${img}`,
  });
  let c = {
    type: "category",
    label: name,
    items: [],
  };
  let files = fs.readdirSync("./guides/" + dir);
  if (!files.length) {
    console.log(
      chalk.red(
        "\nNo md file(s) in the dir : " + join(__dirname + "guides" + dir)
      )
    );
    generateError();
  }
  files = files.filter((file) => file.endsWith(".md"));
  for (let x = 0; x < files.length; x++) {
    c.items.push(dir + "/" + files[x].split(".")[0]);
  }
  sideBar.push(c);
});
console.log(chalk.blue("\nTrying to write Generated files"));
setTimeout(() => {
  try {
    fs.writeFileSync("./src/pages/guides/guides.json", JSON.stringify(arr));
    const stream = fs.createWriteStream("./sidebarGuides.js");
    stream.once("open", () => {
      stream.write(
        "//This file is auto Generated, any manual modifying to this file will not be accepted"
      );
      stream.write(`\n\n
/*
* MIT License

* Copyright (c) 2020 Stars Tracker
      
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/`);
      stream.write("\n\nmodule.exports = {\n");
      stream.write("Guides :");
      stream.write(JSON.stringify(sideBar));
      stream.write("\n}");
    });
  } catch (e) {
    console.error(e);
    generateError();
  }
  console.log(
    chalk.green("\nSuccesfully wrote new files\n\nHappy Contributing!")
  );
}, 2000);
