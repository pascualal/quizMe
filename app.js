let tamangSagot = ["C", "B", "B", "D"];
let form = document.querySelector(".quiz-form");
let result = document.querySelector(".result")
// let grade = document.querySelector("span")



// console.log(grade.innerHTML)
form.addEventListener("submit",e => {
    e.preventDefault();

    let score = 0;
    let userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    // check answers
    userAnswer.forEach((answer, index) => {
        if(answer === tamangSagot[index]){
            score += 25;
        } 
    });
    

  
    // grade.innerHTML = score+"%"
    result.classList.remove("d-none")
    scrollTo(0,0);

    let output = 0;
    let timer = setInterval(() => {
        result.querySelector("span").textContent = `${output}%`;
        if (output === score){
            clearInterval(timer)
        } else {
            output++;
        }
    }, 10);

    
});

//window object

