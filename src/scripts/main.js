AOS.init(); //SLIDE DO AOS

// Defina a data do aniversário no formato "Ano-Mês-Dia"
const dataAniversario = new Date("2024-03-14").getTime();

// Atualiza o contador a cada segundo
const intervalo = setInterval(() => {
  const agora = new Date().getTime();
  const diferenca = dataAniversario - agora;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  if (diferenca < 0) {
    clearInterval(intervalo);
    document.querySelector(".container__contador").innerHTML =
      "Feliz Aniversário!";
  } else {
    document.querySelector(
      ".container__contador"
    ).innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s `;
  }
}, 1000);
