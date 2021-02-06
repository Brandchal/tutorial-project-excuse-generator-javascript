window.onload =function () {


let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


let a = who[(Math.floor((Math.random() * who.length)))];
let b = what[(Math.floor((Math.random() * what.length)))];
let c = when[(Math.floor((Math.random() * when.length)))];


let ejemplo = a+" "+b+" "+c;

document.querySelector ("#text").innerHTML = ejemplo; 

}