// let btn = document.getElementById("btn1");

// Direct events 
// btn.onclick= ()=>{
//     console.log("you are clicked in js code")

//     let a = 25;
//     a++;
//     console.log(a)
// }



// --------------------------------------------------------------
// let btn = document.getElementById("btn1"); 

// addEvent listners method 
// btn.addEventListener("click", () =>{
//     console.log("btn was clicked /handler1")
// })

// btn.addEventListener("click", () =>{
//     console.log("btn was clicked /handler2")
// })

// const handler3 = () =>{
//     console.log("btn was clicked /handler3")
// }

// btn.addEventListener("click", handler3)

// btn.addEventListener("click", () =>{
//     console.log("btn was clicked /handler4")
// })


// btn.removeEventListener("click",handler3)





// --------------------------------------------------------

// let box = document.querySelector("div");
// box.onmouseover= ()=>{
//     console.log("You are inside div")
// }



// -----------------------------------------------------------------------------

let modeBtn = document.getElementById("mode");

let currMode = "light";

modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").classList.add("dark")
        document.querySelector("body").classList.remove("light")
    }else{
        currMode = "light"
        document.querySelector("body").classList.add("light")
        document.querySelector("body").classList.remove("darl")
    }
    console.log(currMode);
})