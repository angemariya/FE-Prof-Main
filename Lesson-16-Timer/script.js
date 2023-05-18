function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  
  const timerElement = document.getElementById("timer");
  let seconds = 70;
  
  function updateTimer() {
    if (seconds > 0) {
      seconds--;
      timerElement.innerText = formatTime(seconds);
    } else {
      clearInterval(timerInterval);
      timerElement.innerText = "Таймер завершен";
    }
  }
  
  updateTimer(); // Начальное отображение
  
  const timerInterval = setInterval(updateTimer, 1000);
  
  // 1. Format time на экране
  // 2. Остановить отсчёт и отобразить, что таймер закончился
  // 3. Сделать дизайн
  
  // При загрузке показывает 1:10 и начинает отсчёт. В конце показывается, что отсчёт закончен
  // интерактивности нет
  