const startScreen = document.getElementById("screen1")
const startVideo = document.getElementById("startVideo")
const menu = document.getElementById("menu")
const solar = document.getElementById("solar")
const mercury = document.getElementById("mercury")
const venus = document.getElementById("venus")
const earth = document.getElementById("earth")
const mars = document.getElementById("mars")
const jupiter = document.getElementById("jupiter")
const saturn = document.getElementById("saturn")
const ring = document.getElementById("ring")
const uranus = document.getElementById("uranus")
const neptune = document.getElementById("neptune")
const astro = document.getElementById("astro")
const sun = document.getElementById("sun")

const opisText = document.getElementById("opisText")


let unlockedMercury = 1;
let unlockedVenus = 0;
let unlockedEarth = 0;
let unlockedMars = 0;
let unlockedJupiter = 0;
let unlockedSaturn = 0;
let unlockedUranus = 0;
let unlockedNeptune = 0;

let clickedMercury = 0;
let clickedVenus = 0;
let clickedEarth = 0;
let clickedMars = 0;
let clickedJupiter = 0;
let clickedSaturn = 0;
let clickedUranus = 0;
let clickedNeptune = 0;

let completedMercury = 0;
let completedVenus = 0;
let completedEarth = 0;
let completedMars = 0;
let completedJupiter = 0;
let completedSaturn = 0;
let completedUranus = 0;
let completedNeptune = 0;

let lastSide;


mercury.addEventListener("mouseover", () => {
    astro.style.marginLeft = "425px";
    astro.style.marginBottom = "120px";
    mercury.style.cursor = "pointer";
})
mercury.addEventListener("mouseleave", () => {
    if (!clickedMercury) {
        astro.style.marginLeft = "300px";
        astro.style.marginBottom = "0px";
    }

})

venus.addEventListener("mouseover", () => {
    astro.style.marginLeft = "572px";
    astro.style.marginBottom = "160px";
    venus.style.cursor = "pointer";
})
venus.addEventListener("mouseleave", () => {
    if (!clickedVenus) {
        astro.style.marginLeft = "300px";
        astro.style.marginBottom = "0px";
    }

})


earth.addEventListener("mouseover", () => {
    astro.style.marginLeft = "784px";
    astro.style.marginBottom = "180px";
    earth.style.cursor = "pointer";
})
earth.addEventListener("mouseleave", () => {
    if (!clickedEarth) {
        astro.style.marginLeft = "300px";
        astro.style.marginBottom = "0px";
    }
})

mars.addEventListener("mouseover", () => {
    astro.style.marginLeft = "952px";
    astro.style.marginBottom = "140px";
    mars.style.cursor = "pointer";
})
mars.addEventListener("mouseleave", () => {
    if (!clickedMars) {
        astro.style.marginLeft = "300px";
        astro.style.marginBottom = "0px";
    }
})

jupiter.addEventListener("mouseover", () => {
    astro.style.marginLeft = "1300px";
    astro.style.marginBottom = "480px";
    jupiter.style.cursor = "pointer";
})
jupiter.addEventListener("mouseleave", () => {
    if (!clickedJupiter) {
        astro.style.marginLeft = "300px";
        astro.style.marginBottom = "0px";
    }
})
saturn.addEventListener("mouseover", () => {
    astro.style.marginLeft = "1800px";
    astro.style.marginBottom = "400px";
    saturn.style.cursor = "pointer";
})
saturn.addEventListener("mouseleave", () => {
    if (!clickedSaturn) {
        astro.style.marginLeft = "300px";
        astro.style.marginBottom = "0px";
    }
})
uranus.addEventListener("mouseover", () => {
    astro.style.marginLeft = "2200px";
    astro.style.marginBottom = "200px";
    uranus.style.cursor = "pointer";
})
uranus.addEventListener("mouseleave", () => {
    if (!clickedUranus) {
        astro.style.marginLeft = "300px";
        astro.style.marginBottom = "0px";
    }
})
neptune.addEventListener("mouseover", () => {
    astro.style.marginLeft = "2550px";
    astro.style.marginBottom = "180px";
    neptune.style.cursor = "pointer";
})
neptune.addEventListener("mouseleave", () => {
    if (!clickedNeptune) {
        astro.style.marginLeft = "300px";
        astro.style.marginBottom = "0px";
    }
})

function Start() {
    solar.style.display = "flex";
    startScreen.style.animationName = "outUp";
    menu.style.animationName = "opDisp";

}
startScreen.addEventListener("animationend", () => {
  menu.style.display = "none";
});
function Exit() {
    window.close();
}

let brText = 2;
let text2 = `U mala tela Suncevog sistema spadaju: asteroidi, objekti u Kojperovom pojasu, komete, 
            meteoroidi i medjuplanetarna prasina. Sistem sadrzi 8 planeta, 3 patuljaste planete,
            vise od 200 njihovih prirodnih satelita, te mnostvo sitnih tela: kometa, planetoida, 
            tela Kojperovog pojasa, meteoroida i medjuplanetna prasina.`
let text3 = `Osam planeta razvrstano je u dve grupe, unutrasnju ili terestricku,
            gde se nalaze Zemlja i njoj slicne 3 planete (Merkur, Venera i Mars), i spoljasnju ili jovijansku,
            s Jupiterom i njemu slicnim divovskim planetama Saturnom, Uranom i Neptunom. Unutrasnja je grupa stenovita,
            s tankim atmosferskim slojem (bez njega je jedino Merkur). Jovijanske su planete gasovite s malom stenovitim jezgrom, 
            i njihov sastav je slican sastavu protoplanetnog oblaka iz kojega su planete nastale.`
let text4 = `Hemijski sastav Jupitera gotovo
            je identican Suncevom. Razlika izmedju te dve grupe planeta posledica je razvoja u kojem je zracenje mladog Sunca zagrejalo
            jezgra blizih planeta i ocistilo ih od lako isparivih elemenata. Dobivsi tako cvrstu povrsinu, na njoj se geoloskim procesima 
            razvila sekundarna atmosfera od pretezno ugljen-dioksida (Venera i Mars) i tercijarna atmosfera Zemlje od azota i kiseonika. 
            Sve planete osim Zemlje prozvane su po grckim rimskim bozanstvima.`


const solarText = document.getElementById("solarText")
const nextButton = document.getElementById("nextButton")
const learnSolar = document.getElementById("learnSolar")
const saznajVise = document.getElementById("saznajVise")
const body = document.querySelector("body");
function nextText() {
    switch (brText) {
        case 2:
            solarText.textContent = text2
            brText++;
            nextButton.textContent = "Završi"
            saznajVise.style.display = "block";
            break;
        case 3:
            learnSolar.style.display = "none";
            body.style.overflowX = "auto";
            break;
        case 4:
            nextButton.textContent = "Dalje>"
            saznajVise.style.display = "none";
            solarText.textContent = text3
            brText++;
            break;
        case 5:
            solarText.textContent = text4
            nextButton.textContent = "Završi"
            brText++;
            break;
        case 6:
            learnSolar.style.display = "none";
            body.style.overflowX = "auto";
            break;
        default:
            break;
    }
}

function saznajViseFun() {
    brText++;
    nextText();
}

const uputstvo = document.getElementById("uputstvo")
const xButton = document.getElementById("xButton")
const xButton2 = document.getElementById("xButton2")
const uputDugme = document.getElementById("options")

uputDugme.addEventListener("click", () => {
    uputstvo.style.display = "flex";
})

xButton.addEventListener("click", () => {
    uputstvo.style.display = "none";
})

const venusLock = document.getElementById("venusLock")
const earthLock = document.getElementById("earthLock")
const marsLock = document.getElementById("marsLock")
const jupiterLock = document.getElementById("jupiterLock")
const saturnLock = document.getElementById("saturnLock")
const uranusLock = document.getElementById("uranusLock")
const neptuneLock = document.getElementById("neptuneLock")
const nav = document.getElementById("nav")
const endText = document.getElementById("endText")
endText.style.display = "none";
let endScreen = 0;
xButton2.addEventListener("click", () => {
    info.style.display = "none";
    astro.style.marginLeft = "300px";
    astro.style.marginBottom = "0px";
    body.style.overflowX = "auto";
    clickedMercury = 0;
    clickedVenus = 0
    clickedEarth = 0
    clickedMars = 0
    clickedJupiter = 0
    clickedSaturn = 0
    clickedUranus = 0
    clickedNeptune = 0
    if (completedMercury) {
        venus.style.filter = "none";
        venusLock.style.display = "none"
    }
    if (completedVenus) {
        earth.style.filter = "none";
        earthLock.style.display = "none"
    }
    if (completedEarth) {
        mars.style.filter = "none";
        marsLock.style.display = "none"
    }
    if (completedMars) {
        jupiter.style.filter = "none";
        jupiterLock.style.display = "none"
    }
    if (completedJupiter) {
        saturn.style.filter = "none";
        saturnLock.style.display = "none"
        ring.style.filter = "none"
    }
    if (completedSaturn) {
        uranus.style.filter = "none";
        uranusLock.style.display = "none"
    }
    if (completedUranus) {
        neptune.style.filter = "none";
        neptuneLock.style.display = "none"
    }

    if(completedNeptune && !endScreen)
    {
        window.scrollTo({left: 0, behavior: "instant"});
        solar.style.animationName = "finalMove";
        solar.style.pointerEvents = "none";
        endText.style.animationName = "finalMoveText";
        endText.style.display = "block";
        body.style.overflowX = "hidden";
        nav.style.display = "none"
        endScreen = 1;
    }
})

endText.addEventListener("animationend", () => {
  body.style.overflowX = "auto";
  solar.style.pointerEvents = "auto";
  nav.style.display = "flex";
});


const game = document.getElementById("game")

let nazivPlanete = document.getElementById("nazivPlanete")

mercury.addEventListener("click", () => {
    clickedMercury = 1
    opisText.click()
    body.style.overflowX = "hidden";
    nazivPlanete.textContent = "Merkur - StellarQuest"
    opisDiv.innerHTML = merkurOpis;
    galerijaDiv.innerHTML = merkurGalerija
    zanimljivostiDiv.innerHTML = merkurZanimljivosti
    info.style.display = "flex";
    if (!completedMercury) {
        game.style.display = "flex";
        info.style.display = "none";
        playingGame = 1
        gameMatrix = [
            [1, 0, 0, 5, 0, 0, 0, 0, 0, 5],
            [0, 0, 0, 5, 0, 4, 0, 5, 5, 5],
            [0, 0, 0, 5, 6, 6, 6, 5, 0, 0],
            [0, 0, 6, 0, 6, 6, 0, 5, 5, 5],
            [0, 6, 0, 0, 5, 5, 0, 0, 0, 0],
            [5, 0, 0, 0, 5, 5, 0, 5, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0, 5],
            [0, 5, 5, 5, 5, 0, 6, 0, 6, 6],
            [5, 5, 0, 0, 5, 6, 0, 6, 0, 2],
            [5, 0, 0, 0, 5, 0, 0, 0, 5, 5]
        ]
        play()
    }

})


const nb1 = document.querySelector(".nb1")
const nb2 = document.querySelector(".nb2")


nb1.addEventListener("click", () => {
    window.scrollTo({ left: window.scrollX - 200, behavior: "smooth" });
})

nb2.addEventListener("click", () => {
    window.scrollTo({ left: window.scrollX + 200, behavior: "smooth" });
})
//Zadatak

let gameMatrix;
// 0 - free
// 1 - astronaut
// 2 - kljuc
// 3 - astronaut sa kljucem
// 4 - kovceg
// 5 - void
// 6 - asteroid
// 7 - portal
// 8 - portal_token
// 9 - vanzemaljac
// 10 - vanzemaljac_token

const gameScreen = document.getElementById("gameScreen");

let astroI;
let astroJ;

let clickable = 0;

