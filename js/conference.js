// ฟังก์ชั่นไว้เปิดปิดตอบกลับคอมเมนท์
function show_reply(that){
  const element = that.closest('.reply').querySelector('.box-reply')

  if(element.classList.contains('hidden')){
    that.innerHTML = '<i class="fas fa-chevron-up"></i>  ซ่อนการตอบกลับ'
  }
  else{
    that.innerHTML = '<i class="fas fa-chevron-down"></i>  ดูการตอบกลับ'
  }
  element.classList.toggle('hidden')
}