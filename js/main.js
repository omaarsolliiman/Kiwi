// Get a list of elements with animations
const animationElements = document.querySelectorAll('h1.animated');

// Iterate over the elements and pause their animations with a delay based on their index
animationElements.forEach((element, index) => {
    setTimeout(() => {
        element.classList.add('pause-animation');
    }, (index + 1) * 800); // Delay based on index, each index has a 1s delay
});

let logo = document.querySelector(".logo")
let enternal1 = document.querySelector(".enternal1")
let enternal2 = document.querySelector(".enternal2")
let external1 = document.querySelector(".external1")
let external2 = document.querySelector(".external2")
let logo2 = document.querySelector(".logo2")
let enter = document.querySelector(".enter")
let welcome = document.querySelector(".welcome")
let app = document.querySelector(".app")
let main = document.querySelector(".main")
let nav = document.querySelector(".nav")
let about = document.querySelector(".about")
let back = document.querySelector(".back")
let back2 = document.querySelector(".back-videos")
let videoContainer = document.querySelector(".videos-container")
let videos = document.querySelector(".videos")


setTimeout(() => {
    logo.classList.toggle("show")
}, 3.5 * 800)
setTimeout(() => {
    enter.classList.toggle("show")
}, 4.5 * 800)


enter.addEventListener("click", () => {
    enter.classList.toggle("entered")
    welcome.classList.toggle("entered")
    logo.classList.toggle("entered")
    app.classList.toggle("entered")
    main.classList.toggle("entered")
})
logo2.addEventListener("click", () => {
    enter.classList.toggle("entered")
    welcome.classList.toggle("entered")
    logo.classList.toggle("entered")
    app.classList.toggle("entered")
    main.classList.toggle("entered")
})
enternal1.addEventListener("click", () => {
    enternal1.classList.add("enter-about")
    enternal2.classList.add("enter-about")
    external1.classList.add("enter-about")
    external2.classList.add("enter-about")
    nav.classList.add("enter-about")
    logo2.classList.add("enter-about")
    about.classList.add("enter-about")
    back.classList.add("enter-about")
    main.classList.add("enter-about")

})
back.addEventListener("click", () => {
    enternal1.classList.remove("enter-about")
    enternal2.classList.remove("enter-about")
    external1.classList.remove("enter-about")
    external2.classList.remove("enter-about")
    nav.classList.remove("enter-about")
    logo2.classList.remove("enter-about")
    about.classList.remove("enter-about")
    back.classList.remove("enter-about")
    main.classList.remove("enter-about")
})
enternal2.addEventListener("click", () => {
    enternal1.classList.add("enter-videos")
    enternal2.classList.add("enter-videos")
    external1.classList.add("enter-videos")
    external2.classList.add("enter-videos")
    nav.classList.add("enter-videos")
    logo2.classList.add("enter-videos")
    about.classList.add("enter-videos")
    back2.classList.add("enter-videos")
    main.classList.add("enter-about")
    videoContainer.classList.add("enter-videos")
    videos.classList.add("enter-videos")

})
back2.addEventListener("click", () => {
    enternal1.classList.remove("enter-videos")
    enternal2.classList.remove("enter-videos")
    external1.classList.remove("enter-videos")
    external2.classList.remove("enter-videos")
    nav.classList.remove("enter-videos")
    logo2.classList.remove("enter-videos")
    about.classList.remove("enter-videos")
    back2.classList.remove("enter-videos")
    main.classList.remove("enter-about")
    videoContainer.classList.remove("enter-videos")
    videos.classList.remove("enter-videos")
})