function play() {
    gameScreen.innerHTML = ""
    for (let i = 0; i < 10; i++) {
        let row = document.createElement("div")
        row.id = "gameRow";
        for (let j = 0; j < 10; j++) {
            let field = document.createElement("div")
            field.id = "gameField";
            field.addEventListener("click",()=>{
                if(clickable)
                {
                    if(gameMatrix[i][j] == 5)
                    {
                        gameMatrix[i][j] = 9
                        field.innerHTML = ""
                        let a1 = document.createElement("img")
                        a1.src = "images/alien.png"
                        a1.addEventListener("mouseover", () => {
                        a1.style.cursor ="pointer";

                    })
                        a1.addEventListener("click", ()=>{

                            if(j-1>=0 && j+1<10 && gameMatrix[i][j-1] != 5 && gameMatrix[i][j+1] != 5)
                            {
                                let temp = gameMatrix[i][j-1]
                                gameMatrix[i][j-1] = gameMatrix[i][j+1]
                                gameMatrix[i][j+1] = temp
                                play()
                            }
                            
                        })
                        field.appendChild(a1)
                        clickable = 0
                        field.style.boxShadow = "none"
                        field.style.cursor = "default"
                    }
                }
            })
            field.addEventListener("mouseover",()=>{
                if(clickable)
                {
                    
                    if(gameMatrix[i][j] == 5)
                    {
                        field.style.boxShadow = "inset 0 0 20px rgb(40, 236, 40)"
                        field.style.cursor = "pointer"
                    }
                    else{
                        field.style.boxShadow = "inset 0 0 20px rgb(245, 7, 7)"
                        field.style.cursor = "not-allowed"
                    }
                }
            })
            field.addEventListener("mouseleave",()=>{
                if(clickable)
                {
                    field.style.boxShadow = "none"
                    field.style.cursor = "default"
                }
            })
            if (gameMatrix[i][j] == 1) {
                astroI = i
                astroJ = j
                let a1 = document.createElement("img")
                a1.src = "images/astro.png"
                field.appendChild(a1)
            }
            else if (gameMatrix[i][j] == 2) {
                let a1 = document.createElement("img")
                a1.src = "images/key.png"
                field.appendChild(a1)
            }
            else if (gameMatrix[i][j] == 3) {
                astroI = i
                astroJ = j
                let a1 = document.createElement("img")
                a1.src = "images/astroKey.png"
                field.appendChild(a1)
            }
            else if (gameMatrix[i][j] == 4) {
                let a1 = document.createElement("img")
                a1.src = "images/chest.png"
                field.appendChild(a1)
            }
            else if (gameMatrix[i][j] == 6) {
                let a1 = document.createElement("img")
                a1.src = "images/asteroid.png"
                field.appendChild(a1)
            }
            else if (gameMatrix[i][j] == 7) {
                let a1 = document.createElement("img")
                a1.src = "images/portal.png"
                field.appendChild(a1)
            }
            else if(gameMatrix[i][j] == 8)
            {
                let a1 = document.createElement("img")
                a1.src = "images/portal_token.png"
                a1.style.backgroundColor = "white"
                a1.style.borderRadius = "50%"
                a1.style.width = "50px"
                field.appendChild(a1)
            }
            else if(gameMatrix[i][j] == 9)
            {
                let a1 = document.createElement("img")
                        a1.src = "images/alien.png"
                        a1.addEventListener("mouseover", () => {
                        a1.style.cursor ="pointer";

                    })
                        a1.addEventListener("click", ()=>{

                            if(j-1>=0 && j+1<10 && gameMatrix[i][j-1] != 5 && gameMatrix[i][j+1] != 5)
                            {
                                let temp = gameMatrix[i][j-1]
                                gameMatrix[i][j-1] = gameMatrix[i][j+1]
                                gameMatrix[i][j+1] = temp
                                play()
                            }
                        })
                        field.appendChild(a1)
            }
            else if(gameMatrix[i][j] == 10)
            {
                let a1 = document.createElement("img")
                a1.src = "images/alien_token.png"
                a1.style.backgroundColor = "white"
                a1.style.borderRadius = "50%"
                a1.style.width = "50px"
                field.appendChild(a1)
            }
            row.appendChild(field)
        }
        gameScreen.appendChild(row)
    }

}
let portalSetX = 0
let portalSetY = 0
let playingGame = 0
let hasKey = 0;
let n = 0
const info = document.getElementById("info")
document.addEventListener("keydown", (e) => {
    if (playingGame == 1) {
        if ((e.code == "ArrowRight" || e.code == "KeyD") && astroJ + 1 < 10) {
            if(gameMatrix[astroI][astroJ + 1] == 10)
            {
                    gameMatrix[astroI][astroJ + 1] = hasKey ? 3 : 1
                    gameMatrix[astroI][astroJ] = 0;
                    clickable = 1;
            }
            else if(gameMatrix[astroI][astroJ + 1] == 8)
                {
                    gameMatrix[astroI][astroJ + 1] = hasKey ? 3 : 1
                    gameMatrix[astroI][astroJ] = 0;
                    gameMatrix[8][4] = 7
    
                }
            else if(gameMatrix[astroI][astroJ + 1] == 7 && gameMatrix[astroI][astroJ + 2] == 0)
            {
                gameMatrix[astroI][astroJ + 2] = hasKey ? 3 : 1
                gameMatrix[astroI][astroJ] = 0;

            }
            else if (gameMatrix[astroI][astroJ + 1] == 6 && astroJ + 2 < 10 && gameMatrix[astroI][astroJ + 2] == 0) {
                gameMatrix[astroI][astroJ] = 0;
                gameMatrix[astroI][astroJ + 1] = hasKey ? 3 : 1;
                gameMatrix[astroI][astroJ + 2] = 6;
            }
            else if (gameMatrix[astroI][astroJ + 1] == 5 || gameMatrix[astroI][astroJ + 1] == 6 || gameMatrix[astroI][astroJ + 1] == 9) n = 1
            else if (gameMatrix[astroI][astroJ + 1] == 4) {
                if (hasKey) {
                    game.style.display = "none";
                    info.style.display = "flex";
                    if (clickedMercury) completedMercury = 1
                    if (clickedVenus) completedVenus = 1
                    if (clickedEarth) completedEarth = 1
                    if (clickedMars) completedMars = 1
                    if (clickedJupiter) completedJupiter = 1
                    if (clickedSaturn) completedSaturn = 1
                    if (clickedUranus) completedUranus = 1
                    if (clickedNeptune) completedNeptune = 1
                    hasKey = 0
                    playingGame = 0
                }
            }
            else if (gameMatrix[astroI][astroJ + 1] == 2 || hasKey) {
                gameMatrix[astroI][astroJ] = 0;
                hasKey = 1;
                gameMatrix[astroI][astroJ + 1] = 3;
            }
            else {
                gameMatrix[astroI][astroJ] = 0;
                gameMatrix[astroI][astroJ + 1] = 1;
            }
            play()
        }
        else if ((e.code == "ArrowLeft" || e.code == "KeyA") && astroJ - 1 > -1) {
            if(gameMatrix[astroI][astroJ - 1] == 10)
            {
                    gameMatrix[astroI][astroJ - 1] = hasKey ? 3 : 1
                    gameMatrix[astroI][astroJ] = 0;
                    clickable = 1;
            }
            else if(gameMatrix[astroI][astroJ - 1] == 8)
                {
                    gameMatrix[astroI][astroJ - 1] = hasKey ? 3 : 1
                    gameMatrix[astroI][astroJ] = 0;
                    gameMatrix[8][4] = 7
    
                }
            else if(gameMatrix[astroI][astroJ - 1] == 7 && gameMatrix[astroI][astroJ - 2] == 0)
                {
                    gameMatrix[astroI][astroJ - 2] = hasKey ? 3 : 1
                    gameMatrix[astroI][astroJ] = 0;
    
                }
            else if (gameMatrix[astroI][astroJ - 1] == 6 && astroJ - 2 > -1 && gameMatrix[astroI][astroJ - 2] == 0) {
                gameMatrix[astroI][astroJ] = 0;
                gameMatrix[astroI][astroJ - 1] = hasKey ? 3 : 1;
                gameMatrix[astroI][astroJ - 2] = 6;
            }
            else if (gameMatrix[astroI][astroJ - 1] == 5 || gameMatrix[astroI][astroJ - 1] == 6  || gameMatrix[astroI][astroJ - 1] == 9) n = 1
            else if (gameMatrix[astroI][astroJ - 1] == 4) {
                if (hasKey) {
                    game.style.display = "none";
                    info.style.display = "flex";
                    if (clickedMercury) completedMercury = 1
                    if (clickedVenus) completedVenus = 1
                    if (clickedEarth) completedEarth = 1
                    if (clickedMars) completedMars = 1
                    if (clickedJupiter) completedJupiter = 1
                    if (clickedSaturn) completedSaturn = 1
                    if (clickedUranus) completedUranus = 1
                    if (clickedNeptune) completedNeptune = 1
                    hasKey = 0
                    playingGame = 0
                }
            }
            else if (gameMatrix[astroI][astroJ - 1] == 2 || hasKey) {
                gameMatrix[astroI][astroJ] = 0;
                hasKey = 1;
                gameMatrix[astroI][astroJ - 1] = 3;
            }
            else {
                gameMatrix[astroI][astroJ] = 0;
                gameMatrix[astroI][astroJ - 1] = 1;
            }
            play()
        }

        else if ((e.code == "ArrowUp" || e.code == "KeyW") && astroI - 1 > -1) {
            if(gameMatrix[astroI - 1][astroJ] == 10)
            {
                    gameMatrix[astroI - 1][astroJ] = hasKey ? 3 : 1
                    gameMatrix[astroI][astroJ] = 0;
                    clickable = 1;
            }
            else if(gameMatrix[astroI - 1][astroJ] == 8)
                {
                    gameMatrix[astroI - 1][astroJ] = hasKey ? 3 : 1
                    gameMatrix[astroI][astroJ] = 0;
                    gameMatrix[8][4] = 7
    
                }
            else if(gameMatrix[astroI - 1][astroJ] == 7 && gameMatrix[astroI - 2][astroJ] == 0)
                {
                    gameMatrix[astroI - 2][astroJ] = hasKey ? 3 : 1
                    gameMatrix[astroI][astroJ] = 0;
    
                }
            else if (gameMatrix[astroI - 1][astroJ] == 6 && astroI - 2 > -1 && gameMatrix[astroI - 2][astroJ] == 0) {
                gameMatrix[astroI][astroJ] = 0;
                gameMatrix[astroI - 1][astroJ] = hasKey ? 3 : 1;
                gameMatrix[astroI - 2][astroJ] = 6;
            }
            else if (gameMatrix[astroI - 1][astroJ] == 5 || gameMatrix[astroI - 1][astroJ] == 6 || gameMatrix[astroI - 1][astroJ] == 9) n = 1
            else if (gameMatrix[astroI - 1][astroJ] == 4) {
                if (hasKey) {
                    game.style.display = "none";
                    info.style.display = "flex";
                    if (clickedMercury) completedMercury = 1
                    if (clickedVenus) completedVenus = 1
                    if (clickedEarth) completedEarth = 1
                    if (clickedMars) completedMars = 1
                    if (clickedJupiter) completedJupiter = 1
                    if (clickedSaturn) completedSaturn = 1
                    if (clickedUranus) completedUranus = 1
                    if (clickedNeptune) completedNeptune = 1
                    hasKey = 0
                    playingGame = 0
                }
            }
            else if (gameMatrix[astroI - 1][astroJ] == 2 || hasKey) {
                gameMatrix[astroI][astroJ] = 0;
                hasKey = 1;
                gameMatrix[astroI - 1][astroJ] = 3;
            }
            else {
                gameMatrix[astroI][astroJ] = 0;
                gameMatrix[astroI - 1][astroJ] = 1;
            }
            play()
        }
        else if ((e.code == "ArrowDown" || e.code == "KeyS") && astroI + 1 < 10) {
            if(gameMatrix[astroI + 1][astroJ] == 10)
            {
                    gameMatrix[astroI + 1][astroJ] = hasKey ? 3 : 1
                    gameMatrix[astroI][astroJ] = 0;
                    clickable = 1;
            }
            else if(gameMatrix[astroI + 1][astroJ] == 8)
                {
                    gameMatrix[astroI + 1][astroJ] = hasKey ? 3 : 1
                    gameMatrix[astroI][astroJ] = 0;
                    gameMatrix[8][4] = 7
    
                }
            else if(gameMatrix[astroI + 1][astroJ] == 7 && gameMatrix[astroI + 2][astroJ] == 0)
                {
                    gameMatrix[astroI + 2][astroJ] = hasKey ? 3 : 1
                    gameMatrix[astroI][astroJ] = 0;
    
                }
            else if (gameMatrix[astroI + 1][astroJ] == 6 && astroI + 2 < 10 && gameMatrix[astroI + 2][astroJ] == 0) {
                gameMatrix[astroI][astroJ] = 0;
                gameMatrix[astroI + 1][astroJ] = hasKey ? 3 : 1;
                gameMatrix[astroI + 2][astroJ] = 6;
            }
            else if (gameMatrix[astroI + 1][astroJ] == 5 || gameMatrix[astroI + 1][astroJ] == 6 || gameMatrix[astroI + 1][astroJ] == 9) n = 1
            else if (gameMatrix[astroI + 1][astroJ] == 4) {
                if (hasKey) {
                    game.style.display = "none";
                    info.style.display = "flex";
                    if (clickedMercury) completedMercury = 1
                    if (clickedVenus) completedVenus = 1
                    if (clickedEarth) completedEarth = 1
                    if (clickedMars) completedMars = 1
                    if (clickedJupiter) completedJupiter = 1
                    if (clickedSaturn) completedSaturn = 1
                    if (clickedUranus) completedUranus = 1
                    if (clickedNeptune) completedNeptune = 1
                    hasKey = 0
                    playingGame = 0
                }
            }
            else if (gameMatrix[astroI + 1][astroJ] == 2 || hasKey) {
                gameMatrix[astroI][astroJ] = 0;
                hasKey = 1;
                gameMatrix[astroI + 1][astroJ] = 3;
            }
            else {
                gameMatrix[astroI][astroJ] = 0;
                gameMatrix[astroI + 1][astroJ] = 1;
            }
            play()
        }
    }

})


