let url = window.location.search
let page = url.slice(6)
let category = ['dien-thoai', 'laptop', 'pc', 'may-tinh-bang', 'thiet-bi-thong-minh', 'gia-dung', 'apple', 'samsung', 'dong-ho-thong-minh', 'phu-kien', 'man-hinh', 'may-cu']


for(let i = 0; i < category.length; i++) {
    if(page == category[i]) {
        console.log('có danh muc');
    }
}