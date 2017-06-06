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

//const colorDiv=`<div style="background-color: ${favoriteColor}; width: 100px;height:50px;"></div>`
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

//details.appendChild(ul)


const person ={
    name: f.personName.value, 
    favoriteColor: renderColor(f.favoriteColor.value).outerHTML, 
    age:f.age.value,
}



details.appendChild(renderList(person))

}

function lister(list, text){
const len =document.createElement('li')
len.textContent=text
list.appendChild(len)
}
function colorLister(list, favC){
const lPiece =document.createElement('li')
const colorChoice=document.createElement('div')
lPiece.textContent='Favorite Color: '
colorChoice.style.backgroundColor=favC
colorChoice.style.width='100px'
colorChoice.style.height='50px'
lPiece.appendChild(colorChoice)

list.appendChild(lPiece)
}
function renderColor(color){//have to use .outerHTML to get value
   const colorDiv= document.createElement('div')
   colorDiv.style.backgroundColor=color;
   colorDiv.style.width='100px'
   colorDiv.style.height='50px'
return colorDiv
//return `<div style="background-color: ${favoriteColor}; width: 100px;height:50px;"></div>`

}

function renderListItem(fieldName, value){
    const li = document.createElement('li')
    li.innerHTML=`${fieldName}: ${value}`
return li
}

function renderList(personData){
const list=document.createElement('ul')
Object.keys(personData).map(function(fieldName){
const li =renderListItem(fieldName,personData[fieldName])
list.appendChild(li)
})
return list
}



personForm.addEventListener('submit', handleSubmit)

//personForm.addEventListener('submit', changer)
//buttoner.addEventListner('submit', handleSubmit)