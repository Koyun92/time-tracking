const work = document.querySelector('.stat--work')
const play = document.querySelector('.stat--play')
const title = document.querySelector('.stat--title')
const study = document.querySelector('.stat--study')
const exercise = document.querySelector('.stat--exersie')
const selfcare = document.querySelector('.stat--selfcare')

fetch('data.json')
    .then(res => res.json())
    .then(data => appendData(data))
    .catch(err => console.error(err))



function appendData(data) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].title)
    }
}