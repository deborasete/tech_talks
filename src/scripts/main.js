AOS.init();

const dataDoEvento = new Date("Feb 28, 2026 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaPeriodo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMilissegundos = 1000 * 60 * 60 * 24;
    const horasEmMilissegundos = 1000 * 60 * 60;
    const minutosEmMilissegundos = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMilissegundos);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMilissegundos) / horasEmMilissegundos);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMilissegundos) / minutosEmMilissegundos);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMilissegundos) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaPeriodo);
        document.getElementById('contador').innerHTML = ': Evento expirado';
    }
}, 1000);