const galerijaText = document.getElementById("galerijaText")

const zanimljivostiText = document.getElementById("zanimljivostiText")
const opisDiv = document.getElementById("opisDiv")
const galerijaDiv = document.getElementById("galerijaDiv")
const zanimljivostiDiv = document.getElementById("zanimljivostiDiv")

galerijaDiv.style.display = "none"
zanimljivostiDiv.style.display = "none"
opisText.addEventListener("click", () => {
    opisText.style.backgroundColor = "white"
    galerijaText.style.backgroundColor = "transparent"
    zanimljivostiText.style.backgroundColor = "transparent"
    opisDiv.style.display = "block"
    galerijaDiv.style.display = "none"
    zanimljivostiDiv.style.display = "none"

})
galerijaText.addEventListener("click", () => {
    opisText.style.backgroundColor = "transparent"
    galerijaText.style.backgroundColor = "white"
    zanimljivostiText.style.backgroundColor = "transparent"
    opisDiv.style.display = "none"
    galerijaDiv.style.display = "flex"
    zanimljivostiDiv.style.display = "none"

})

zanimljivostiText.addEventListener("click", () => {
    opisText.style.backgroundColor = "transparent"
    galerijaText.style.backgroundColor = "transparent"
    zanimljivostiText.style.backgroundColor = "white"
    opisDiv.style.display = "none"
    galerijaDiv.style.display = "none"
    zanimljivostiDiv.style.display = "flex"

})

let merkurOpis = `<p>
    Merkur (simbol: ☿) je najmanja, a ujedno i najbliža planeta Suncu i jedna od 8 planeta u Sunčevom sistemu,čiji orbitalni period traje oko 88 zemaljskih dana. Gledano sa Zemlje, Merkuru je potrebno skoro 116 dana da napravi jedan puni krug oko svoje orbite, što je mnogo brže nego kod i jedne druge planete. Upravo ova brzina revolucije Merkura je i bila razlog zbog kojeg je ta planeta dobila ime po starorimskom bogu trgovine i putovanja i glasniku bogova Merkuru (lat. Mercurius; grčki ekvivalent je Hermes).
  </p>
  <p>
    Zbog gotovo nepostojanja atmosfere koja bi ublažila sunčevo zračenje, površina Merkura je izložena najintenzivnijim temperaturnim varijacijama među svim planetama Sunčevog sistema, koje se na području oko ekvatora kreću između -173 °C u toku noći i +427 °C u toku dana. Temperature na polovima su konstantno ispod -93 °C.
  </p>
  <p>
    Merkur je specifičan i po nagibu svoje ose jer ima najmanju vrednost među svim planetama Sunčevog sistema i iznosi svega 2,11′ (oko trideseti deo stepena), ali i po najizraženijem ekscentricitetu orbite. U fazi afela Merkur je čak 1,5 puta dalje od Sunca u odnosu na perihel. Prosečna udaljenost Merkura od Sunca je 0,387 AJ ili 57.910.000 km. Godišnja doba ne postoje u smislu godišnjih doba na Zemlji, što je posledica malog nagiba ose.
  </p>
  <p>
    Površina Merkura je izbrazdana brojnim kraterima meteorskog porekla i slična je površini Meseca, što navodi na zaključak da je sama planeta u geološkom stanju mirovanja više miliona godina. U gravitacionom smislu Merkur je gravitaciono zarobljena planeta i ima potpuno jedinstven sistem rotacije u odnosu na ostale objekte Sunčevog sistema.
  </p>
  <p>
    Za vreme jedne revolucije, Merkur izvrši svega jednu i po rotaciju (dok Zemlja ima odnos 365:1). Pošto Merkurova orbita leži u ravni sa orbitom Zemlje (kao što je slučaj i sa Venerom), ova planeta je vidljiva na zemljinom nebu tokom ranog jutra i uveče, ali ne i tokom ponoći.
  </p>
  <p>
    Zbog blizine Sunca, retko je u povoljnom položaju za posmatranje, a i tada je vidljiv iznad horizonta samo kratko vreme pre zalaska ili nakon izlaska Sunca. Gledano sa Zemlje, Merkur je vidljiv u raznim fazama (poput Meseca u svojim menama).
  </p>
  <p>
    Prva svemirska letelica koja se približila Merkuru bila je Mariner 10 tokom sedamdesetih godina 20. veka. Ona je tokom tri „susreta“ snimila oko 45% površine planete.
  </p>
  <p>
    Nova sonda MESSENGER, lansirana u avgustu 2004, u orbitu Merkura ušla je u martu 2011. i tokom naredne dve godine uspela je da snimi celokupnu površinu ove planete.
  </p>`


let merkurGalerija = `<img src="images/merkur1.jpg" alt="">
            <img src="images/merkur2.jpg" alt="">
            <img src="images/merkur3.jpg" alt="">
            <img src="images/merkur4.avif" alt=""> `

let merkurZanimljivosti = ` <ul>
                <li>Blizina Suncu: Merkur je najbliža planeta Suncu, sa prosečnim rastojanjem od samo 57,9 miliona kilometara. Zbog svoje blizine, na Merkur je vrlo toplo tokom dana, dok je noću ekstremno hladno.</li><br>
                <li>Brzina rotacije: Merkur se rotira vrlo polako. Jedan dan na Merkuru (jedna rotacija) traje 59 Zemljinih dana. Međutim, godina na Merkuru (jedan krug oko Sunca) traje samo 88 Zemljinih dana. Zbog toga dani i godine na Merkuru nisu uobičajeni kao na Zemlji.</li><br>
                <li>Ekstremne temperature: Zbog nedostatka atmosfere koja bi zadržavala toplotu, Merkur doživljava ekstremne temperaturne razlike. Tokom dana temperature mogu da dostignu 430°C, dok noću padaju i do -180°C.</li><br>
                <li>Nema atmosfere: Merkur gotovo da nema atmosferu, jer je njegova gravitacija preslaba da zadrži gasove. Zbog toga nema zaštitu od meteora i radijacije, a na planeti ne postoji ni vreme kao na Zemlji (nema vetrova, oblaka, padavina).</li><br>
                <li>Mnoge kraterne površine: Merkur je prepun kratera i udarnih basena, sličan Mesecu, zbog čega njegova površina izgleda kao stara i iznosi mnogo o njegovoj geološkoj prošlosti. Najveći udarni basen na Merkuru je Caloris Basin, širok oko 1.550 km.</li><br>
                <li>Tegobna rotacija i orbitiranje: Merkur ima neobičan oblik rotacije, poznat kao "rezonancija 3:2". To znači da za svakih tri rotacije oko svoje ose, Merkur napravi dva kruga oko Sunca. Ovaj fenomen uzrokuje da se dan na Merkuru povremeno „sudara“ sa godinom, čineći njegovo kretanje prilično jedinstvenim.</li><br>
                <li>Magnetno polje: Iako Merkur ima vrlo malu i slabiju magnetnu sferu od Zemlje, ipak ima magnetno polje. Ovo je još jedno od iznenađenja, jer se očekivalo da će Merkur, s obzirom na svoju malu veličinu i brzinu rotacije, imati slabo razvijen magnetizam. Magnetno polje Merkura je oko 1% jače od Zemljinog.</li><br>
                <li>Nema meseca: Merkur nema mesece, jer je preblizu Suncu i gravitacija Sunca bi brzo uništila bilo koji mesec koji bi mogao da se formira ili da preživi u njegovoj orbiti.</li><br>
                <li>Otkrivanje i posmatranje: Merkur je poznat još od antičkih vremena, ali je bio teško istraživati zbog svoje blizine Suncu. Prva misija koja je posetila Merkur bila je NASA-in Mariner 10, koji je 1974. godine poslao prve slike planete. Kasnije je MESSENGER misija, koja je u orbitu oko Merkura ušla 2011. godine, dala još detaljnije informacije o planeti.</li><br>
                <li>Neptunski fenomen: Merkur pokazuje fenomen poznat kao "Neptunska sinhronizacija", gde zbog posebne dinamike njegove orbite i rotacije, Sunce "vidi" planetu u različitim položajima svakih nekoliko dana.</li><br>
            </ul>`

let veneraOpis = `<p>
  Venera (simbol: ♀) je jedna od 8 planeta Sunčevog sistema, i druga je planeta po udaljenosti od Sunca, sa prosečnom udaljenošću od oko 0,72 AJ (ili 108.200.000 km). Oko Sunca se kreće gotovo kružnom orbitom, a jednu rotaciju obavi za 224,7 zemaljskih dana. Nema prirodnih satelita u svojoj orbiti. Drugo je po sjaju nebesko telo na noćnom nebu gledano sa Zemlje, odmah posle Meseca, sa vrednostima prividne magnitude od -4,9 do -3,8.
</p>
<p>
  Ime je dobila po starorimskoj boginji ljubavi i lepote Veneri (grčki ekvivalent je Afrodita) i jedina je planeta koja je dobila ime po nekom ženskom mitološkom božanstvu. Gledano sa Zemlje najuočljivija je u sumrak i u ranu zoru, te se često u narodu naziva i Zvezdom Danicom i Zvezdom Večernjačom.
</p>
<p>
  Venera spada u grupu terestričkih planeta, a zbog sličnosti sa Zemljom u pogledu dimenzija (najbliža je planeta po udaljenosti od Zemlje i ima približno sličnu veličinu), gravitacije i složene unutrašnje strukture često je označavaju „Zemljinom sestrom“. Venerina atmosfera je veoma gusta sa strukturnim udelom ugljen-dioksida u njenoj građi od čak 96%. Atmosferski pritisak na površini je i do 92 puta viši nego na Zemlji i iznosi 92 bara. Zbog veoma guste atmosfere koja na planeti stvara efekat staklene bašte, površinske temperature su veoma visoke i iznose u proseku oko 735 K, što Veneru čini najtoplijom planetom Sunčevog sistema. Planeta je obavijena gustim i izrazito reflektujućim oblacima sačinjenim od sumporne kiseline.
</p>
<p>
  Postoji mogućnost da su u prošlosti na površini Venere postojali okeani koji su verovatno isparili usled povećanja temperatura uzrokovanih efektom staklene bašte. Slobodni atomi vodonika su potom najverovatnije „otplutali u slobodni svemir“ zbog slabog intenziteta magnetnog polja planete, a pod dejstvom solarnih vetrova.
</p>
<p>
  Površina Venere je veoma suva i podseća na izrazito suva pustinjska područja na Zemlji sa kojih se mestimično izdižu vulkanske kupe i stenovite ploče. Vulkanska aktivnost na Veneri je veoma visoka i verovatno je ona glavni uzročnik gomilanja ogromnih količina ugljen-dioksida u atmosferi.
</p>`

