let setMainPage = () => {

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

let ctaBut = document.querySelector('.cta')
ctaBut.addEventListener("click", () => {movePage("services")
    setPageHighlighting("Services")
})

}
setMainPage()
// if (currentPage = "home") {
//     let a = document.querySelector("[data-pageBut='home']")
//     a.classList.add(currentPage)
// }

let movePage = async (pageName) => {
    let getHTML = async (fileName) => {
        try {
            const res = await fetch(`${fileName}.html`)
            if (!res.ok) throw new Error('failed to fetch html')
            let html = await res.text()
        if (fileName == "index") {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html,'text/html')
            desiredIndexSegment = doc.querySelector('.mainContainer')
            html = desiredIndexSegment.innerHTML
        }
        return html
        }
        catch (err) {console.log(err)}
    }
    let setHTML = (newHTML) => {
        let mainContainer = document.querySelector('.mainContainer')
        mainContainer.innerHTML = newHTML
    }
    let getCode = async (pageName) => {
        if (pageName !== "index")
        try {
            const res = await fetch(`code/${pageName}.js`)
            if (!res.ok) throw new Error('no code')
                let code = res.text()
            return code
        } catch (err) {console.warn(err)}
    }
    let newHTML = await getHTML(pageName)
    setHTML(newHTML)
    eval(await getCode(pageName))
}

    let setPageHighlighting = (page) => {
        let navButs = document.querySelectorAll("li")
        navButs.forEach((but) => {
            if (but.classList.contains("currentPage")) {but.classList.remove("currentPage")}
        })
        let a = document.querySelector(`[data-pageBut='${page}']`)
        a.classList.add('currentPage')
}

let navClickHandler = async (e) => {
    let text = e.target.textContent
    let validText = ['Home','Portfolio','About','Services',"Contact"]
    if (validText.includes(text)) {
        setPageHighlighting(text)
    }
    if (text == 'Home') text = "index"
    await movePage(text.toLowerCase())
    if (text == 'index') setMainPage()

}

let navButs = document.querySelectorAll('li')
navButs.forEach(but => {
    but.addEventListener('click',navClickHandler)
    
});
