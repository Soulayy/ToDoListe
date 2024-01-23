let creat = document.querySelector("input")

let add = document.querySelector("button")

let showAll = document.querySelectorAll("button")[1]

let progress = document.querySelectorAll("button")[2]

let finish = document.querySelectorAll("button")[3]

let section2 = document.querySelector(".section2")


let list = document.createElement("div")

let divBtn = document.createElement("div")
    divBtn.setAttribute("class", "divBtn")

// let list = document.createElement("div")
list.setAttribute("class", "list")

let inputDiv = document.createElement("input")
    inputDiv.setAttribute("class", "inputDiv")
    list.appendChild(inputDiv)
    

let btn1 = document.createElement("button")
    btn1.setAttribute("class", "valid")
    btn1.setAttribute("status", "true")
    let textV = document.createTextNode("VALIDATE")
    btn1.appendChild(textV)

    divBtn.appendChild(btn1)


let btn2 = document.createElement("button")
    btn2.setAttribute("class", "modify")
    btn2.setAttribute("status", "true")
    let textM = document.createTextNode("MODIFY")
    btn2.appendChild(textM)   

    divBtn.appendChild(btn2)


let btn3 = document.createElement("button")
    btn3.setAttribute("class", "delete")
    btn3.setAttribute("status", "true")
    let textD = document.createTextNode("DELETE")
    btn3.appendChild(textD)   

    divBtn.appendChild(btn3)


let btn4 = document.createElement("button")
    btn4.setAttribute("class", "retour")
    let textR
    textR = document.createTextNode("RETOUR")
    btn4.appendChild(textR)

    list.appendChild(divBtn)
    
    // divBtn.appendChild(btn4)

    

    add.addEventListener("click", () => {

        if (creat.value) {
        
    let list = document.createElement("div")

let divBtn = document.createElement("div")
    divBtn.setAttribute("class", "divBtn")

// let list = document.createElement("div")
    list.setAttribute("class", "list inprogress")
    console.log(list);

let inputDiv = document.createElement("input")
    inputDiv.setAttribute("class", "inputDiv")
    list.appendChild(inputDiv)
    

let btn1 = document.createElement("button")
    btn1.setAttribute("class", "valid")
    btn1.setAttribute("status", "true")
    let textV = document.createTextNode("VALIDATE")
    btn1.appendChild(textV)

    divBtn.appendChild(btn1)


let btn2 = document.createElement("button")
    btn2.setAttribute("class", "modify")
    btn2.setAttribute("status", "true")
    let textM = document.createTextNode("MODIFY")
    btn2.appendChild(textM)   

    divBtn.appendChild(btn2)


let btn3 = document.createElement("button")
    btn3.setAttribute("class", "delete")
    btn3.setAttribute("status", "true")
    let textD = document.createTextNode("DELETE")
    btn3.appendChild(textD)   

    divBtn.appendChild(btn3)


let btn4 = document.createElement("button")
    btn4.setAttribute("class", "retour")
    let textR
    textR = document.createTextNode("RETOUR")
    btn4.appendChild(textR)

    list.appendChild(divBtn)

    inputDiv.value = creat.value

    section2.appendChild(list)

    btn1.addEventListener("click", () => {
        divBtn.appendChild(btn4)
        btn1.remove()
        divBtn.prepend(btn4)
        list.style.background = "#449545"
        list.classList.remove("inprogress")
        list.classList.add("finished")
    })
    btn4.addEventListener("click", () => {
        divBtn.appendChild(btn1)
        btn4.remove()
        divBtn.prepend(btn1)
        list.style.background = ""
        console.log(list);
        list.classList.remove("finished")
        list.classList.add("inprogress")
    })
    inputDiv.disabled = true
    btn2.addEventListener("click", () => {

        if (inputDiv.disabled == true) {
            inputDiv.disabled = false
            btn2.style.background ="black"
            btn2.style.color ="white"
            list.style.background ="white"
            inputDiv.style.color = "black"
        } else if (inputDiv.disabled == false) {
            inputDiv.disabled = true
            btn2.style.background =""
            btn2.style.color =""
            inputDiv.style.color = ""
            list.style.background =""
            inputDiv.style.color = ""
        }
    })

    btn3.addEventListener("click", () => {
        list.remove()
    })^

    finish.addEventListener("click", () => {
        if (list.classList.contains("finished")) {
            list.style.display = "flex"
        } else {
            list.style.display = "none"
        }
    })

    progress.addEventListener("click", () => {
        if (list.classList.contains("inprogress")) {
            list.style.display = "flex"
        } else {
            list.style.display = "none"
        }
    })

    showAll.addEventListener("click", () => {
        if (list.classList.contains("list")) {
            list.style.display = "flex"
        } else {
            list.style.display = "none"
        }
    })
    
    creat.value = ""

}
})




// let add = document.querySelector("button")

// let showAll = document.querySelectorAll("button")[1]

// let progress = document.querySelectorAll("button")[2]

// let finish = document.querySelectorAll("button")[3]
