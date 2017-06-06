const personForm =document.querySelector('form#personForm')
//const buttoner=document.querySelector('button#pesonF');
const fancy=document.querySelector('#words')
let g=0;
let sty=['italic','normal','oblique']
let fam=['Georgia','Arial','Helvetica','Times New Roman','Verdana']
function handleSubmit(ev) {
ev.preventDefault()
const f=ev.target
console.log(f.personName.value)
console.log('SUBMIT')
const name=f.personName.value+" "+f.personLastName.value
document.querySelector('h1').textContent=name
document.querySelector('#words').textContent=name
document.querySelector('#words').style.fontSize=(20*g)%100+10+'px'
document.querySelector('#words').style.fontStyle=sty[g%3]
document.querySelector('#words').style.fontFamily=fam[g%5]
const details=document.querySelector('#details')
details.innerHTML='<em>'+name+'</em>'
g=g+1
}

personForm.addEventListener('submit', handleSubmit)

//personForm.addEventListener('submit', changer)
//buttoner.addEventListner('submit', handleSubmit)