// Function

let counter = 0
let counterDOM = document.querySelector('#counter')
let arttirDOM = document.querySelector('#arttir')
let azaltDOM = document.querySelector('#azalt')



counterDOM.innerHTML = counter

arttirDOM.addEventListener("click", clickEvent)
azaltDOM.addEventListener("click", clickEvent)





function clickEvent (){
    console.log(this.id)
    if(this.id =="arttir") {
        counterDOM.innerHTML = counter += 1
    } else {
        counterDOM.innerHTML = counter -= 1    
    }
}
