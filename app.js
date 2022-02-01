let text = document.getElementById("text")
const btnTMa = document.getElementById("btnTMa")
const btnTMi = document.getElementById("btnTMi")
const btnIMa = document.getElementById("btnIMa")
const btnClear = document.getElementById("btnClear")

btnTMa.addEventListener("click", allCaps)
btnTMi.addEventListener("click", allLowercase)
btnIMa.addEventListener("click", capitalInitial)
btnClear.addEventListener("click", allClear)

function allCaps() {
    let textTwo = text.value
    textTwo = textTwo.toUpperCase()
    text.value = textTwo
}

function allLowercase() {
    let textTwo = text.value
    textTwo = textTwo.toLowerCase()
    text.value = textTwo
}

function capitalInitial() {
    let textTwo = text.value
    //textTwo = textTwo.charAt(0).toUpperCase()+textTwo.slice(1)
    textTwo = textTwo.replace(/\b\w/g, textTransform => textTransform.toUpperCase())
    text.value = textTwo
}

function allClear() {
    text.value = ''
}