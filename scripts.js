
const k = 10;
let x = 0;
let fullList = []
const content = document.getElementById('content')

const updateList = () =>{
  content.innerHTML = fullList.slice(x*k, k*(x+1)).reduce((acc, e) => {
  acc += `<article><h2><span> ${e.Title} </span></h2><p> ${e.Description} </p> </article>`
  return acc
}, "")
}


fetch("https://fakerestapi.azurewebsites.net/api/Books")
.then(res => res.json())
.then(data => {
  fullList = data
  updateList()
})
.catch(err=> {
  console.error(err)
})
const next = () => {
  x++
  content.innerHTML = `<img src="https://media1.tenor.com/images/7e77e0a227b7270cf65601afd5e39339/tenor.gif?itemid=12901256" class="cr7" alt="Milan Juventus Ronaldo GIF - MilanJuventus Ronaldo Happy GIFs"/>`
  setTimeout( function () {updateList()}, 3200)
}



