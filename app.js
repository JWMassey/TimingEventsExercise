//Timing Events Exercise - Jack Massey//

//1
setTimeout(() => {
    document.querySelector(`#first`).innerHTML = `<p>Hi</p>`
}, 1000);

//2
setTimeout(() => {
    document.querySelector(`#timeout-nesting`).innerHTML = `<p>One</p>`
    setTimeout(() => {
        const two = document.createElement(`p`)
        two.innerText = `Two`
        document.querySelector(`#timeout-nesting`).insertAdjacentElement(`beforeend`, two)
    }, 1000);
}, 2000);

//3a
let num = 1
const counting = setInterval(() => {
    console.log(num)
    num++
}, 1000);
//3b
const button = document.querySelector(`button`)
button.addEventListener(`click`, () => {
    clearInterval(counting)
})

//Bonus//

//4
let minutes = 2
let tenSeconds = 0
let seconds = 0

const countdown = document.querySelector(`#countdown`)
countdown.innerHTML = `<p>${minutes}:${tenSeconds}${seconds}</p>`
const cdFunc = setInterval(() => {
    if (seconds == 0){
        if (tenSeconds == 0){
            if (minutes == 0){
                countdown.innerHTML = `<p>TIME IS UP<p>`
                clearInterval(cdFunc)
            } else {
                minutes--;
                tenSeconds = 5
                seconds = 9
            }
        } else {
            tenSeconds--;
            seconds = 9;
        }
    } else {
        seconds--
    }
    if (minutes + tenSeconds + seconds != 0){
        countdown.innerHTML = `<p>${minutes}:${tenSeconds}${seconds}</p>`
    }
}, 1000);