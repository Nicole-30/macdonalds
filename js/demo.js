// let firstparagraph = document.querySelector('#demo').textContent
// let firstheading = document.querySelector('h1').textContent;

// setTimeout(() => {
//     let h3Element = document.querySelector('h3')
//     h3Element.innerHTML = `${firstparagraph}, ${firstheading}`
// }, 5000)

// //queryselector
// getElementbyid('#')
// getElementbyClassName('.')
// getElementbyName('')

// //changing a value
// let checkImg =document.querySelector('img')




let username = prompt("Enter your name")
let nameParagraph = document.querySelector('#name')
nameParagraph.innerHTML = `welcome  ${username}`



let userage = prompt('enter your age')

let userageParagraph = document.querySelector('#age')
userageParagraph.innerHTML = `${userage}`;
if(userage >= 18){
    userageParagraph.innerHTML = 'you are old enough to use this application';
    }
else{
    userageParagraph.innerHTML= 'you are not old enough';
}


// setTimeout(() => {
//     firstparagraph.innerHTML = 'Goodbye Students';
// }, 5000);

// let firstheading = document.getElementById('one')

 
// setTimeout(() => {
//     firstheading.innerHTML ;
// }, 5000);


let firstName = document.querySelector('.nice')


setTimeout(() => {
    firstName.innerHTML = 'akenji suh'
}, 5000);

