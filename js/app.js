let loading = document.querySelector('.loading') 
let container = document.querySelector(".container") 
setTimeout(getSite,3000) 
function getSite() { 
    loading.style.display = "none" 
    container.style.display = "block" 
}