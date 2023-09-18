let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let menuLv = $$('.hd_right .lv2')

menuLv.forEach((item,index) => {
    item.onclick = function() {
        this.classList.add('active')
        menuLv.map(item => {
            console.log(item);
        })
    } 
});