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
