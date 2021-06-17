// ฟังก์ชั่นสลับข้อมูลบุคลากร
function switch_info(that,type){
  that.closest('.select-info').querySelectorAll('.select-menu').forEach(element => {
    element.classList.remove('active')
  });
  that.classList.add('active')

  if(type === 1){
    document.querySelectorAll('.teacher .right .form-data div').forEach(ele=>{
      ele.classList.remove('show')
    })
    document.querySelector('.teacher .right .form-data .personal-box').classList.add('show')
  }
  else if(type === 2){
    document.querySelectorAll('.teacher .right .form-data div').forEach(ele=>{
      ele.classList.remove('show')
    })
    document.querySelector('.teacher .right .form-data .research-box').classList.add('show')
  }
  else if(type === 3){
    document.querySelectorAll('.teacher .right .form-data div').forEach(ele=>{
      ele.classList.remove('show')
    })
    document.querySelector('.teacher .right .form-data .interest-box').classList.add('show')
  }
  else{
    console.error('Missing parameter function "switch_info"')
  }
}

// เลือกแท็บข้อมูลของหน้า ข้อมูลบุคลากร
function select_tab(that,tab){
  that.closest('.select-tab').querySelectorAll('.tab').forEach(ele=>{
    ele.classList.remove('active')
  })
  that.classList.add('active')

  document.querySelectorAll('.personal-box .data-tab').forEach(Ele=>{
    Ele.classList.remove('hidden')
  })

  if(tab === 1){
    document.querySelector('.personal-box .edu-tab').classList.add('hidden')
  }
  else if(tab === 2){
    document.querySelector('.personal-box .info-tab').classList.add('hidden')
  }
  else{
    console.error('Missing Parametor select_tab')
  }
}