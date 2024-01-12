
let randomletterbtn =document.getElementById("randomletter")
let randomletter=document.getElementById("generaterandomletter")
randomletterbtn.addEventListener("click", function() {
    let x = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    let randomltr=String.fromCharCode(x);
    randomletter.innerHTML=randomltr;
})
const p=["a" , "b" ,  "c"  ,  "d" ,"e" ,  "f" , "g" ]
p.forEach((x => {
    console.log(x)

}))
