let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

$$('.hd_right .lv2').forEach((item,index) => {
    console.log(item);
    item.onclick = function() {
        this.nextElementSibling.classList.add('active')
    } 
});