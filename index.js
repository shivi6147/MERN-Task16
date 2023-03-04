console.log("Hello ");


let countDownTimerElement = document.querySelector("#test"),
    secondsLeft = 10

const downloadTimer = setInterval(
    () => {
        if (secondsLeft <= 0) clearInterval(downloadTimer);
        countDownTimerElement.value = secondsLeft
        countDownTimerElement.innerHTML = secondsLeft
        secondsLeft -= 1
        if (secondsLeft === -1) {
            countDownTimerElement.innerHTML = "<span style='color:orange'>Happy</span> <span style='color:white'>Independence</span> <span style='color:green'>Day</span>";
        }
    }, 1000)