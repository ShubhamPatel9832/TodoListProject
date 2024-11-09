
const body = document.body
const input = document.getElementById("input")
const addButton= document.getElementById("addButton")
const maindiv = document.getElementById("mainP")



addButton.addEventListener("click", () => {
    
  });
   




// -------------------------------- EventListner ---------------------

addButton.addEventListener("click" , ()=>{

    const inputvalue = input.value

 // --------------------- Create Element Div -------------------------   
const NewDiv = document.createElement("div")
NewDiv.classList ="stylediv"
maindiv.append(NewDiv)


// ------------------------------- Create peragraph----------------

const newEliment = document.createElement("p")
newEliment.textContent=inputvalue
NewDiv.append(newEliment)


// --------------------------------------Ceate Buttons ----------------------

const deleteButton = document.createElement("button")
deleteButton.innerText="Delete"
deleteButton.style.backgroundColor="red"
deleteButton.classList="buttonclass"
NewDiv.append(deleteButton)



const editButton = document.createElement("button")
editButton.innerText = "Edit"
editButton.style.backgroundColor="rgb(0,123,255)"
editButton.classList="buttonclass"
NewDiv.append(editButton)


const compliteButton = document.createElement("button")
compliteButton.innerText = "Complete"
compliteButton.style.backgroundColor="green"
compliteButton.classList="buttonclass"
NewDiv.appendChild(compliteButton)  


// --------------------------------- Logic-------------------- 


deleteButton.addEventListener("click" , ()=>{
  NewDiv.remove()
})


editButton.addEventListener("click" ,()=>{
   const inputdata = prompt("enter the data ")
   newEliment.classList="newpera"
   const inputValue = document.querySelector(".newpera")
   inputValue.textContent=inputdata
})



compliteButton.addEventListener("click" , ()=>{
  newEliment.style.textDecoration="line-through"
  compliteButton.disabled=true
  compliteButton.style.backgroundColor="rgb(108,117,125)"
  compliteButton.style.cursor="not-allowed"

})




//  -------------------------blank Input ------------------------

input.value=""

  
})










