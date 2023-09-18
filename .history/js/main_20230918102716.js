let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let hdRight = $$('.hd_right .lv2')

hdRight.forEach((item,index) => {
    item.onclick = function() {
        if(this.classList.contains('active')) {
            this.classList.remove('active')
        } else {
            hdRight.forEach(item => {
                item.classList.remove('active')
            })
            this.classList.add('active')
        }
    }
});

$('.shopping_cart').onclick = function() {
    $('.view_cart').classList.add('active')
    $('.view_cart .box').classList.add('active')
}
$('.view_cart .close').onclick = function() {
    $('.view_cart').classList.remove('active')
    $('.view_cart .box').classList.remove('active')
}