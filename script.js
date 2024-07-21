document.addEventListener("DOMContentLoaded",function(){
    const imgCapura = document.querySelector(".img-captura")
    const btnExit = document.querySelector(".btn-exit")

    imgCapura.addEventListener("click",() => {
        imgCapura.classList.add("img-transition")
        btnExit.classList.add("exit")
    })
    btnExit.addEventListener("click",() => {
        imgCapura.classList.remove("img-transition")
        btnExit.classList.remove("exit")
    })
})