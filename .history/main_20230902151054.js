let url = window.location.search
let page = url.slice(6)
let category = ['dien-thoai', 'laptop', 'pc', 'may-tinh-bang', 'thiet-bi-thong-minh', 'gia-dung', 'apple', 'samsung', 'dong-ho-thong-minh', 'phu-kien', 'man-hinh', 'may-cu']

if(page) {
    window.location.href = `http://127.0.0.1:5500/index.html/${page}`
} else {
    window.location.herf = `http://127.0.0.1:5500/index.html`
}