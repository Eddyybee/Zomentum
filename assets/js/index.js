const inputs = document.getElementsByTagName('input');
inputs[0].addEventListener('change', ()=> {
    console.log(inputs[0].value)
})
inputs[1].addEventListener('change', ()=> {
    console.log(inputs[1].value)
})


function submitForm() {
    console.log("hi")
    // if none of the forms have an empty value. alert success.
    if(!inputs[0].value === "" && !inputs[1].value === ""){
        alert('you have been signed in')
    }
}
