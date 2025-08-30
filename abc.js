let data = {
    A: {
        name: "Apple",
        sound: "sound/A.mp3",
        photo: "image/01.png",
    },
    B: {
        name: "Ball",
        sound: "sound/B.mp3",
        photo: "image/02.png",
    },
    C: {
        name: "Cat",
        sound: "sound/C.mp3",
        photo: "image/03.png",

    },
    D: {
        name: "Dog",
        sound: "sound/D.mp3",
        photo: "image/04.png",

    },
    E: {
        name: "Elefant",
        sound: "sound/E.mp3",
        photo: "image/05.png",


    },
    F: {
        name: "Face",
        sound: "sound/F.mp3",
        photo: "image/06.png",

    },
    G: {
        name: "Graps",
        sound: "sound/G.mp3",
        photo: "image/07.png",

    },
    H: {
        name: "Hand",
        sound: "sound/H.mp3",
        photo: "image/08.png",

    },
    I: {
        name: "Indian",
        sound: "sound/I.mp3",
        photo: "image/09.png",

    },
    J: {
        name: "Jump",
        sound: "sound/J.mp3",
        photo: "image/10.png",

    },
    K: {
        name: "Kite",
        sound: "sound/K.mp3",
        photo: "image/11.png",

    },
    L: {
        name: "Lion",
        sound: "sound/L.mp3",
        photo: "image/12.png",

    },
    M: {
        name: "Moon",
        sound: "sound/M.mp3",
        photo: "image/13.png",

    },
    N: {
        name: "Nest",
        sound: "sound/N.mp3",
        photo: "image/14.png",

    },
    O: {
        name: "Orange",
        sound: "sound/O.mp3",
        photo: "image/15.png",

    },
    P: {
        name: "Pen",
        sound: "sound/P.mp3",
        photo: "image/16.png",

    },
    Q: {
        name: "Queen",
        sound: "sound/Q.mp3",
        photo: "image/17.png",

    },
    R: {
        name: "Rocket",
        sound: "sound/R.mp3",
        photo: "image/18.png",

    },
    S: {
        name: "Sun",
        sound: "sound/S.mp3",
        photo: "image/19.png",

    },
    T: {
        name: "Tiger",
        sound: "sound/T.mp3",
        photo: "image/20.png",

    },
    U: {
        name: "Umbrella",
        sound: "sound/U.mp3",
        photo: "image/21.png",

    },
    V: {
        name: "Vegetable",
        sound: "sound/V.mp3",
        photo: "image/22.png",
    },
    W: {
        name: "Water",
        sound: "sound/W.mp3",
        photo: "image/23.gif",

    },
    X: {
        name: "X-ray",
        sound: "sound/X.mp3",
        photo: "image/24.png",

    },
    Y: {
        name: "Yoga",
        sound: "sound/Y.mp3",
        photo: "image/25.png",

    },
    Z: {
        name: "Zebra",
        sound: "sound/Z.mp3",
        photo: "image/26.png",

    },
};

let alpha = document.getElementById("alphabetkit")

function card() {

    for (let key in data) {
        // console.log(key);
        let alphabetelem = document.createElement("div");

        // alphabetelem.className = "element";

        alphabetelem.classList.add("element", data[key].name);
        // console.log(alphabetelem);

        alpha.appendChild(alphabetelem);

        let h2 = document.createElement("h2");
        h2.textContent = key;
        alphabetelem.appendChild(h2);

        let span = document.createElement("span");
        span.textContent = data[key].name;
        alphabetelem.appendChild(span);

        alphabetelem.addEventListener("click", function(event) {
            let key = event.currentTarget.querySelector("h2").textContent;
            // console.log(key);

            playalpha(key.toUpperCase());
        })
    }

}


function playalpha(key) {
    // console.log(key);
    if (data.hasOwnProperty(key)) {

        let alphabetelem = document.querySelector(`.element.${data[key].name}`);
        // console.log(alphabetelem);

        alphabetelem.classList.add("active");

        // Audio 

        let audio = new Audio();
        audio.src = data[key].sound;
        audio.play();

        dropItem(key); // 👈 This triggers the animation

        audio.addEventListener("timeupdate", function() {
            if (audio.currentTime >= audio.duration / 32) {
                alphabetelem.classList.remove("active");
                audio.removeEventListener("timeupdate", arguments.callee);
            }
        })

    }
}

function dropItem(key) {
    if (data[key] && data[key].photo) {
        let item = document.createElement("img");
        item.src = data[key].photo;
        item.className = "apple-img animate";
        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 2000);
    }
}


document.addEventListener("keydown", function(event) {
    playalpha(event.key.toUpperCase());
});


card();