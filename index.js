const personForm =document.querySelector('form#personForm')

function handleSubmit(ev) {
ev.preventDefault()
const f=ev.target
console.log(f.personName.value)
console.log('SUBMIT')
const name=f.personName.value
document.querySelector('h1').textContent=name
}

personForm.addEventListener('submit', handleSubmit)