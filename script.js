const countdownEl = document.querySelector('#countdown')
const body = document.querySelector('.body')

function pomodoro() {
    let audio = document.querySelector('#audio')
    countdownEl.innerHTML = "60:00"
    countdownEl.value = 60

    audio.play()

    body.style.backgroundColor = '#cd523c';
}

function relax() {
    countdownEl.innerHTML = "10:00"
    countdownEl.value = 10

    body.style.backgroundColor = '#4b4b4b';
}

function startTimer() {

    if (countdownEl.value == 60) {

        var startingMinutes = 60
        let time = startingMinutes * 60

        setInterval(updateCountdown, 1000)

        function updateCountdown() {

            let minutes = Math.floor(time / 60)
            let seconds = time % 60

            seconds = seconds < 10 ? '0' + seconds:seconds

            countdownEl.innerHTML = `${minutes}:${seconds}`
            time--

            }

    } else if (countdownEl.value == 10) {

        var startingMinutes = 10
        let time = startingMinutes * 60

        setInterval(updateCountdown, 1000)

        function updateCountdown() {

            let minutes = Math.floor(time / 60)
            let seconds = time % 60

            seconds = seconds < 10 ? '0' + seconds:seconds

            countdownEl.innerHTML = `${minutes}:${seconds}`
            time--

        }
        
    }

}