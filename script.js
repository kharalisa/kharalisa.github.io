// Скрипт 1: изменение цвета фона по нажатию кнопки.
document.getElementById('pink-bg')?.addEventListener('click', () => {
  document.body.style.backgroundColor = '#FBE7ED';
});
document.getElementById('beige-bg')?.addEventListener('click', () => {
  document.body.style.backgroundColor = '#FAF3ED';
});

// Скрипт 2: показ текущей даты во всплывающем окне.
document.getElementById('show-date')?.addEventListener('click', () => {
  const date = new Date().toLocaleDateString('ru-RU', {day:'numeric',month:'long',year:'numeric'});
  alert('Сегодня ' + date);
});

// Скрипт 3: часы в заголовке вкладки браузера.
const pageTitle = document.title;
function updateTitleClock() {
  const clock = new Date().toLocaleTimeString('ru-RU');
  document.title = clock + ' · ' + pageTitle;
}
updateTitleClock();
setInterval(updateTitleClock, 1000);
