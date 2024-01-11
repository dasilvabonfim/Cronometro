const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function horarelogio()
{
  const horario = new Date();
  relogio.innerHTML = horario.toLocaleTimeString();
}

iniciar.addEventListener('click', function() {
    horario = setInterval(function (){
      horarelogio();
    },1000);
  });

pausar.addEventListener('click', function(){
  clearInterval(horario);
  relogio.innerHTML = '00:00:00'
});
