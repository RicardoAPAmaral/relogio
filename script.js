function updateTime() {
    const now = new Date();
    const options = { timeZone: 'America/Sao_Paulo' };
    const brasilTime = now.toLocaleString('pt-BR', options);
    const [date, time] = brasilTime.split(', ');

    const [hour, minute, second] = time.split(':');

    document.getElementById('hour').textContent = hour;
    document.getElementById('minute').textContent = minute;
    document.getElementById('second').textContent = second;
}

updateTime();
setInterval(updateTime, 1000);
