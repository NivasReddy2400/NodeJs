// const add = require('./add.js');
// const math = require('./add.js');
// const SuperHero = require("./super-hero");
// const superhero = require('./super-hero');
// const superman = require('./super-hero');
// console.log('hello');
// const sum = add(2,3)
// console.log(sum)

// const {add,sub} = math

// ((message) => {
//     console.log(message+' superman')
// })('hello');

// ((message) => {
//     console.log(message+' batman')
// })('hey');


// console.log(superhero.getName());
// superhero.setName('Superman');
// console.log(superhero.getName());


// console.log(superman.getName());

// const batman = new SuperHero("Batman");
// const superman = new SuperHero("Superman");

// console.log(batman.getName());
// console.log(superman.getName());

// console.log(add(2,3))
// console.log(sub(2,3))


// inbuilt modules;
// const path = require("node:path");

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));


// console.log(path.extname(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.parse(__filename));
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./img/img.jpg"));

// console.log(path.join("folder1","index","file1"));
// console.log(path.join("/folder1","//index","../file1"));

//console.log(path.resolve("Folder1","Folder2"))
//console.log(path.parse(__filename).name)
// console.log(path.resolve("//Folder1","Folder2","../main.js"))
// console.log(path.join("Folder1","//Folder2","../main.js"))


// event module

// const EventEmiiter = require("node:events")

// const emitter = new EventEmiiter()

// console.log("first");
// emitter.on("order",(size,topping)=>{
//     console.log(`order recived:A ${size} Pizza with ${topping} topping`);
// })
// console.log("second");
// emitter.emit("order","medium","mozarella")
// console.log("third");

// const PizzaShop = require("./PizzaShop");

// const pizza = new PizzaShop();

// pizza.on("order",(size,topping) => {
//     console.log(`order recived with size:${size} and toppings:${topping}`)
// });

// pizza.order("medium","tomato");
// pizza.display();

// fs module

// const fs =    require("node:fs");
// const { connect } = require("node:http2");

// const content = fs.readFileSync("./text.txt","utf-8")
// console.log(content);

// fs.readFile("./text.txt","utf-8",(error,data) => {
//     console.log(data)
// })
// console.log("third");

// fs.writeFileSync("./text.txt","greetings");

// fs.writeFile("./text.txt","hellooooo from  asssssynchronoussssssssss",{flag:"a+"},(error,data) => {
//     if(error){
//         console.log(error);
//     }
// })

// const fs = require("node:fs")

// const readableStream = fs.createReadStream("./text.txt",{
//     encoding:"utf-8",
//     highWaterMark:4
// })

// const writeableStream = fs.createWriteStream("./text2.txt")

// readableStream.on("data",(chunk)=>{
//     writeableStream.write(chunk);
//     console.log(chunk);
// })


// const readablestream = fs.createReadStream("./text.txt",{
//     encoding:"utf-8"
// })

// const writeableStream = fs.createWriteStream("./text2.txt",)

// readablestream.pipe(writeableStream)

// readablestream.on("data",(chunk)=>{
//     writeableStream.write(chunk)
// })

//http module

const http = require("node:http");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("helloooo")
});

server.listen(3000,()=>{
    console.log("running on 3000");
});

