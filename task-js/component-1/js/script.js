(function () {
  /**
   * Служебная функция для считывания параметров из адресной строки
   * и определения конфигурации компонента
   * @param  {string} name - имя параметра
   * @return {number} - значение параметра в адресной строке
   */
  const getUrlValue = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get(name), 10);
  };

  /**
   * Настройки аккордеона, параметры получаются из командной строки
   *
   * tabs_limit - number, максимальное количество одновременно открытых элементов,
   * по умолчанию 0 - не ограничено
   *
   * Для тестирования работы своего скрипта при разных значениях tabs_limit
   * временно переопределяйте значение переменной, хранящей этот параметр.
   * Либо можете дописыват GET-параметр с нужным значением в конец адресной строки,
   * например: ?tabs_limit=1
   */
  const settings = {
    tabsLimit: getUrlValue('tabs_limit') || 0,
  };

  /* Код компонента пишите ниже */

  const tabs = Array.from(document.getElementsByClassName('accordeon-item-title'));

  tabs.forEach((tab) => {
    tab.addEventListener('click', tabEvent);
  });

  const activeTab = [];
  let limit;
  if (!settings.tabsLimit) {
    limit = tabs.length;
  }
  else {
    limit = settings.tabsLimit;
  }
  function tabEvent(e) {
    if (limit > 0) {
      addActiveTab(e.target);
    }
   
  }
  function addActiveTab(item) {
    let indexIfPresent = activeTab.indexOf(item);
    if (indexIfPresent === -1) {
      if (activeTab.length >= limit) {
        let removeTab = activeTab.shift();
        removeTab.closest('.accordeon-item').classList.remove('accordeon-item--open')
      }
      item.closest('.accordeon-item').classList.add('accordeon-item--open')
      activeTab.push(item)
    }
    else {
      activeTab.splice(indexIfPresent, 1);
      item.closest('.accordeon-item').classList.remove('accordeon-item--open');
    }
  }
})();