let veneraGalerija = `<img src="images/venera1.webp" alt="">
             <img src="images/venera2.jfif" alt="">
             <img src="images/venera3.jpg" alt="">
             <img src="images/venera4.jpg" alt="">`


let veneraZanimljivosti = `<ul>
<li>Najtoplija planeta u Sunčevom sistemu.
Iako je Venera dalje od Sunca nego Merkur, ona je najtoplija planeta u našem Sunčevom sistemu. Temperatura na njenoj površini može doseći i do 465°C, što je dovoljno da rastopi olovo. To je rezultat "staklene bašte" - guste atmosfere koja zadržava toplotu.</li><br>

<li>Atmosfera bogata ugljen-dioksidom.
Venerina atmosfera je 96,5% ugljen-dioksida, dok ostatak čine azot, vodena para i trace gasa. Ova gusta atmosfera izaziva izuzetno jaku efektu staklene bašte, što doprinosi visokim temperaturama na površini.</li><br>

<li>Oblačnost od kisele kiše.
Venera ima guste oblake koji se sastoje od sumporne kiseline. Ovi oblaci se ne slažu samo zbog svojih ekstremnih uslova, već i zato što ometaju bilo kakvu direktnu vidljivost površine sa Zemlje. Zbog ovih oblaka, Venera je vrlo svetla na noćnom nebu, ali zbog atmosfere, nijedna sonda nije mogla trajno preživeti na njenoj površini bez zaštite.</li><br>

<li>Obrtanje u suprotnom smeru.
Venera se rotira u suprotnom smeru od većine planeta u Sunčevom sistemu, uključujući Zemlju. Ova rotacija je retrogradna, što znači da bi Sunce na Veneri izlazilo na zapadu i zalazilo na istoku. Takođe, njen dan (vreme potrebno da se okrene oko svoje ose) traje duže od njenog godine (vreme potrebno da obiđe Sunce). Venerin dan traje 243 Zemaljska dana, dok godina traje oko 225 dana.</li><br>

<li>Izuzetno spora rotacija.
Venera se rotira izuzetno sporo – njeno rotiranje traje 243 Zemaljska dana, dok traje samo 225 dana da obiđe Sunce. Ovo znači da jedan dan na Veneri traje duže od godine na Veneri.</li><br>

<li>Ima vrlo jake vetrove u višim slojevima atmosfere.
Iako je površina Venerine atmosfere veoma mirna, u višim slojevima atmosfera Venera ima vrlo brze vetrove koji mogu doseći brzinu i do 350 km/h. Ovi vetrovi su ujedno i odgovorni za ono što se zove "super-rotacija" atmosfere, jer se atmosfera planete kreće mnogo brže nego sama planeta.</li><br>

<li>Venera je planeta bez prirodnih meseca.
Za razliku od Zemlje i Marsa, Venera nema nijedan prirodni mesec. Ovo je možda i zbog njezine blizine Suncu, koje verovatno sprečava stvaranje meseca zbog gravitacionih interakcija.</li><br>

<li>Planeta sa najvećim atmosferom pritiska.
Pritisak na površini Venere je oko 92 puta veći nego na Zemlji – to je otprilike kao pritisak koji bi se osećao 900 metara pod okeanom na Zemlji. Ovaj pritisak je toliko jak da bi uništio bilo koju ljudsku opremu koja bi pokušala da sleti na Veneru bez specijalne zaštite.</li><br>

<li>Zemaljski ekvivalent “zavisnosti” od dužine dana i godine.
Na Veneri je jedan dan duži od jedne godine, jer se planeta okreće izuzetno sporo, ali se brzo kreće oko Sunca. Ovo je jedinstveno u Sunčevom sistemu i izaziva neke neobične posledice, kao što je izuzetno dug period dana i noći, što uzrokuje ekstremne temperaturne promene.</li><br>

<li>Prva misija na Veneru.
Prva uspešna misija na Veneru bila je sovjetska "Venera 7", koja je 1970. godine poslala prve podatke sa površine Venere. Venera 7 je uspela da preživi samo oko 23 minuta zbog ogromnih uslova na površini planete, ali to je bio veliki korak u istraživanju Venerine atmosfere.</li><br>`

venus.addEventListener("click", () => {
    if (completedMercury) {
        clickedVenus = 1
        opisText.click()
        body.style.overflowX = "hidden";
        nazivPlanete.textContent = "Venera - StellarQuest"
        opisDiv.innerHTML = veneraOpis;
        galerijaDiv.innerHTML = veneraGalerija
        zanimljivostiDiv.innerHTML = veneraZanimljivosti
        info.style.display = "flex";
        if (!completedVenus) {
            game.style.display = "flex";
            info.style.display = "none";
            playingGame = 1
            gameMatrix = [
                [1, 6, 0, 5, 0, 0, 6, 0, 0, 5],
                [6, 6, 0, 5, 0, 0, 4, 5, 5, 5],
                [0, 6, 0, 5, 6, 0, 0, 5, 0, 0],
                [0, 0, 0, 6, 0, 6, 0, 5, 5, 5],
                [6, 0, 0, 0, 5, 5, 0, 0, 0, 0],
                [5, 0, 0, 0, 5, 5, 0, 5, 0, 0],
                [0, 0, 0, 0, 6, 0, 0, 5, 0, 5],
                [0, 5, 5, 5, 5, 6, 6, 0, 6, 0],
                [5, 5, 0, 0, 5, 0, 6, 0, 0, 0],
                [5, 0, 0, 0, 5, 2, 0, 0, 5, 5]

            ]
            play()
        }
    }
})

let zemljaOpis = `<p>
  Zemlja (simbol: 🜨) je treća planeta po udaljenosti od Sunca i jedina poznata planeta u svemiru na kojoj postoji život. Prema radiometrijskom računanju i mišljenju da je ceo Sunčev sistem nastao u jednom procesu, procenjuje se da se Zemlja formirala pre više od 4,5 milijardi godina, što je utvrđeno određivanjem vremena poluraspada urana i torijuma.
</p>
<p>
  Gravitacija Zemlje međusobno deluje sa drugim objektima u svemiru, posebno sa Suncem i Mesecom, jedinim prirodnim satelitom Zemlje, koji je počeo da kruži oko Zemlje pre 4,53 milijardi godina. Gravitaciono delovanje između Zemlje i Meseca uzrokuje okeanske plime i oseke, stabilizuje orijentaciju Zemlje oko svoje ose i postepeno usporava istu. Zemlja je najgušća planeta u Sunčevom sistemu i najveća od četiri terestričke planete.
</p>
<p>
  Zemlja se jednom okrene oko Sunca u 365,26 dana, period poznat kao Zemljina godina. Tokom ovog perioda, Zemlja se okrene oko svoje ose oko 366,26 puta (što je jednako cifri od 365,26 solarnih dana). Zemljina osa rotacije se nalazi pod nagibom od arcsin0,397776995 ≈ 23,4392811° (trenutno se smanjuje konstantnom ugaonom brzinom od ≈ 0,01305˙° = 47″ po veku). Jedna od najvažnijih posledica ovog nagiba je menjanje godišnjih doba na Zemlji.
</p>
<p>
  Litosfera Zemlje je podeljena na nekoliko krutih tektonskih ploča koje migriraju na površini tokom mnogo miliona godina. Zemlja je jedina planeta Sunčevog sistema gde voda može da opstane u tečnom stanju. Oko 71% površine Zemlje je pokriveno vodom, uglavnom okeanima. Preostalih 29% je kopno koja čine kontinenti i ostrva koja imaju brojna jezera, reke i druge izvore vode koji doprinose hidrosferi. Većina polarnih područja Zemlje pokrivena je ledom, uključujući ledenu ploču Antarktika i morski led Arktika.
</p>
<p>
  Unutrašnjost Zemlje je aktivna sa unutrašnjim jezgrom od čvrstog gvožđa i tečnim spoljašnjim jezgrom koji generiše magnetno polje Zemlje i konvekcioni mantl koji pokreće tektonske ploče. Magnetsko polje zajedno sa atmosferom, štiti od radijacije, štetne po živa bića koja naseljavaju planetu. Atmosfera takođe služi kao štit za odbijanje manjih meteoroida — prolazeći kroz atmosferu, oni sagore pre nego što stignu do Zemljine površine.
</p>
<p>
  Tokom prvih milijarda godina istorije Zemlje, život se pojavljivao u okeanima i počeo je da utiče na atmosferu i površinu Zemlje, što dovodi do proliferacije aerobnih i anaerobnih organizama. Neki geološki dokazi pokazuju da se život pojavio pre 4,1 milijarde godina. Od tada, kombinacija udaljenosti Zemlje od Sunca, fizičkih osobina i geološke istorije omogućila je životu da se razvija i napreduje. U istoriji Zemlje, biodiverzitet je prošao kroz dugotrajna proširenja, koja su povremeno praćena masovnim izumiranjima.
</p>
<p>
  Preko 99% svih vrsta koje su ikada živele na Zemlji su izumrle. Procene broja vrsta na Zemlji danas se veoma razlikuju; većina vrsta nisu opisana. Preko 7,6 milijardi ljudi živi na Zemlji i zavisi od njene biosfere i prirodnih resursa za svoj opstanak. Ljudi su razvili različita društva i kulture; politički, u svetu ima oko 200 suverenih država.
</p>`

let zemljaGalerija = `<img src="images/earth1.webp" alt="">
             <img src="images/earth2.webp" alt="">
             <img src="images/earth3.jpg" alt="">
             <img src="images/earth4.jpg" alt="">`

