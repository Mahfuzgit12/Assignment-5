const API="https://phi-lab-server.vercel.app/api/v1/lab/issues"

const container=document.getElementById("issues")

const loader=document.getElementById("loader")


const tabs=document.querySelectorAll(".tab")

let allIssues=[]


async function loadIssues(){

     loader.style.display="block"

   const res=await fetch(API)

const data=await res.json()

  allIssues=data.data

loader.style.display="none"

renderIssues(allIssues)

}


  function renderIssues(issues){

container.innerHTML=""

document.getElementById("issueCount").innerText=`${issues.length} Issues`

issues.forEach(issue=>{

const card=document.createElement("div")

   card.className=`card ${issue.status==="closed"?"closed":""}`

card.innerHTML=`

<h4>${issue.title}</h4>

<p>${issue.description}</p>

   <span class="priority ${issue.priority.toLowerCase()}">${issue.priority}</span>

<div class="labels">

   ${issue.labels?.map(l=>`<span class="label">${l}</span>`).join("")}

</div>

<p>by ${issue.author}</p>

`

card.onclick=()=>openModal(issue)

   container.appendChild(card)

})

}


tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"))

tab.classList.add("active")

const type=tab.getAttribute("data")

if(type==="all"){

renderIssues(allIssues)

}else{

renderIssues(allIssues.filter(i=>i.status===type))

}

})

})



let timer


document.getElementById("search").addEventListener("keyup",async(e)=>{

clearTimeout(timer)

timer=setTimeout(async()=>{

const q=e.target.value

if(q===""){

renderIssues(allIssues)
return
}

loader.style.display="block"


const res=await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${q}`)

const data=await res.json()


loader.style.display="none"

renderIssues(data.data)

},400)

})


function openModal(issue){

document.getElementById("issueModal").style.display="flex"

document.getElementById("modalTitle").innerText=issue.title


        document.getElementById("modalDescription").innerText=issue.description

      document.getElementById("modalAuthor").innerText=`Opened by ${issue.author}`

    document.getElementById("modalDate").innerText=`• ${issue.createdAt}`

document.getElementById("modalAssignee").innerText=issue.assignee

document.getElementById("modalPriority").innerText=issue.priority

document.getElementById("modalStatus").innerText=issue.status



const labelsContainer=document.getElementById("modalLabels")

labelsContainer.innerHTML=""

issue.labels?.forEach(label=>{

labelsContainer.innerHTML+=`<span class="label">${label}</span>`

})

}

function closeModal(){

document.getElementById("issueModal").style.display="none"

}


loadIssues()