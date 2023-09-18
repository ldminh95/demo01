let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let menuLv = $$('.hd_right .lv2')

menuLv.forEach((item,index) => {
    item.onclick = function(e,i,a) {
        this.classList.add('active')
        menuLv.forEach(item => {
            console.log(item);
        })
    } 
});