let zemljaZanimljivosti = '<ul> <li>Zemlja nije savršeno okrugla – Zbog rotacije, Zemlja je spljoštena na polovima i izbočena na ekvatoru, pa je oblik zapravo geoid.</li><br> <li>Oceani pokrivaju oko 71% površine – To znači da više od dve trećine Zemlje je prekriveno vodom, a ostatak su kopnene mase.</li><br> <li>Atmosfera sadrži 78% azota – Iako je 21% atmosfere kiseonik, preostali deo je uglavnom azot, dok ostali gasovi čine manji procenat.</li><br> <li>Magnetno polje štiti život na Zemlji – Zemljin magnetni štit nas štiti od štetnih solarnih čestica i kosmičkog zračenja.</li><br> <li>Zemljina kora je vrlo tanka u odnosu na ostatak planete – Debljina Zemljine kore iznosi samo 5 do 70 km, dok jezgro može biti i do 3.500 km duboko.</li><br> <li>Postoji više od 8 milijardi tona ugljen-dioksida u Zemljinoj atmosferi – Iako ugljen-dioksid čini samo 0,04% atmosfere, njegova koncentracija ima veliki uticaj na klimu.</li><br> <li>Na Zemlji postoje "plutajuće" kontinentne ploče – Teren se stalno pomera zbog kretanja tektonskih ploča, što uzrokuje zemljotrese i vulkanske erupcije.</li><br> <li>Najveća planina na Zemlji je na dnu okeana – Planina "Mauna Kea" na Havajima je najviša planina na Zemlji ako se meri od temelja na morskom dnu, sa visinom od više od 10.000 metara.</li><br> <li>Postoji više od 1.500 aktivnih vulkana na Zemlji – Iako neki vulkani ne eruptiraju često, na planeti se stalno javlja vulkanska aktivnost.</li><br> <li>Zemljina brzina rotacije nije konstantna – Zbog gravitacionih uticaja Meseca, Zemlja se usporava, a dan postepeno postaje duži. Iako vrlo polako, dan je od vremena dinosaura produžen za oko 2 milisekunde.</li><br> <li>Zemlja je jedini poznati svet sa tečnom vodom na površini – Usmeravanje temperature i atmosferski uslovi omogućavaju postojanje tečne vode, što je ključno za život.</li><br> <li>Najveća pustinja na svetu nije Sahara – Najveća pustinja je Antarktik, jer se smatra pustinjom zbog veoma niske količine padavina, uprkos tome što je prekriven snegom.</li><br> <li>Zemlja ima 4 glavna sloja – Kore, mantija, spoljašnji jezgro i unutrašnje jezgro, pri čemu je unutrašnje jezgro od čelika i nikla, dok je spoljašnje tečno.</li><br> <li>Zemljin magnetizam se menja – Polovi Zemljinog magnetnog polja s vremena na vreme menjaju svoju poziciju, što se naziva magnetnim poljskim obrtom.</li><br> </ul>'

earth.addEventListener("click", () => {
    if (completedVenus) {
        opisText.click()
        clickedEarth = 1
        body.style.overflowX = "hidden";
        nazivPlanete.textContent = "Zemlja - StellarQuest"
        opisDiv.innerHTML = zemljaOpis;
        galerijaDiv.innerHTML = zemljaGalerija
        zanimljivostiDiv.innerHTML = zemljaZanimljivosti
        info.style.display = "flex";
        if (!completedEarth) {
            game.style.display = "flex";
            info.style.display = "none";
            playingGame = 1
            gameMatrix = [
                [0, 0, 6, 5, 0, 0, 0, 0, 0, 5],
                [0, 0, 4, 5, 1, 0, 0, 5, 5, 5],
                [6, 0, 6, 5, 0, 0, 0, 5, 0, 0],
                [0, 6, 0, 6, 0, 0, 0, 5, 5, 5],
                [0, 6, 6, 0, 5, 5, 0, 6, 0, 6],
                [5, 0, 0, 0, 5, 5, 0, 5, 6, 8],
                [0, 0, 0, 0, 0, 6, 0, 5, 0, 5],
                [0, 5, 5, 5, 5, 0, 6, 0, 6, 0],
                [5, 5, 0, 0, 5, 0, 6, 0, 0, 0],
                [5, 2, 0, 0, 5, 0, 6, 0, 5, 5]
            // 0 - free
            // 1 - astronaut
            // 2 - kljuc
            // 3 - astronaut sa kljucem
            // 4 - kovceg
            // 5 - void
            // 6 - asteroid
            // 7 - portal
            // 8 - portal_token
            // 9 - vanzemaljac
            // 10 - vanzemaljac_token
            ]
            play()
        }
    }
})

let marsOpis = `
<p>
  Mars (simbol: ♂) je četvrta planeta po udaljenosti od Sunca i druga najmanja u Sunčevom sistemu, nakon Merkura. Dobila je ime po rimskom bogu rata — Marsu. Takođe se naziva i „Crvenom planetom”, jer na površini preovladava gvožđe(III) oksid koji planeti daje crvenkastu boju.
</p>
<p>
  Mars je terestrička planeta sa tankom atmosferom, i površinskim odlikama koje podsećaju na Mesec — udarni krateri, i na Zemlju — vulkanske kupe, doline, pustinje i polarne ledene kape. Period rotacije i godišnja doba na Marsu su takođe slična onima na Zemlji, a sličan je i nagib ose rotacije planete koji uslovljava godišnja doba.
</p>
<p>
  Na Marsu se nalazi Olimp (Olimpus Mons) — najveći vulkan i za sada druga najviša planina u Sunčevom sistemu (najviša na nekoj od planeta), kao i Dolina Marinera — jedan od najvećih kanjona u Sunčevom sistemu. Depresija Borealis na severnoj polulopti zauzima 40% površine planete i moguće je da je nastala velikim udarom drugog nebeskog tela u Mars tokom formiranja Sunčevog sistema. Mars ima dva prirodna satelita — Fobos i Dejmos, koji su malih dimenzija i nepravilnog oblika. Moguće je da su oni u stvari uhvaćeni asteroidi, nalik asteroidu 5261 Eureka koji je Marsov trojanac.
</p>
<p>
  Sve do prvog uspešnog proleta sonde Mariner 4 pored Marsa 1965. godine, mnogo se pričalo o prisustvu vode u tečnom stanju na površini. Ova nagađanja bila su zasnovana na periodičnim promenama svetlih i tamnih predela na površini, naročito oko polarnih regiona; posmatrači, predvođeni Đovanijem Skjaparelijem i Persivalom Louelom, zaključili su da su to mora i kontinenti. Za duge, tamne linije koje su posmatrači videli kroz svoje teleskope smatralo se da su kanali za navodnjavanje koji su se protezali preko cele površine, i da ih je izgradila civilizacija daleko naprednija od ljudske na Zemlji.
</p>
<p>
  Za ove linije se kasnije pokazalo da su bile optička varka, mada areološki dokazi prikupljeni robotizovanim sondama poslatim na površinu ukazuju da je Mars u dalekoj prošlosti dobrim delom bio prekriven vodenim prostranstvima. Tokom 2005. godine radarski podaci prikupljeni iz orbite ukazali su na velike količine leda na polovima, ali i na nižoj areografskoj širini.
</p>
<p>
  Marsovski rover Spirit otkrio je 2007. godine u prikupljenim uzorcima hemijska jedinjenja koja sadrže vodene molekule. Lender Feniks je 31. jula 2008. prikupio direktne uzorke leda koji se nalazio neposredno ispod površine na mestu na kojem se sonda spustila. Agencija Nasa je 28. septembra 2015. objavila dokaze o prisustvu tečne slane vode na površini Marsa u letnjim mesecima.
</p>`

let marsGalerija = `<img src="images/mars1.webp" alt="">
            <img src="images/mars2.png" alt="">
            <img src="images/mars3.jpg" alt="">
            <img src="images/mars4.webp" alt="">`

let marsZanimljivosti = `
<ul>
  <li>Vulkan Olympus Mons na Marsu je najveći vulkan u Sunčevom sistemu i gotovo tri puta je viši od Mount Everesta.</li><br>
  <li>Na Marsu se nalazi najveći kanjon u Sunčevom sistemu, Valles Marineris, koji je dug oko 4.000 km i dubok do 7 km.</li><br>
  <li>Godina na Marsu traje otprilike 687 Zemaljskih dana, što znači da je marsovska godina gotovo duža od Zemaljske.</li><br>
  <li>Marsova atmosfera je 100 puta tanja od Zemljine, a većinu čini ugljen-dioksid.</li><br>
  <li>Na Marsu postoje polarni lednici koji se sastoje od smrznute vode i CO2, a tokom zime se CO2 kondenzuje i formira „suvi led“.</li><br>
  <li>Temperatura na Marsu varira, ali prosečna temperatura je oko -60°C, iako može pasti i do -125°C na polovima tokom zime.</li><br>
  <li>U prošlosti, Mars je verovatno imao vodene tokove i jezera, što sugeriše da je planet mogao imati uslove za život u davnoj prošlosti.</li><br>
  <li>U 1976. godini, sonda Viking 1 poslala prve slike površine Marsa, a tokom misije su također testirani uzorci tla u potrazi za mikrobiološkim životom.</li><br>
  <li>Mars je poznat po svojim peskovitim olujama koje mogu pokriti celo površinu planeta i trajati mesecima.</li><br>
  <li>Prvi rover koji je uspešno sleteo na Mars bio je Sojourner, 1997. godine, a poslednji rover, Perseverance, sleteo je 2021. godine kako bi istraživao mogućnost života i prikupljao uzorke tla.</li><br>
</ul>`

mars.addEventListener("click", () => {
    if (completedEarth) {
        clickedMars = 1
        opisText.click()
        body.style.overflowX = "hidden";
        nazivPlanete.textContent = "Mars - StellarQuest"
        opisDiv.innerHTML = marsOpis;
        galerijaDiv.innerHTML = marsGalerija
        zanimljivostiDiv.innerHTML = marsZanimljivosti
        info.style.display = "flex";
        if (!completedMars) {
            game.style.display = "flex";
            info.style.display = "none";
            playingGame = 1
            gameMatrix = [
                [0, 0, 0, 5, 6, 6, 6, 0, 0, 5],
                [0, 0, 0, 5, 6, 4, 6, 5, 5, 5],
                [0, 6, 6, 5, 6, 6, 6, 5, 0, 0],
                [6, 0, 0, 6, 0, 0, 0, 5, 5, 5],
                [6, 0, 6, 6, 5, 5, 0, 0, 0, 0],
                [5, 6, 0, 0, 5, 5, 0, 5, 0, 0],
                [0, 0, 0, 6, 6, 0, 0, 5, 0, 5],
               [10, 5, 5, 5, 5, 0, 0, 6, 6, 0],
                [5, 5, 0, 0, 5, 0, 0, 6, 0, 2],
                [5, 0, 0, 0, 5, 1, 0, 0, 5, 5]
            // 0 - free
            // 1 - astronaut
            // 2 - kljuc
            // 3 - astronaut sa kljucem
            // 4 - kovceg
            // 5 - void
            // 6 - asteroid
            // 7 - portal
            // 8 - portal_token
            // 9 - vanzemaljac
            // 10 - vanzemaljac_token
            ]
            play()
        }
    }
})

let jupiterOpis = `

<p>
  Jupiter (lat. Iuppiter; grč. Δίας; simbol: ♃) predstavlja jednu od 8 planeta Sunčevog sistema i ujedno najmasivnije nebesko telo u celom Sunčevom sistemu posle Sunca. Sa masom od oko 1,8986×10²⁷ kg, do 2,5 puta je masivniji od preostalih 7 planeta zajedno, odnosno njegova masa čini nešto više od hiljaditog dela mase Sunca, ili 317,8 Zemljinih masa.
</p>
<p>
  Peta je planeta po udaljenosti od Sunca i pripada grupaciji planeta poznatih kao gasoviti džinovi (u literaturi poznate i kao Planete Jupiterovog tipa ili Jovijanske planete), zajedno sa Saturnom, Uranom i Neptunom. Od Sunca je udaljen u proseku oko 5,20 AJ, odnosno oko 778.330.000 km.
</p>
<p>
  Sa vrednostima prividne magnitude od −1,6 do −2,94 četvrto je najsjajnije nebesko telo gledano sa površine Zemlje (posle Sunca, Meseca i Venere). Njegovo postojanje utvrdili su još drevni astronomi antičkog perioda, a ime planete potiče od vrhovnog starorimskog božanstva Jupitera (starogrčki ekvivalent je bog Zevs).
</p>
<p>
  Kao gasoviti džin, Jupiter je najvećim delom izgrađen od gasova i manjim delom od tekućih elemenata, sa dominantnim udelom vodonika (H₂) i helijuma (He). U znatnijoj meri u strukturi planete se nalaze i metan (CH₄), amonijak (NH₃), vodonik deuterid (HD), etan (C₂H₆) i voda (H₂O). Moguće je da ima kamenito jezgro sačinjeno od težih elemenata koji se nalaze pod velikim pritiskom.
</p>
<p>
  Zbog gasovite građe, površina Jupitera nije jasno definisana i na planeti ne postoje oblici reljefa karakteristični za terestričke planete, a samim tim i gustina planetarne mase je znatno manja u poređenju sa istom grupacijom planeta. Prosečna gustina Jupitera je 1,326 gr/cm³, što je i do 4 puta manje u odnosu na gustinu Venere (5,243 gr/cm³) i Merkura (5,427 gr/cm³).
</p>
<p>
  Zbog velike brzine rotacije, planeta ima elipsoidan oblik i dosta je spljoštena na polovima, a ispupčena na ekvatoru. Razlika između ekvatorijalnog (71.492±4 km) i polarnog poluprečnika (66.854±10 km) je oko 4.638 km.
</p>
<p>
  Jupiter je planeta sa najdebljim slojem atmosfere među svim planetama Sunčevog sistema, a njegova atmosfera se pruža u visine do preko 5.000 km. Kako planeta nema čvrstu podlogu, donjom granicom atmosfere se smatra tačka na kojoj atmosferski pritisak ima vrednost od 10 bara (1 МРа). Cela atmosfera je veoma aktivna i turbulentna, a karakterišu je veoma jaki vetrovi brzina do 500 km/čas. Najkarakterističnija pojava vezana za atmosferu Jupitera je Velika crvena pega, gigantska oluja ovalnog oblika čije postojanje je utvrđeno još u XVII veku.
</p>`

