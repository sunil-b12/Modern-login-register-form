const create = document.querySelector(".create")
const signIn = document.querySelector(".sign-in")
const loginForm = document.querySelector(".login-form")
const frontWheel = document.querySelector(".login-form img.wheel")
const backWheel = document.querySelector(".login-form > div:nth-child(1) > div > img:nth-child(3)")

create.addEventListener('click', ()=>{
    loginForm.classList.toggle("left")
    frontWheel.classList.add("thing-to-spin")
    backWheel.classList.add("thing-to-spin")
})


signIn.addEventListener('click', ()=>{
    loginForm.classList.toggle("right")

})

 
