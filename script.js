var countdownEl = document.querySelector('#countdown')

function pomodoro() {
    countdownEl.innerHTML = 60
    countdownEl.value = 60

    console.log(countdownEl.value)
}

function relax() {
    countdownEl.innerHTML = 10
    countdownEl.value = 10

}

function startTimer() {

    if (countdownEl.value = 60) {

        let startingMinutes = 60
        let time = startingMinutes * 60

        setInterval(updateCountdown, 1000)

        function updateCountdown() {

            const minutes = Math.floor(time / 60)
            let seconds = time % 60

            seconds = seconds < 10 ? '0' + seconds:seconds

            countdownEl.innerHTML = `${minutes}:${seconds}`
            time--

            }

    } else if (countdownEl.value = 10) {

        let startingMinutes = 10
        let time = startingMinutes * 10

        setInterval(updateCountdown, 1000)

        function updateCountdown() {

            const minutes = Math.floor(time / 10)
            let seconds = time % 60
    
            seconds = seconds < 10 ? '0' + seconds:seconds

            countdownEl.innerHTML = `${minutes}:${seconds}`
            time--

        }
        
    }

}