let jupiterGalerija = `<img src="images/jupiter1.jpg" alt="">
            <img src="images/jupiter2.webp" alt="">
            <img src="images/jupiter3.webp" alt="">
            <img src="images/jupiter4.webp" alt="">`


let jupiterZanimljivosti = `<ul> <li>Jupiter je peta planeta od Sunca i najveća planeta u Sunčevom sistemu, sa masom koja je više od dve i po puta veća od mase svih drugih planeta zajedno.</li><br> <li>Jupiter je gasni div, što znači da se uglavnom sastoji od gasa i tečnosti, a nema čvrstu površinu kao Zemlja.</li><br> <li>Jupiter ima najjače magnetno polje u Sunčevom sistemu, koje je 14 puta snažnije od Zemljinog.</li><br> <li>Jedna od najpoznatijih osobitosti Jupitera je Velika crvena pečat, ogromna oluja koja traje više od 400 godina i šira je gotovo tri puta od prečnika Zemlje.</li><br> <li>Jupiterovi vetrovi mogu dostići brzine do 400 km/h, a planeta je domaćin moćnim olujama i vrtlozima.</li><br> <li>Jupiter ima najmanje 79 poznatih meseca, a Ganimed je najveći mesec u Sunčevom sistemu, veći čak od planete Merkur.</li><br> <li>Mesec Europa ima ledenu koru ispod koje se verovatno nalazi podzemni okean, što izaziva spekulacije o mogućim uslovima za život.</li><br> <li>Jupiterova atmosfera je uglavnom sastavljena od vodonika i helijuma, a njeni oblaci formiraju karakteristične pruge koje su rezultat različitih brzina vetrova u različitim slojevima atmosfere.</li><br> <li>Jupiter ima najkraći dan u Sunčevom sistemu, rotira se za samo oko 10 sati, što izaziva širenje njegove ekvatorijalne regije.</li><br> <li>Jupiterova gravitacija je toliko snažna da je pomogla u formiranju Sunčevog sistema i stabilizaciji orbita drugih planeta, uključujući Zemlju.</li><br> <li>Jupiter je stvorio gravitacionu barijeru koja je pomogla u zaštiti unutrašnjih planeta od kometa i asteroida.</li><br> <li>Jupiter se vrti oko Sunca za 11,9 Zemaljskih godina, a njegova orbita je veoma velika zbog njegove ogromne veličine.</li><br> <li>Jupiter ima najviše prirodnih satelita među planetama, većina kojih su mali meseci nepravilnog oblika.</li><br> </ul>`


jupiter.addEventListener("click", () => {
    if (completedMars) {
        clickedJupiter = 1
        opisText.click()
        body.style.overflowX = "hidden";
        nazivPlanete.textContent = "Jupiter - StellarQuest"
        opisDiv.innerHTML = jupiterOpis;
        galerijaDiv.innerHTML = jupiterGalerija
        zanimljivostiDiv.innerHTML = jupiterZanimljivosti
        info.style.display = "flex";
        if (!completedJupiter) {
            game.style.display = "flex";
            info.style.display = "none";
            playingGame = 1
            gameMatrix = [
                [0, 0, 0, 5, 0, 0, 6, 0, 0, 5],
                [0, 0, 0, 5, 0, 0, 0, 5, 5, 5],
                [0, 6, 0, 5, 6, 0, 6, 5, 0, 2],
                [0, 0, 0, 0, 0, 6, 0, 5, 5, 5],
                [0, 0, 6, 6, 5, 5, 0, 6, 6, 0],
                [5, 6, 6, 6, 5, 5, 0, 5, 0, 8],
                [0, 6, 0, 6, 10,0, 0, 5, 0, 5],
                [1, 5, 5, 5, 5, 6, 0, 0, 6, 0],
                [5, 5, 0, 0, 5, 0, 6, 0, 0, 0],
                [5, 4, 0, 0, 5, 0, 0, 0, 5, 5]
            // 0 - free
            // 1 - astronaut
            // 2 - kljuc
            // 3 - astronaut sa kljucem
            // 4 - kovceg
            // 5 - void
            // 6 - asteroid
            // 7 - portal
            // 8 - portal_token
            // 9 - vanzemaljac
            // 10 - vanzemaljac_token
            ]
            play()
        }
    }
})

let saturnOpis = `<p>
  Saturn (simbol: ♄) je šesta planeta u Sunčevom sistemu. Saturn je udaljen 9,54 AJ ili 1.429.400.000 km od Sunca, ima prečnik 120.536 km (ekvator) i masu 5,68 × 10²⁶ kg. Saturn je po veličini druga planeta Sunčevog sistema nakon Jupitera. Obiđe Sunce za 29,5 godina na srednjoj udaljenosti 1,426 · 10⁹ km.
</p>
<p>
  Telo mu je znatno spljošteno (ekvatorski prečnik 120.536 km, polarni prečnik 108.728 km), tako da je najspljošteniji među planetama. Masa mu je 95 puta veća od Zemljine. Jedina je planeta čija je gustina manja od gustine vode (690 kg/m³).
</p>
<p>
  Saturn se sastoji pretežno od vodonika i helijuma (jednak odnos kao kod Jupitera). Ispod gasovite atmosfere prostire se sloj molekularnog vodonika s nešto zamrznute materije (u kojoj ima tragova metana, amonijaka i drugih supstanci), zatim sloj metalnog vodonika, te središte sa stenovitom jezgrom. Temperatura je u središtu vrlo visoka (12.000 K), pa je to Saturnov izvor energije uporediv s energijom koju prima Sunčevim zračenjem; temperature oblačnog sloja iznosi –130 °C, dok bi temperatura samo zbog doprinosa Sunčevog zračenja bila –170 °C.
</p>
<p>
  U atmosferi se primećuju svetliji i tamniji oblaci uporedni s ekvatorom, manje istaknuti nego kod Jupitera, jer se, zbog niže temperature, stvaraju bliže središtu planete. Među oblacima se opažaju vrtlozi, kao Velika bela pega. Infracrveno zračenje otkriva topliji polarni vrtlog, vruću pegu. Brzina vetra iznosi do 500 m/s. U ekvatorskom području planeta se vrti s periodom od 10 h 14 min, a središte se, prema podacima prikupljenim pomoću radio talasa, vrti s periodom od 10 h 39 min 22 s.
</p>
<p>
  Saturn ima prostrano magnetno polje, čiji je magnetni moment 600 puta veći od Zemljinog, a magnetna indukcija na površini iznosi oko 50 μT. Za razliku od Jupitera, osa vrtnje mu je primetno nagnuta. Oko Saturna zabeleženo je 62 prirodna satelita, od kojih je 7 zaokruženo delovanjem vlastite gravitacije (u stvarnosti ima ih više od 150). Neki od njih su (po udaljenosti od središta planeta): Pan, Atlas, Prometej, Pandora, Epimetej, Jan, Mimas, Enkelad, Tetida, Telesto, Kalipso, Diona, Helena, Reja, Titan, Hiperion, Japet, Feba.
</p>
<p>
  Karakteristika Saturna su prstenovi koji ga opasuju u 7 pojaseva, a svaki prsten nosi slovo abecede od A do F. Razmaci između pojaseva nose imena po astronomima koji su ih otkrili (Kasini, Gverin, Hajgens, Maksvel, Enke). Kao i Jupiter, Saturn ima mnogo satelita. Osim satelita, u ravnini Saturnovog ekvatora kruži ogroman broj satelitskih čestica, koje čine koncentrične prstene.
</p>
<p>
  Saturnove prstene je prvi video Kristijan Hajgens 1655. Glavni deo prstena, prečnika 275.000 km, deli se na prsten A (spoljašnji) i prsten B (srednji), između kojih je Kasinijeva pukotina, te prsten C (unutrašnji). Prsten D nalazi se najbliže planeti, dok se dalje od glavnog dela nalazi tanak prsten F (sastavljen od vrpci), širi prsten G i najširi E, usred koga se kreće prirodni satelit Enkelad. Debljina glavnog dela prstena je 1 km.
</p>
<p>
  Čine ga uglavnom ledene i donekle stenovite čestice, obim kojih se kreće od praha pa do tela metarskog prečnika. Na oblik i delovanje prstena utiču sateliti svojom gravitacijom.
</p>`

let saturnGalerija = `<img src="images/saturn1.jpg" alt="">
            <img src="images/saturn2.jpg" alt="">
            <img src="images/saturn3.jpg" alt="">
            <img src="images/saturn4.jpg" alt="">
            <img src="images/saturn5.webp" alt="">
            <img src="images/saturn6.webp" alt="">`

let saturnZanimljivosti = `<ul> <li>Saturn je šesta planeta od Sunca i druga najveća planeta u Sunčevom sistemu, nakon Jupitera.</li><br> <li>Planeta je poznata po svojim spektakularnim prstenovima, koji se sastoje od leda i prašine.</li><br> <li>Saturn ima najmanju gustinu među svim planetama u Sunčevom sistemu, čak je manja od gustine vode. Teoretski, mogao bi plivati u ogromnoj kadi!</li><br> <li>Planeta je plinoviti div, što znači da nema čvrstu površinu. Sastoji se uglavnom od vodonika i helija.</li><br> <li>Saturn ima više od 80 prirodnih satelita, a najpoznatiji je Titan, najveći Saturnov mesec.</li><br> <li>Na Saturnu duvaju vetrovi koji mogu doseći brzinu do 1.800 km/h, što je mnogo brže od najjačih vetrova na Zemlji.</li><br> <li>Saturnov magnetski polje je dvostruko jače od Jupitrovog, a njegova radijacija može biti opasna za svemirske sonde.</li><br> <li>Jedan dan na Saturnu traje oko 10,7 sati, što je mnogo kraće od dana na Zemlji.</li><br> <li>Saturn je bio poznat već u antičko doba, a naziv potiče od rimskog boga poljoprivrede, Saturna.</li><br> <li>Saturnovi prstenovi nisu večni i postupno se smanjuju, jer čestice iz prstena padaju na planetu ili beže u svemir.</li><br> <li>Saturn ima više od 150 prstenova, ali su svi vrlo tanki – debljina prstena je samo nekoliko kilometara.</li><br> <li>Na Saturnu je temperatura na vrhu oblaka oko -180°C, što ga čini jednim od najhladnijih planeta u Sunčevom sistemu.</li><br> <li>Saturnov mesec Enceladus ima gejzire koji izbacuju vodu i pare, što ukazuje na postojanje podzemnih okeana.</li><br> <li>Saturn se rotira oko svoje ose veoma brzo, što stvara jedinstvene oluje, kao što je “Velika beličasta oluja” koja se povremeno pojavljuje na planeti.</li><br> <li>Saturnov prsten je toliko veliki da bi mogao da stane između Zemlje i Meseca, ali je izuzetno tanak – debljina prstena je samo oko 1 km.</li><br> <li>U Saturnovom sistemu postoji mesec Mimas, koji podseća na smotanu kuglu sa velikim kraterom na površini, zbog kojeg ga često zovu “Death Star” mesec.</li><br> <li>Saturn je, kao i Jupiter, masivna planeta koja je verovatno pomogla u oblikovanju Sunčevog sistema svojom gravitacijom, utičući na putanje drugih objekata.</li><br> <li>Planeta Saturn je domaćin jedne od najvećih oluja u Sunčevom sistemu, tzv. "Great White Spot", koja se javlja svakih 30 godina.</li><br> </ul>


`

