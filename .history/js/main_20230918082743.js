let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

$$('.hd_right .lv2').forEach((item,index) => {
    item.onclick = function() {
        $$('.hd_right .lv2').map(function(item) {
            item.classList.remove('active')
        })
        this.classList.add('active')
    } 
});