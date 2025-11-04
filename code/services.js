let setServices = () => {
    let serviceSelect = document.querySelector(".serviceSelectContainer")
    let defaultSelection = serviceSelect.firstElementChild
    defaultSelection.classList.add("selectedPackageTopic") 
}

let setButton = (nodelist=undefined,selector=undefined,func) => {
    let buttons
    let ensureButtons = () => {
    if (!nodelist) {
    buttons = document.querySelectorAll(selector)
    }
    if (!selector) {
        buttons = nodelist
    }
    else {alert("error, no input");
    }
    }
    ensureButtons()
    buttons.forEach((button) => {
        button.addEventListener("click",func)
    })
}

let packageTypeButtons = document.querySelectorAll(".packageType")

let switchPackageTypeFunction = (e) => {
    packageTypeButtons.forEach((button) => {button.classList = "packageType"})
    e.target.classList = "packageType selectedPackageTopic"
    let num = e.target.dataset.num
    constructPackages(num)
    replaceImages(num)
}

let constructPackages = (selectedTopic=1) => {
let constructPackage = (packageName,packageText,packagePrice) => {
    let packageDiv = document.createElement("div")
    packageDiv.classList = "package"

    let packageNameElem = document.createElement("h2")
    packageNameElem.textContent = packageName
    packageDiv.appendChild(packageNameElem)

    let packageTextElem = document.createElement("p")
    packageTextElem.innerHTML = packageText
    packageDiv.appendChild(packageTextElem)
    
    let packagePriceElem = document.createElement("h3")
    packagePriceElem.textContent = packagePrice
    packageDiv.appendChild(packagePriceElem)

    return packageDiv
}

    let packagesContainer = document.querySelector(".servicePackageSelectContainer")
    packagesContainer.innerHTML = ""
    let portraitPackages = [[
        'Standard Portrait',
         `45 Minute session<br>
         1 Outfit<br>
         3 Edited Photos`,
         '₪300'
        ],
    [
        'Standard Portrait',
         `1.5 hour session<br>
         2 Outfit<br>
         7 Edited Photos`,
         '₪550'
        ],
        [
        'Extended Portrait',
         `2 hour+ session<br>
         3 Outfit,<br>
         2 Locations,<br>
         12 Edited Photos`,
         '₪900'
        ]
    ]
    let corporatePackages = [
        [
        'Single Professional',
         `20 Minute shoot <br>
         2 edited photos`,
         '₪250'
        ],
    [
        'Team Session',
         `Uniform team portraits, same lighting setup. <br>
        3–6 people <br>
        2 edited photos each <br>
        Done in your office or chosen location`,
         '₪700'
        ],
        [
        'Corporate Day',
         `Full-day coverage<br>
        7–15 people<br>
        2–3 edited photos each<br>
        Consistent lighting, professional retouching`,
         '₪900'
        ]
    ]
    let eventPackages = [
                [
        'Mini Event',
         `Up to 1.5 hours coverage<br>
         40+ edited photos`,
         '₪700'
        ],
    [
        'Half-Day Event',
         `3–4 hours coverage<br>
         100+ Edited Photos`,
         '₪1200'
        ],
        [
        'Full-Day Event',
         `6–8 hours coverage<br>
         200+ edited photos`,
         '₪2000'
        ]
    ]

    if (selectedTopic == 1) {
        portraitPackages.forEach((package) => {
            packagesContainer.appendChild(constructPackage(package[0],package[1],package[2]))})
    }
    if (selectedTopic == 2) {
        corporatePackages.forEach((package) => {
            packagesContainer.appendChild(constructPackage(package[0],package[1],package[2]))})
        }
        if (selectedTopic == 3) {
    eventPackages.forEach((package) => {
        packagesContainer.appendChild(constructPackage(package[0],package[1],package[2]))})
    }
}

let replaceImages = (type) => {
    let promoImages = document.querySelectorAll(".promo")
    let portraitLinks = ["./images/portraits.jpg","./images/hila3.jpg","./images/bar2.jpg"]
    let headshotLinks = ["./images/pro.jpg","./images/pro.jpg","./images/pro.jpg"]
    let eventLinks = ["./images/rave1.jpg","./images/rave2.jpg","./images/rave3.jpg"]
    let chosen =portraitLinks
    if (type == 2) {chosen = headshotLinks}
    if (type == 3) chosen = eventLinks
    promoImages.forEach((img,key) => {
        img.style.backgroundImage = `url('${chosen[key]}')`
    })

    if (!type || type == 1) {
        promoImages[1].classList.add("hilaPromo")
        promoImages[2].classList.remove("hilaPromo")

    }
    if (type == 2) {
        promoImages[1].classList.remove("hilaPromo")
        promoImages[2].classList.remove("hilaPromo")

    }
        if (type == 3) {
        promoImages[1].classList.remove("hilaPromo")
        promoImages[2].classList.add("hilaPromo")
    }

}


replaceImages()
setButton(packageTypeButtons,undefined,switchPackageTypeFunction)
setServices()
constructPackages()