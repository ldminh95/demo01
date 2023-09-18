let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

$$('.hd_right .lv2').forEach((e,i) => {
    let ele = e
    e.onclick = function() {
        ele.nextElementSibling.classList.remove('active')
        this.nextElementSibling.classList.toggle('active')
    }
    
});