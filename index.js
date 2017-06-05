const personForm =document.querySelector('form#personForm')
//const buttoner=document.querySelector('button#pesonF');
let g=20;
function handleSubmit(ev) {
ev.preventDefault()
const f=ev.target
console.log(f.personName.value)
console.log('SUBMIT')
const name=f.personName.value+" "+f.personLastName.value
document.querySelector('h1').textContent=name
document.querySelector('#words').textContent=name;
document.querySelector('#words').style.fontSize=g%100+10+'px';
g=g+19
}

personForm.addEventListener('submit', handleSubmit)

//personForm.addEventListener('submit', changer)
//buttoner.addEventListner('submit', handleSubmit)