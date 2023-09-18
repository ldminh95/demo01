let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

$$('.hd_right .lv2').forEach((item,index) => {
    item.onclick = function() {
        console.log(item);
        this.nextElementSibling.classList.add('active')
    } 
});