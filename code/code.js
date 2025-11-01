let meSection = document.querySelector(".meSection")
meSection.style.backgroundImage = "url('images/me.jpg')"
meSection.style.backgroundSize = 'cover'
meSection.style.backgroundPosition = 'center 30%'

let imageSetting = (elem,fileName) => {
elem.style.backgroundImage = `url('images/${fileName}.jpg')`
elem.style.backgroundSize = 'cover'
elem.style.backgroundPosition = 'center'
}

let portraitsView = document.querySelector(".portraitsView") 
let corporateView = document.querySelector(".corporateView") 
let eventView = document.querySelector(".eventView") 

imageSetting(portraitsView,"portraits")
imageSetting(corporateView,"pro")
imageSetting(eventView,"events")

let currentPage = "home"
// if (currentPage = "home") {
//     let a = document.querySelector("[data-pageBut='home']")
//     a.classList.add(currentPage)
// }

let navClickHandler = (e) => {
    let text = e.target.textContent
    let validText = ['Home','Portfolio','About','Services',"Book"]
    if (validText.includes(text)) {
        navButs.forEach((but) => {
            if (but.classList.contains("currentPage")) {but.classList.remove("currentPage")}
        })
        let a = document.querySelector(`[data-pageBut='${text}']`)
        a.classList.add('currentPage')

    }
}

let navButs = document.querySelectorAll('li')
navButs.forEach(but => {
    but.addEventListener('click',navClickHandler)
    
});