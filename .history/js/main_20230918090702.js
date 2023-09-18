let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let hdRight = $$('.hd_right .lv2')

hdRight.forEach((item,index) => {
    item.onclick = function() {
        if(this.classList.contains('active')) {
            this.classList.remove('active')
        } else {
            this.classList.add('active')
        }
    }
});