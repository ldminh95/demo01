let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

$('.hd_right .lv2').forEach((e,i) => {
    e.onclick = function() {
        this.classList.toggle('active')
    }
});