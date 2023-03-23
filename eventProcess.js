const Emitter = require("events");
let emitter = new Emitter();
let eventName = "greet";
function showGreetMessage(data, user){
    console.log(`${user} message: ${data}`);
}
emitter.on(eventName, ()=>{
    console.log("Hello world of event in NodeJS!");
});
emitter.on(eventName, ()=>{
    console.log("Тепер ми можемо створювати події у NodeJS!!");
});
emitter.on(eventName, showGreetMessage);
emitter.on("finish", ()=>{
    console.log("Finishing our work...");
})
emitter.emit(eventName, "My greetings to you!", "Serhii");
emitter.off(eventName, showGreetMessage);
console.log("-------------");
emitter.emit(eventName);
emitter.emit("finish");

