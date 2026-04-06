// rock, paper, scissors: 
// array of r, p, s
const rps = document.querySelectorAll(".element")

// score
const score = document.querySelectorAll(".score")

//pick
const pickBtn = document.querySelector(".pick")

let choice = "";
rps.forEach(el=>{el.addEventListener("click", (e)=>{
        rps.forEach(el=>{el.classList.remove("active")})
        e.currentTarget.classList.add("active")
        choice = e.currentTarget.textContent
        // console.log(choice)
    })
})

pickBtn.addEventListener("click", ()=>{
    if (!choice == "") {
        play()
    }
})

let scoreYou = 0
let scoreComp = 0
function play(){
    const rand = Math.floor(Math.random() * 3)
    const compChoice = rps[rand].textContent
    console.log(`ch: ${choice}, cmCh: ${compChoice}`)
    // checking Winner
    if (choice === compChoice) {
        scoreYou++
        scoreComp++
        console.log("Draw!!")
    }
    if (choice == "Rock" && compChoice == "Paper") {
        scoreComp++;
        console.log(scoreComp)
    }
    if (choice == "Scissors" && compChoice == "Rock") {
        scoreComp++;
        console.log(scoreComp)
    }
    if (choice == "Paper" && compChoice == "Scissors") {
        scoreComp++;
        console.log(scoreComp)
    }
    if (choice == "Paper" && compChoice == "Rock") {
        scoreYou++;
        console.log(scoreYou)
    }
    if (choice == "Scissors" && compChoice == "Paper") {
        scoreYou++;
        console.log(scoreYou)
    }
    if (choice == "Rock" && compChoice == "Scissors") {
        scoreYou++;
        console.log(scoreYou)
    }
    score[0].textContent = scoreYou
    score[1].textContent = scoreComp
}    


// change color on hover:
rps.forEach(el=>{el.addEventListener("mouseover", ()=>{
    el.style.opacity = 0.9;
})
})
rps.forEach(el=>{el.addEventListener("mouseout", ()=>{
    el.style.opacity = 1;
})
})

pickBtn.addEventListener("mouseover", ()=>{
    pickBtn.style.opacity = 0.9;
})
pickBtn.addEventListener("mouseout", ()=>{
    pickBtn.style.opacity = 1;
})
