let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let menuLv = $$('.hd_right .lv2')

$$('.hd_right .lv2').forEach((item,index) => {
    item.onclick = function() {
        this.classList.add('active')
    } 
});