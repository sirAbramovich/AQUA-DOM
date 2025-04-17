// Плагин синхронизации остатков из 1С МойСклад
(function() {
  const moyskladPlugin = {
    init() {
      console.log('MoySklad Plugin initialized');
      // TODO: вставить реальные credentials и endpoint
      fetch('https://online.moysklad.ru/api/remap/1.2/entity/product', {
        headers: {
          'Authorization': 'Basic ВАШ_API_КЛЮЧ'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log('Stock data:', data);
        // Здесь можно обновить DOM, показать наличие или отсутствие товара
      });
    }
  };
  PluginManager.register('moysklad', moyskladPlugin);
})();