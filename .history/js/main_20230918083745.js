let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let hdRight = $$('.hd_right .lv2')

menuLv.forEach((item,index) => {
    item.onclick = function() {
        menuLv.forEach(item => {
            item.classList.remove('active')
        })
        this.classList.add('active')
    } 
});