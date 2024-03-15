function updateTime() {
    const now = new Date();
    const options = { timeZone: 'America/Sao_Paulo' };
    const brasilTime = now.toLocaleString('pt-BR', options);
    const [date, time] = brasilTime.split(', ');

    const [hour, minute, second] = time.split(':');

    document.getElementById('hora').textContent = hour;
    document.getElementById('minuto').textContent = minute;
    document.getElementById('segundo').textContent = second;
}       

updateTime();
setInterval(updateTime, 1000);
