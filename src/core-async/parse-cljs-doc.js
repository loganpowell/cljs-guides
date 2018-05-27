// const Parser = require("simple-text-parser");
// const parser = new Parser();
const parse = require("@mona/parse")
const fs = require("fs")
let cljsCoreAsyncDocs = fs.readFileSync("./src/core-async/cljs-ca-docs.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("OK: ")
  return data
})

let parseDoc = (text) => {
  mona.parse(line, text)
}

let line = () => mona.split(token(), string("(defn"))

parseDoc(cljsCoreAsyncDocs) /*?*/