saturn.addEventListener("click", () => {
    if (completedJupiter) {
        clickedSaturn = 1
        opisText.click()
        body.style.overflowX = "hidden";
        nazivPlanete.textContent = "Saturn - StellarQuest"
        opisDiv.innerHTML = saturnOpis;
        galerijaDiv.innerHTML = saturnGalerija
        zanimljivostiDiv.innerHTML = saturnZanimljivosti
        info.style.display = "flex";
        if (!completedSaturn) {
            game.style.display = "flex";
            info.style.display = "none";
            playingGame = 1
            gameMatrix = [
                [0, 0, 0, 5, 4, 0, 0, 0, 2, 5],
                [0, 6, 8, 5, 6, 6, 0, 5, 5, 5],
                [0, 0, 6, 5, 0, 0, 0, 5, 0, 0],
                [0, 6, 0, 6, 6, 0, 0, 5, 5, 5],
                [0, 6, 0, 0, 5, 5, 6, 0, 6, 0],
                [5, 6, 6, 6, 5, 5, 0, 5, 6, 1],
                [0, 0, 0, 0, 0, 0, 0, 5, 0, 5],
                [0, 5, 5, 5, 5, 6, 0, 6, 0, 0],
                [5, 5, 0, 0, 5, 0, 6, 0, 0, 0],
                [5, 10,0, 0, 5, 0, 0, 0, 5, 5]
            // 0 - free
            // 1 - astronaut
            // 2 - kljuc
            // 3 - astronaut sa kljucem
            // 4 - kovceg
            // 5 - void
            // 6 - asteroid
            // 7 - portal
            // 8 - portal_token
            // 9 - vanzemaljac
            // 10 - vanzemaljac_token
            ]
            play()
        }
    }
})

let uranOpis = `<p>
  Uran (simbol: ⛢) je sedma planeta od Sunca, treća najveća i četvrta najmasivnija planeta u Sunčevom sistemu. Dobio je ime po starogrčkom božanstvu neba Uranu, ocu Hrona (Saturna) i dedi Zevsa (Jupitera). Uran je prva planeta otkrivena u modernim vremenima. Iako je vidljiv golim okom kao i ostale ranije otkrivene planete, posmatrači ga nisu priznavali za planetu zbog njegove slabe vidljivosti.
</p>
<p>
  Vilhelm Heršel je objavio njegovo otkriće 13. marta 1781, proširivši poznate granice Sunčevog sistema po prvi put u novijoj istoriji. Uran je takođe prva planeta otkrivena teleskopom.
</p>
<p>
  Uran i Neptun imaju drugačiji unutrašnji i atmosferski sastav od većih gasovitih divova Jupitera i Saturna. Zbog toga ih astronomi ponekad svrstavaju u posebnu kategoriju „ledeni divovi“. Uranova atmosfera, iako je poput Jupiterove i Saturnove sastavljena pretežno od vodonika i helijuma, sadrži i velike procente vodenog, amonijačnog i metanskog leda, uz uobičajene tragove ugljovodonika.
</p>
<p>
  Atmosfera Urana je najhladnija planetarna atmosfera u Sunčevom sistemu, uz najnižu temperaturu od 49 K (−224 °C). Atmosfera ima složenu slojevitu strukturu, sa vodom za koju se misli da čini najniže oblake, a za metan se misli da čini najviše slojeve oblaka.
</p>
<p>
  Kao i ostale planete-džinovi, i Uran ima sistem prstenova (do sada otkriveno 13), magnetosferu i 27 satelita. Uranov sistem ima jedinstvenu konfiguraciju među planetama Sunčevog sistema, pošto je njegova osa rotacije položena na bok, skoro u ravan njegove revolucije oko Sunca; njegov južni i severni pol leže tamo gde je većini planeta ekvator.
</p>
<p>
  Slike sa Vojadžera 2 su prikazale Uran kao nezanimljivu planetu bez oblaka ili oluja koje su imale druge planete-džinovi. Međutim, posmatrači sa Zemlje su nedavnih godina primetili znake sezonskih promena i pojačane aktivnosti vetra, kada se Uran približi svojoj ravnodnevnici.
</p>
`

let uranGalerija = `<img src="images/uranus1.jpg" alt="">
            <img src="images/uranus2.png" alt="">
            <img src="images/uranus3.avif" alt="">
            <img src="images/uranus4.jpg" alt="">`

let uranZanimljivosti = `<ul> <li>Uran je sedma planeta od Sunca i 
treći najveći planet u Sunčevom sistemu, ali je često zanemaren 
zbog svoje udaljenosti i slabije vidljivosti.</li><br> <li>Uran je 
jedina planeta u Sunčevom sistemu koja se rotira "na boku". 
Njegova osa rotacije je nagnuta skoro 98 stepeni u odnosu na 
ravninu njegove orbite, što znači da se praktično kotrlja oko Sunca.
</li><br> <li>Uran ima 27 poznatih prirodnih satelita, a neki od njih su 
veoma interesantni, poput Titanije, Oberona, Umbre i Miranda.</li><br> 
<li>Uran je planet sa najhladnijom atmosferom u Sunčevom sistemu, sa prosečnom temperaturom od oko -224°C. To je niže od temperature na Neptunu, koji je dalje od Sunca!</li><br> <li>Atmosfera Urana je pretežno sastavljena od vodonika, helijuma i metana, koji mu daje prepoznatljivu plavetnilu boju. Metan apsorbuje crvenu svetlost, pa reflektuje plavu i zelenu svetlost.</li><br> <li>Uran je prvi planet otkriven teleskopom. Otkrio ga je 13. marta 1781. godine Wilhelm Herschel, proširujući granice Sunčevog sistema i menjajući način na koji smo posmatrali svemir.</li><br> <li>Uran je planet sa 13 prstenova, koji su manji i tamniji nego prsteni Saturna. Oni su vrlo slabi, a neki su formirani od sitnih čestica prašine i leda.</li><br> <li>Uran je često označavan kao "ledeni div", jer se, za razliku od gasovitih divova poput Jupitera i Saturna, sastoji od većih količina leda (metanskog, amonijačnog i vodenog) u svom unutrašnjem sastavu.</li><br> <li>Uran je jedina planeta koja je doživela direktno istraživanje s pomoćom sonde – NASA-ina sonda *Voyager 2* je prošla pored Urana 1986. godine i poslala dragocene podatke.</li><br> <li>Uranov magnetni polje je veoma neobično – nije centrirano sa planetom, već je pomaknuto i nagnuto pod velikim uglom, gotovo kao da planeta "plesa" oko svog magnetnog polja.</li><br> <li>Oko Urana je otkriveno 13 prstenova, iako nisu toliko istaknuti kao Saturnovi prsteni. Ipak, njihova postojanja su važna za razumijevanje formiranja planetarnih sistema.</li><br> <li>Uran je jedan od dva planeta (pored Neptuna) koji nemaju jasno definisane oblake u atmosferi, kao što to imaju Jupiter i Saturn. Umesto toga, Uranova atmosfera je složena i vrlo tanka.</li><br> <li>Za razliku od Jupitera i Saturna, Uran je planet sa relativno slabim vetrima. Iako vjetrovi mogu doseći brzine do 900 km/h, oni nisu toliko izraženi kao na drugim planetama-džinovima.</li><br> <li>Uranova revolucija traje oko 84 Zemljine godine. Zbog svoje nagnute ose, svaki "sezon" na Uranu traje oko 21 Zemljinu godinu.</li><br> </ul>`




uranus.addEventListener("click", () => {
    if (completedSaturn) {
        clickedUranus = 1
        opisText.click()
        body.style.overflowX = "hidden";
        nazivPlanete.textContent = "Uran - StellarQuest"
        opisDiv.innerHTML = uranOpis;
        galerijaDiv.innerHTML = uranGalerija
        zanimljivostiDiv.innerHTML = uranZanimljivosti
        info.style.display = "flex";
        if (!completedUranus) {
            game.style.display = "flex";
            info.style.display = "none";
            playingGame = 1
            gameMatrix = [
                [0, 0, 0, 5, 10,0, 0, 0, 0, 5],
                [0, 6, 0, 5, 0, 0, 6, 5, 5, 5],
                [0, 0, 10,5, 0, 6, 0, 5, 0, 4],
                [0, 6, 0, 6, 6, 0, 6, 5, 5, 5],
                [0, 6, 6, 0, 5, 5, 0, 0, 0, 0],
                [5, 0, 6, 6, 5, 5, 6, 5, 0, 6],
                [0, 6, 0, 0, 0, 0, 0, 5, 0, 5],
                [0, 5, 5, 5, 5, 6, 6, 0, 0, 6],
                [5, 5, 0, 0, 5, 6, 0, 6, 0, 0],
                [5, 2, 0, 0, 5, 1, 0, 6, 5, 5]
            // 0 - free
            // 1 - astronaut
            // 2 - kljuc
            // 3 - astronaut sa kljucem
            // 4 - kovceg
            // 5 - void
            // 6 - asteroid
            // 7 - portal
            // 8 - portal_token
            // 9 - vanzemaljac
            // 10 - vanzemaljac_token
            ]
            play()
        }
    }
})


let neptunOpis = `<p>
  Neptun (simbol: ♆) je osma planeta u Sunčevom sistemu. Udaljen je 30,06 AJ ili 4.504.000.000 km od Sunca, i ima prečnik od 49.532 km (ekvator) i masu od 1,0247 × 10²⁶ kg. Po prečniku Neptun je četvrta planeta po veličini, posle Jupitera, Saturna i Urana. Planetu Neptun opasuju prstenovi, njih ima 4: 1989N3R, 1989N2R, 1989N4R, 1989N1R. Neptunovi prstenovi su slabije izraženi nego kod Saturna ili Urana.
</p>
<p>
  Galileo Galilej je primetio Neptun 28. decembra 1612. i 27. januara 1613. Neptun je tih dana bio u gotovo nepomičnom stanju na nebu, tako da Galilej nije mogao da zaključi da je u pitanju planeta, već je mislio da je to zvezda.
</p>
<p>
  Položaj Neptuna je matematičkim kalkulacijama odredio Irben Leverije, a po tim proračunima ga je na nebu 23. septembra 1846. spazio astronom Johan Gotfrid Gale uz pomoć Hajnriha Darea. Ime je dobio po rimskom bogu mora i njegov je simbol trozubac.
</p>
<p>
  Do sada je otkriveno 14 Neptunovih prirodnih satelita. Najveći je Triton, s prečnikom od 2.706 km (otkrio ga je Vilijam Lasel 1846); njegova je staza jako nagnuta prema planetnom ekvatoru i satelit se kreće retrogradno.
</p>
<p>
  Drugi je Nereida, dok su ostali meseci znatno manji. Najvažniji su (po udaljenosti od središta planete):
</p>
<p>
  Najada (otkriven 1989), Talasa (1989), Despina (1989), Galateja (1989), Laris (1981), Protej (1989), Triton (1846), >Nereida (1949)
</p>
<p>
  Sastav Neptuna sličan je Uranovom sa zajedničkom osobinom da se razlikuje od gasovitih divova Jupitera i Saturna. Neptunova atmosfera, iako slična gasovitim divovima, uz vodonik i helijum sadrži veće količine „leda“ poput vode, amonijaka i metana. Da bi naglasila njihova glavna svojstva, astronomi Neptun i Uran ponekad nazivaju „ledenim divovima.“ Unutrašnjost planete uglavnom je sastavljena od stena i leda. Plava pojava planete rezultat je metana u atmosferi.
</p>`

