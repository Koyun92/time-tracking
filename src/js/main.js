const title = document.querySelectorAll('.stat h2')
const currentTime = document.querySelectorAll('.stat p:nth-of-type(1)')
const previousTime = document.querySelectorAll('.stat p:nth-of-type(2)')
const periodOption = 1;



fetch('data.json')
    .then(res => res.json())
    .then(data => appendData(data))
    .catch(err => console.error(err))



function appendData(data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].title)
        title[i].innerHTML = data[i].title

        if (periodOption == 1) {
            currentTime[i].innerHTML = data[i].timeframes.daily.current;
            previousTime[i].innerHTML = data[i].timeframes.daily.previous;
        } else if (periodOption == 2) {
            currentTime[i].innerHTML = data[i].timeframes.weekly.current;
            previousTime[i].innerHTML = data[i].timeframes.weekly.previous;
        } else if (periodOption == 3) {
            currentTime[i].innerHTML = data[i].timeframes.monthly.current;
            previousTime[i].innerHTML = data[i].timeframes.monthly.previous;
        }
    }
}