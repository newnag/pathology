// เปิดเมนูย่อย
function open_submenu(that){
  if(that.closest('li').querySelector('.submenu').classList.contains('show')){
    document.querySelectorAll('.header .menu li .submenu').forEach(sub=>{
      sub.classList.remove('show')
    })
  }
  else{
    document.querySelectorAll('.header .menu li .submenu').forEach(sub=>{
      sub.classList.remove('show')
    })
    that.closest('li').querySelector('.submenu').classList.add('show')
  }
}

// เปิดเมนูย่อยในย่อย
function open_insubmenu1(that){
  that.closest('li').querySelector('.insubmenu1').classList.toggle('show')
  that.classList.toggle('active')
}

// เปิดเมนูย่อยในย่อยในย่อย
function open_insubmenu2(that){
  that.closest('li').querySelector('.insubmenu2').classList.toggle('show')
  that.classList.toggle('active')
}

// เปิดเมนูในมือถือ
function open_navmenu_mobile(){
  document.querySelector('.header nav').classList.add('show')
}
// ปิดเมนูในมือถือ
function closemenu(){
  document.querySelector('.header nav').classList.remove('show')
  // ปิดเมนูย่อยทั้งหมด
  document.querySelectorAll('.header .menu li .submenu').forEach(sub=>{
    sub.classList.remove('show')
  })
  document.querySelectorAll('.header .menu li .submenu .insubmenu1').forEach(insub1=>{
    insub1.classList.remove('show')
  })
  document.querySelectorAll('.header .menu li .submenu .insubmenu1 .insubmenu2').forEach(insub2=>{
    insub2.classList.remove('show')
  })
}

// เปิดปิดเมนูภาษา
function open_langList(that){
  that.closest('.lang').querySelector('.list-lang').classList.toggle('show')
}

// สไลด์หน้าโอม
function slide_home(){
  const swiper = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },
  });
}

///////////////////////////////////////////////////////////////////
// @use function

slide_home()