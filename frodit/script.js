const arrow = document.querySelector(".arrow")
const organizations = document.querySelector(".organizations")

let clickCounter = 0
let imageItem = organizations.querySelectorAll("img").length



arrow.addEventListener("click",function (){
    clickCounter++
    
    if (imageItem -(3+clickCounter)>=0 ) {
        organizations.style.transform = `translateX(${organizations.computedStyleMap().get("transform")[0].x.value-430}px)`
    } else {
        organizations.style.transform = "translateX(0)"
    }
    
    
})