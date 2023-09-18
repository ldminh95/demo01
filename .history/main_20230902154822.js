let url = window.location.search
let page = url.slice(6)
console.log(page);
let category = [
    'dien-thoai',
    'laptop',
    'pc'
]

let Products = [
    {
        id : 1,
        category: 'dien-thoai',
        image: '',
        pirce: 20000000
    }, 
    {
        id: 2,
        category: 'laptop',
        image: '',
        price: 20000000
    }
]
if(url != '') {
    for(let i = 0; i < category.length; i++) {
        if(page == category[i]) {
            window.location.href = 'http://127.0.0.1:5500/page/category.html'
            return
        } else {
            window.location.href = 'http://127.0.0.1:5500/page/404.html'
            break
        }
    }
}




// if(url) {
//     window.location.href = `http://127.0.0.1:5500/index.html/${page}`
// } else {
//     window.location.herf = `http://127.0.0.1:5500/index.html`
// }