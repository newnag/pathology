// โชว์พาส
function show_pass(that){
  const input = that.closest('.input').querySelector('input')

  if(input.type === "text"){
    input.type = "password"
  }
  else if(input.type === "password"){
    input.type = "text"
  }
}