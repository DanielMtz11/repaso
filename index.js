//importar http y file sistem
const http = require("http");
const fs = require("fs/promises");
const path = require("path");


const app = http.createServer((requets, response)=>{
    response.end("servidor de repaso")
});

const examplePath = path.resolve("repaso.txt");
console.log(examplePath);//C:\Users\danie\Desktop\backend\repaso\repaso.txt


fs.readFile(examplePath, "utf8", (error, data) => {
    if (!error) return console.log(data)
        return console.log(error);
});


const read = (async()=>{
    try{
       const data = await fs.readFile(examplePath, "utf-8");
       console.log(data);
    }
    catch(error){
        console.log(error);
    }
})

read();

const PORT = 3001;

app.listen(PORT);

console.log(`puerto : ${PORT}`);