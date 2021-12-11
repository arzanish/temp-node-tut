const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8"); // default encoding is utf-8

const second = readFileSync("./content/second.txt", "utf-8");
console.log(first);
console.log(second);

writeFileSync(
  "./content/result-sync.txt",
  `This is the result: ${first},${second}`
); // if file is not there , then NODE will create one. If file is present ,then NODE by default will override its content

// to append use {flag:'a'}
writeFileSync(
  "./content/result-sync.txt",
  `This is the result: ${first},${second}`,
  { flag: "a" }
);
