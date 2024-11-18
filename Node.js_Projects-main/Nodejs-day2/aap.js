const readline=require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("please enter your name:",(name)=>{
console.log("You have enter:",+(name));
rl.close();
})

rl.on('close',()=>{
    console.log("Interface is closed");
    process.exit(0);
})