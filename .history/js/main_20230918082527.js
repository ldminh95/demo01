let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

$$('.hd_right .lv2').forEach((item,index) => {
    item.onclick = function() {
        $$('.hd_right .lv2').
        this.classList.add('active')
    } 
});