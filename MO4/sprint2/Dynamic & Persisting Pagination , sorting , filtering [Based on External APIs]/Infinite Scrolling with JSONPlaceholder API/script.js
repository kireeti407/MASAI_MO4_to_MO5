async function fetchdata() {
    let res=await fetch("https://jsonplaceholder.typicode.com/photos")
    let data=await res.json()
    display(data.slice(0,10))

}
function display(data){
    let con=document.getElementById("gallery")
    con.innerHTML=''
    data.forEach((e)=>{
        div=document.createElement("div")
        div.innerHTML=`
             <a href="${e.thumbnailUrl}">${e.thumbnailUrl}</a><br>
             <span>${e.title}</span>    
        `
        con.appendChild(div)
    })
}
fetchdata()