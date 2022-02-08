
console.log("Hello 😉 World");
console.log(process.platform);


//sync and Async reading

// const{readFile,readFileSync}=require('fs');
// const txt=readFileSync('./hello.txt','utf-8');
// const txt1=readFile('./hello.txt','utf-8',(err,txt)=>{
//     console.log(txt);
// });
// console.log(txt);
// console.log("do this ASAP")


// promises reading

// const{readFile} =require('fs').promises;
// async function hello()  {
//     console.log(await readFile('./hello.txt','utf-8'));
// }
// hello();



const myModule=require('./myModule');
console.log(myModule);