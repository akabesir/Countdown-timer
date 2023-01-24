const newYears = '1 Jan 2024'
let daysDiv = document.getElementById('days')
let hoursDiv = document.getElementById('hours')
let minsDiv = document.getElementById('minutes')
let secondsDiv = document.getElementById('seconds')

function countdown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    const seconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(seconds / 3600 / 24)
    const hours =  Math.floor(seconds / 3600) % 24
    const minutes = Math.floor(seconds / 60) % 60
    const finalSecs = Math.floor(seconds%60)
    
    daysDiv.innerText = days
    hoursDiv.innerText = formatTime(hours)
    minsDiv.innerText = formatTime(minutes)
    secondsDiv.innerText = formatTime(finalSecs)
}
function formatTime(time){
    return time < 10 ? (`0${time}`) : time
}

countdown()

setInterval(countdown, 1000)