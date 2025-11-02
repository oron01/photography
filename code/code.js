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

let movePage = async () => {
    let getHTML = async (fileName) => {
        try {
            const res = await fetch(`${fileName}.html`)
            if (!res.ok) throw new Error('failed to fetch html')
            const html = await res.text()
        return html
        }
        catch (err) {console.log(err)}
    }
    let setHTML = (newHTML) => {
        let mainContainer = document.querySelector('.mainContainer')
        mainContainer.innerHTML = newHTML
    }
    let newHTML = await getHTML("book")
    setHTML(newHTML)
}


let navClickHandler = (e) => {
    let text = e.target.textContent
    let validText = ['Home','Portfolio','About','Services',"Book"]
    let setPageHighlighting = () => {
    if (validText.includes(text)) {
        navButs.forEach((but) => {
            if (but.classList.contains("currentPage")) {but.classList.remove("currentPage")}
        })
        let a = document.querySelector(`[data-pageBut='${text}']`)
        a.classList.add('currentPage')

    }}
    setPageHighlighting()
    movePage()

}

let navButs = document.querySelectorAll('li')
navButs.forEach(but => {
    but.addEventListener('click',navClickHandler)
    
});
