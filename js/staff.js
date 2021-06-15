// ฟังก์ชั่นสลับข้อมูลบุคลากร
function switch_info(that,type){
  that.closest('.select-info').querySelectorAll('.select-menu').forEach(element => {
    element.classList.remove('active')
  });
  that.classList.add('active')

  if(type === 1){
    document.querySelectorAll('.detail-staff .bottom-zone .info-selected div').forEach(ele=>{
      ele.classList.remove('show')
    })
    document.querySelector('.detail-staff .bottom-zone .info-selected .info-personal').classList.add('show')
  }
  else if(type === 2){
    document.querySelectorAll('.detail-staff .bottom-zone .info-selected div').forEach(ele=>{
      ele.classList.remove('show')
    })
    document.querySelector('.detail-staff .bottom-zone .info-selected .research').classList.add('show')
  }
  else if(type === 3){
    document.querySelectorAll('.detail-staff .bottom-zone .info-selected div').forEach(ele=>{
      ele.classList.remove('show')
    })
    document.querySelector('.detail-staff .bottom-zone .info-selected .research-interest').classList.add('show')
  }
  else{
    console.error('Missing parameter function "switch_info"')
  }
}