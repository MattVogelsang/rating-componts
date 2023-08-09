//  let btns = document.querySelectorAll('.btn-container button')
// let Card2 = document.querySelector('.card-2')
// let Card = document.querySelector('card')
// let span = document.querySelector('span')

// Array.from(btns).forEach(btn => {
//     btn.addEventListener('click' , e => {
//         const rating = e.target.textContent
//         span.textContent = rating
//         Card2.classList.remove('hide')
//         Card.classList.add('hide')
//     })
// }) 

const btns = document.querySelectorAll('.btn-container')
const submitBtn = document.querySelector('.submit-btn')
const span = document.querySelector('.card-2 .card-body span')
const initialCard = document.querySelector('.card')
// i gave the first card a class of .card-1
const SecondCard = document.querySelector('.card-2')
Array.from(btns).forEach(btn =>{
btn.addEventListener('click', e => {
  let text = e.target.textContent
  submitBtn.addEventListener('click', e =>{
    initialCard.classList.add('hide')
    SecondCard.classList.remove('hide')
    span.textContent = text
  })
})
})