let neptunGalerija = `<img src="images/neptune1.webp" alt="">
            <img src="images/neptune2.jpg" alt="">
            <img src="images/neptune3.webp" alt="">
            <img src="images/neptune4.webp" alt="">`

let neptunZanimljivosti = `<ul> <li>**Neptun je osma planeta** u Sunčevom sistemu i jedina planeta koja nije bila poznata u starom svetu. Otkriven je 1846. godine na osnovu matematičkih proračuna.</li><br> <li>**Galileo Galilej** je prvi primetio Neptun 1612. godine, ali ga je smatrao zvezdom jer planeta nije bila dovoljno jasna da bi se prepoznala kao takva.</li><br> <li>**Neptunovi prstenovi** su slabi i teško uočljivi. Otkriveno je 4 prstena, ali su mnogo manje izraženi od Saturnovih ili Uranskih prstenova.</li><br> <li>**Triton**, Neptunov najveći satelit, je jedini veliki satelit u Sunčevom sistemu koji ima retrogradnu orbitu. To znači da se kreće u suprotnom smeru od rotacije same planete, što sugeriše da je možda uhvaćen u gravitacionom polju Neptuna.</li><br> <li>**Neptun je planet sa najjačim vetrovima** u Sunčevom sistemu. Vetrovi mogu dostići brzine do 2.100 km/h, što je skoro 5 puta brže nego najbrži vetrovi na Zemlji.</li><br> <li>**Neptun je jedan od "ledenih divova"**: njegova unutrašnjost je pretežno sastavljena od leda i stena, a njegova atmosfera sadrži velike količine metana, koji mu daje karakterističnu plavu boju.</li><br> <li>**Temperatura** na Neptunu je izuzetno niska, sa prosečnom temperaturom od oko -214°C, što ga čini jednom od najhladnijih planeta u Sunčevom sistemu.</li><br> <li>**Neptun ima 14 poznatih satelita**, a neki od njih su veoma mali i neregularni. Triton je najveći i najzanimljiviji zbog svoje retrogradne orbite i gejzira koji izbacuju vodeni led u svemir.</li><br> <li>**Neptun je više od 4,5 milijardi kilometara udaljen od Sunca**, što znači da je to najdalja planeta u Sunčevom sistemu (nakon democije Plutona kao planete). Njegova orbita traje oko 165 godina.</li><br> <li>**Neptunova atmosfera** je sastavljena pretežno od vodonika, helijuma i metana, a metan apsorbuje crvenu svetlost, zbog čega planeta ima plavu boju. Takođe, atmosfera sadrži olujne sisteme i oblake metanskog leda.</li><br> <li>**Sistem prstenova Neptuna** je 1989. godine otkriven od strane NASA-ine sondе *Voyager 2*. Prstenovi su vrlo tamni i uglavnom se sastoje od prašine i sitnih čestica leda.</li><br> <li>**Neptun je ime dobio po rimskom bogu mora**, a simbol ♆ predstavlja trozubac, koji je bio bogov simbol.</li><br> <li>**Udaljenost Neptuna od Sunca** je oko 30,1 astronomske jedinice (1 AJ = 150 miliona km), što znači da svetlu sa Sunca treba oko 4 sata i 10 minuta da stigne do Neptuna.</li><br> </ul>`

neptune.addEventListener("click", () => {
    if (completedUranus) {
        clickedNeptune = 1
        opisText.click()
        body.style.overflowX = "hidden";
        nazivPlanete.textContent = "Neptun - StellarQuest"
        opisDiv.innerHTML = neptunOpis;
        galerijaDiv.innerHTML = neptunGalerija
        zanimljivostiDiv.innerHTML = neptunZanimljivosti
        info.style.display = "flex";
        if (!completedNeptune) {
            game.style.display = "flex";
            info.style.display = "none";
            playingGame = 1
            gameMatrix = [
                [0, 0, 6, 5, 0 ,0, 0, 6, 1, 5],
                [6, 0, 10,5, 6, 6, 6, 5, 5, 5],
                [0, 6, 6, 5, 0, 0, 6, 5, 0, 0],
                [0, 0, 0, 6, 0, 0, 0, 5, 5, 5],
                [0, 6, 0, 6, 5, 5, 0, 0, 0, 8],
                [5, 0, 0, 6, 5, 5, 6, 5, 6, 2],
                [0, 6, 0, 0, 0, 0, 6, 5, 6, 5],
                [0, 5, 5, 5, 5, 6, 6, 0, 0, 6],
                [5, 5, 6, 0, 5, 0, 0, 6, 0, 0],
                [5, 4, 0, 0, 5, 0, 6, 0, 5, 5]
            // 0 - free
            // 1 - astronaut
            // 2 - kljuc
            // 3 - astronaut sa kljucem
            // 4 - kovceg
            // 5 - void
            // 6 - asteroid
            // 7 - portal
            // 8 - portal_token
            // 9 - vanzemaljac
            // 10 - vanzemaljac_token
            ]
            play()
        }
    }
})


let sunceOpis = `<p>
  Sunce (simbol: ☉) je nama najbliža i najbolje proučena od svih zvezda. Oko njega kruži 8 planeta i njihovi sateliti, 5 patuljastih planeta, asteroidi, komete, meteori i čestice kosmičke prašine, tako da Sunce predstavlja središnju zvezdu Sunčevog sistema. Energija Sunca u vidu sunčeve svetlosti i toplote omogućava život na Zemlji putem procesa fotosinteze i utiče na klimu i vreme na Zemlji. Srednja udaljenost između Sunca i Zemlje je 149.600.000 km ili jedna astronomska jedinica, što svetlost pređe za 8 minuta i 18 sekundi.
</p>
<p>
  Sunce je gotovo savršena kugla (razlika između ekvatora i pola je samo 10 km) i sastoji se od gasovite vruće plazme. Ono ima jako magnetno polje. Prečnik Sunca je oko 1 392 000 km, što je 109 puta veće od Zemlje i masu od oko 2×10³⁰ kilograma, te je 330.000 teže od Zemlje, i ono sačinjava 99,86% mase celog Sunčevog sistema.
</p>
<p>
  Sunce se sastoji od vodonika (oko 74% njegove mase ili 92% njegove zapremine), helijuma (oko 24% mase i 7% zapremine) i male količine ostalih elemenata, uključujući gvožđe, nikl, kiseonik, silicijum, sumpor, magnezijum, ugljenik, neon, kalcijum i hrom.
</p>
<p>
  Sunce pripada spektralnoj klasi G2V. G2 označava da je temperatura na površini približno 5.500 °C (5.780 K), što mu daje belu boju, mada se Sunce čini žuto zbog atmosferskog rasipanja, koje uklanja talase kraćih talasnih dužina (plavu i ljubičastu svetlost) i ostavlja spektar frekvencija koje ljudsko oko opaža kao žuto.
</p>
<p>
  Ovo rasipanje daje okolnom nebu njegovu plavu boju. Kada se Sunce nalazi nisko na nebu rasipa se još više svetlosti, pa se Sunce čini narandžasto ili crveno. Sunčev spektar sadrži linije jonizovanih i neutralnih metala, kao i vrlo slabe vodonikove linije. Slovo V (rimski broj 5) u oznaci spektralne klase pokazuje da je Sunce zvezda glavnog niza. Ovo znači da ono generiše svoju energiju nuklearnom fuzijom jezgara vodonika u helijum.
</p>
<p>
  Sunce je nekada smatrano malom i beznačajnom zvezdom, ali danas je poznato da je ono svetlije od 85% zvezda u galaksiji Mlečni put, od koje su većina crveni patuljci.
</p>`


let sunceZanimljivosti = `<ul> <li>Sunce je 99,86% mase Sunčevog sistema – Oko 99,86% ukupne mase Sunčevog sistema je koncentrisano u Suncu, što znači da je njegova gravitacija ključna za kretanje svih planeta i objekata oko njega.</li><br> <li>Temperatura na površini Sunca je oko 5.500°C – Površina Sunca, poznata kao fotosfera, ima temperaturu od oko 5.500 stepeni Celzijusa, dok je temperatura u njegovoj unutrašnjosti mnogo viša, do 15 miliona stepeni.</li><br> <li>Sunčeva svetlost putuje 8 minuta do Zemlje – Svetlost koju vidimo na Zemlji putuje od Sunca oko 8 minuta i 20 sekundi, što znači da vidimo Sunce kakvo je bilo pre tih 8 minuta.</li><br> <li>Sunce je staro oko 4,6 milijardi godina – Sunce je nastalo iz oblaka plina i prašine, a procenjuje se da je staro oko 4,6 milijardi godina i da će za još 5 milijardi godina preći u fazu crvenog džina pre nego što postane beli patuljak.</li><br> <li>Sunce nije žut – Iako se često prikazuje kao žuto, Sunce zapravo emituje svetlost koja je bela. Naša atmosfera je razlog što ga vidimo žutim, jer raspršuje svetlost.</li><br> <li>Sunce proizvodi energiju putem nuklearne fuzije – Sunce stvara energiju kroz proces nuklearne fuzije, u kojem se vodonik pretvara u helijum, oslobađajući ogromnu količinu energije koja svetli i zagreva Sunce.</li><br> <li>Sunce ima "sunčevu koronu" koja je mnogo toplija od površine – Sunčeva korona, spoljašnji sloj Sunčeve atmosfere, je mnogo toplija od same površine Sunca, sa temperaturama od 1-3 miliona stepeni Celzijusa.</li><br> <li>Sunčeve sunčane baklje mogu uticati na Zemlju – Sunčeve baklje i koronalne izbacivanje mase mogu izazvati geomagnetske oluje koje mogu uticati na komunikacione sisteme, satelite i čak elektroenergetske mreže na Zemlji.</li><br> <li>Sunce se okreće – Sunce se ne okreće kao čvrsta lopta. Različiti delovi Sunca se rotiraju različitim brzinama, s ekvatorom koji se rotira brže nego polovi (oko 25 dana na ekvatoru i 35 dana na polovima).</li><br> <li>Sunce ima ogromne sunčeve pege – Sunčeve pege su hladnija područja na Sunčevoj površini koja se pojavljuju zbog intenzivnog magnetnog polja. Iako su hladnija, one su i dalje izuzetno vruće u poređenju sa Zemljom.</li><br> </ul>`

let sunceGalerija = ` <img src="images/sun1.jpg" alt="">
            <img src="images/sun2.png" alt="">
            <img src="images/sun3.jpg" alt="">
            <img src="images/sun4.webp" alt="">`


sun.addEventListener("click", () => {
    opisText.click()
    body.style.overflowX = "hidden";
    nazivPlanete.textContent = "Sunce - StellarQuest"
    opisDiv.innerHTML = sunceOpis;
    galerijaDiv.innerHTML = sunceGalerija
    zanimljivostiDiv.innerHTML = sunceZanimljivosti
    info.style.display = "flex";
})

const restart = document.getElementById("restart")

restart.addEventListener("click", () => {
    hasKey = 0
    clickable = 0
    if (clickedMercury) mercury.click()
    else if (clickedVenus) venus.click()
    else if (clickedEarth) earth.click()
    else if (clickedMars) mars.click()
    else if (clickedJupiter) jupiter.click()
    else if (clickedSaturn) saturn.click()
    else if (clickedUranus) uranus.click()
    else if (clickedNeptune) neptune.click()
})