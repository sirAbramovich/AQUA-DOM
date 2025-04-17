// Загружаем товары
fetch('data/products.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('products');
    data.forEach(item => {
      container.innerHTML += `
        <div class="product">
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p><strong>${item.price} ₽</strong></p>
          <button data-id="${item.id}">Купить</button>
        </div>
      `;
    });
  });

// Менеджер плагинов
const PluginManager = {
  plugins: {},
  register(name, plugin) {
    this.plugins[name] = plugin;
  },
  loadPlugins(names) {
    names.forEach(name => {
      const p = this.plugins[name];
      if (p && typeof p.init === 'function') p.init();
    });
  }
};
window.PluginManager = PluginManager;