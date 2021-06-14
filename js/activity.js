// เปิดโชว์รูปใหญ่
function show_bigimg(that){
  document.querySelector('.zoom-img').classList.add('show')
  const pic_url = that.querySelector('img').src
  document.querySelector('.zoom-img .big-img img').src = pic_url
}
// ปิดโชว์รูปใหญ่
function close_bigimg(that){
  document.querySelector('.zoom-img').classList.remove('show')
  document.querySelector('.zoom-img .big-img img').src = ""
}