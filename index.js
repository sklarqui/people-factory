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
const favoriteColor =f.favoriteColor.value
const age=f.age.value

const colorDiv=`<div style="background-color: ${favoriteColor}; width: 100px;height:50px;"></div>`
//details.innerHTML='<em>'+name+'</em>'
//details.innerHTML =`<em>${name}</em>`
// ctr / -- will comment out a line
//const em = document.createElement('em')
//em.textContent=name
//details.appendChild(em)
g=g+1
//details.innerHTML=`
//<ul>
//<li>Name: ${name}</li>
//<li>Favorite Color: ${colorDiv}</li>
//<li>Age: ${age}</li>
//</ul>
const ul=document.createElement('ul')

//const li=document.createElement('li')
//li.textContent=name
//ul.appendChild(li)
//const la=document.createElement('li')
//la.textContent=favoriteColor
//ul.appendChild(la)
//const le=document.createElement('li')
//le.textContent=age
//ul.appendChild(le)
lister(ul,('name: '+name))
//lister(ul, ('color: '+favoriteColor))
colorLister(ul,favoriteColor)
lister(ul,('Age:'+age))

details.appendChild(ul)



}

function lister(da, ha){
const len =document.createElement('li')
len.textContent=ha
da.appendChild(len)
}
function colorLister(list, favC){
const lPiece =document.createElement('li')
const colorChoice=document.createElement('div')
lPiece.textContent='Fav Color: '
colorChoice.style.backgroundColor=favC
colorChoice.style.width='100px'
colorChoice.style.height='50px'
lPiece.appendChild(colorChoice)

list.appendChild(lPiece)
}


personForm.addEventListener('submit', handleSubmit)

//personForm.addEventListener('submit', changer)
//buttoner.addEventListner('submit', handleSubmit)