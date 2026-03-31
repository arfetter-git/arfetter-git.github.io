export default function Menu() {
  const menuCategories = [
    {
      name: 'Кофейные напитки',
      items: [
        { name: 'Эспрессо', price: '150₽', description: 'Классический чёрный кофе, 30 мл', emoji: '☕' },
        { name: 'Американо', price: '180₽', description: 'Эспрессо с горячей водой, 120 мл', emoji: '🫖' },
        { name: 'Капучино', price: '250₽', description: 'Эспрессо с молочной пенкой, 180 мл', emoji: '🤎' },
        { name: 'Латте', price: '280₽', description: 'Мягкий кофейный напиток с молоком, 240 мл', emoji: '🥛' },
        { name: 'Флэт Уайт', price: '270₽', description: 'Двойной эспрессо с молоком, 160 мл', emoji: '🤎' },
        { name: 'Раф', price: '320₽', description: 'Сливочный кофе с ванилью, 200 мл', emoji: '🍦' },
        { name: 'Латте Макиато', price: '290₽', description: 'Трёхслойный кофейный напиток, 240 мл', emoji: '🥤' },
        { name: 'Мокачино', price: '310₽', description: 'Кофе с шоколадом и молоком, 220 мл', emoji: '🍫' },
      ],
    },
    {
      name: 'Авторские напитки',
      items: [
        { name: 'Карамельный капучино', price: '320₽', description: 'Капучино с домашней карамелью', emoji: '🍮' },
        { name: 'Соленая карамель', price: '340₽', description: 'Латте с соленой карамелью', emoji: '🧂' },
        { name: 'Ореховый раф', price: '350₽', description: 'С фундуком или миндалём', emoji: '🌰' },
        { name: 'Кокосовый латте', price: '340₽', description: 'На кокосовом молоке', emoji: '🥥' },
      ],
    },
    {
      name: 'Чай и другое',
      items: [
        { name: 'Чай чёрный/зелёный', price: '150₽', description: 'Классический чай, 250 мл', emoji: '🍵' },
        { name: 'Чай травяной', price: '170₽', description: 'Успокаивающий сбор, 250 мл', emoji: '🌿' },
        { name: 'Горячий шоколад', price: '250₽', description: 'Натуральный бельгийский шоколад, 250 мл', emoji: '🍫' },
        { name: 'Какао', price: '230₽', description: 'Традиционный какао с молоком, 250 мл', emoji: '🥛' },
        { name: 'Лимонад', price: '200₽', description: 'Домашний лимонад, 300 мл', emoji: '🍋' },
      ],
    },
    {
      name: 'Десерты',
      items: [
        { name: 'Круассан', price: '180₽', description: 'Свежий французский круассан', emoji: '🥐' },
        { name: 'Чизкейк', price: '290₽', description: 'Классический нью-йоркский', emoji: '🍰' },
        { name: 'Тирамису', price: '320₽', description: 'Итальянский десерт с маскарпоне', emoji: '🧁' },
        { name: 'Брауни', price: '220₽', description: 'Шоколадный пирог с орехами', emoji: '🍫' },
        { name: 'Макаронс', price: '150₽', description: 'Французское пирожное (1 шт)', emoji: '🍪' },
        { name: 'Медовик', price: '270₽', description: 'Традиционный русский торт', emoji: '🍯' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-900 mb-4">Наше меню</h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Попробуйте наши фирменные напитки и десерты, приготовленные с любовью
          </p>
        </div>

        {/* Menu Categories */}
        {menuCategories.map((category) => (
          <section key={category.name} className="mb-16">
            <h2 className="text-3xl font-bold text-amber-800 mb-6 pb-2 border-b-2 border-amber-300 inline-block">
              {category.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-start gap-4"
                >
                  <div className="text-4xl flex-shrink-0">{item.emoji}</div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                      <span className="text-lg font-bold text-amber-800 whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-amber-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Special Offer */}
        <section className="bg-gradient-to-r from-amber-900 to-amber-800 rounded-2xl p-8 text-white text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">☕ Акция дня!</h2>
          <p className="text-lg text-amber-100 mb-4">
            При покупке любого большого напитка — десерт со скидкой 20%
          </p>
          <p className="text-amber-200 text-sm">
            *Акция действует с 8:00 до 12:00
          </p>
        </section>
      </div>
    </main>
  );
}
