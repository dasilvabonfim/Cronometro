function relogio(){

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let temporizador;


  function iniciarelogio()
  {
    temporizador = setInterval(function () {
      segundos++;
      relogio.innerHTML = getHoraDosSegundos(segundos);
    },1000);
  }

  document.addEventListener('click', function(e){
    const elemento = e.target;

    if (elemento.classList.contains('iniciar')){
      relogio.classList.remove('pausado');
      relogio.classList.add('iniciado');
      clearInterval(temporizador);
      iniciarelogio();
    }

    if (elemento.classList.contains('pausar')){
      clearInterval(temporizador);
      relogio.classList.remove('iniciado');
      relogio.classList.add('pausado');
    }

    if (elemento.classList.contains('zerar')){
      clearInterval(temporizador);
      relogio.classList.remove('pausado');
      relogio.classList.remove('iniciado');
      relogio.innerHTML = '00:00:00'
      segundos = 0;
    }
  })


  function getHoraDosSegundos(segundos)
  {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'});
  }

}


relogio();