// ฟังก์ชั่นย่อขยายเนื้อหาหลักสูตร
function collap_content(that,time){
  const element = that.closest('.content')
  
  if(that.classList.contains('collaps')){
    that.classList.remove('collaps')
    element.querySelector('.ck').classList.remove('collap')
    setTimeout(()=>{
      that.querySelector('.collap i').remove()
      that.querySelector('.collap').insertAdjacentHTML('afterbegin',`<i class="fas fa-minus"></i>`)
      that.querySelector('.collap span').innerHTML = "ซ่อนรายละเอียด"
    },time)
  }
  else{
    that.classList.add('collaps')
    element.querySelector('.ck').classList.add('collap')
    setTimeout(()=>{
      that.querySelector('.collap i').remove()
      that.querySelector('.collap').insertAdjacentHTML('afterbegin',`<i class="fas fa-plus"></i>`)
      that.querySelector('.collap span').innerHTML = "ดูเพิ่มเติม"
    },time)
  }
}