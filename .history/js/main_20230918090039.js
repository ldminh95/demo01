let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let hdRight = $$('.hd_right .lv2')

hdRight.forEach((item,index) => {
    item.onclick = function() {
        hdRight.forEach(item => {
            item.classList.add('active')
        })
        this.classList.add('active')
    } 
});