// Плагин интернет-эквайринга от Т-Банк
(function() {
  const tbankPlugin = {
    init() {
      console.log('T-Bank Plugin initialized');
      document.querySelectorAll('button[data-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          const productId = btn.getAttribute('data-id');
          // TODO: заменить URL и параметры на реальные из Т-Банка
          window.location.href = `https://securepay.tbank.ru?terminalKey=ВАШ_TERMINAL&orderId=ORDER_${productId}`;
        });
      });
    }
  };
  PluginManager.register('tbank', tbankPlugin);
})();