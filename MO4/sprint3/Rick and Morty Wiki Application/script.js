let datam;
let con=document.getElementById("container")
let privous=document.getElementById("privious")
let next=document.getElementById("next")
let char=document.getElementById("char")
let but=document.getElementById("but")
let footer=document.getElementById("footer")
footer.innerText= new Date()
let c=0;
async function fetchdata() {
    char.innerHTML=''
    let res=await fetch("https://rickandmortyapi.com/api/character")
    let data=await res.json()
    datam=data.results
    display(c)
}
function display(c){
    but.style.display="flex"
    con.innerHTML=''
    char.innerHTML=''
    for(let i=Math.abs(c);i<c+6;i++){
        let div=document.createElement("div")
        div.innerHTML=`
            <img src="${datam[i].image}" />
            <span><b>Name:</b>${datam[i].name}</span><br>
            <span><b>Spices:</b>${datam[i].species}</span><br>
            <span><b>Status:</b>${datam[i].status}</span><br>
            <button onClick="charecter(${datam[i].id})"> info</button>
        `
        con.appendChild(div)
    }  
}
next.addEventListener("click",()=>{
    c+=6
    if(c>0 && c<24){
        display(c)
    }
    else{
        c=0
        display(c)
    }

})
privous.addEventListener("click",()=>{
    if(c>0){
        c-=6
        display(c)
    }
    else{
        c=18
        display(c)
    }
})

async function charecter(id){
    con.innerHTML=''
    char.innerHTML=''
    but.style.display="none"
    let res=await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    let data=await res.json()
    char.innerHTML=`
    <img src="${data.image}" />
    <p><b>Name:</b>${data.name}</p>
    <p><b>Spices:</b>${data.species}</p>
    <p><b>status:</b>${data.status}</p>
    <p><b>Gender:</b>${data.gender}</p>
    <p><b>Origin location:</b>${data.origin.name}</p>
    <p><b>current location:</b>${data.location.name}</p>
    <p><b>no.of episodes:</b>${data.episode.length}</p>
    <button onclick="display(${c})">Back</button>
    `
}


fetchdata()
