let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

$$('.hd_right .lv2').forEach((item,index) => {
    item.nextElementSibling.classList.remove('active')
    e.onclick = function() {
        this.nextElementSibling.classList.toggle('active')
    }
    
    
});