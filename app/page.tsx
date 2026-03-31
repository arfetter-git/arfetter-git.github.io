import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Добро пожаловать в <span className="text-amber-200">Aroma Coffee</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Место, где рождается любовь к настоящему кофе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-white text-amber-900 px-8 py-4 rounded-full font-semibold hover:bg-amber-100 transition-colors inline-block"
            >
              Смотреть меню
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-900 transition-colors inline-block"
            >
              Узнать больше
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-3">
                Свежая обжарка
              </h3>
              <p className="text-amber-700">
                Мы обжариваем зёрна небольшими партиями каждую неделю для максимального вкуса и аромата.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-3">
                Премиум зёрна
              </h3>
              <p className="text-amber-700">
                Используем только 100% арабику высшего сорта из лучших плантаций мира.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-6xl mb-4">❤️</div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-3">
                Сделано с любовью
              </h3>
              <p className="text-amber-700">
                Наши бариста — настоящие профессионалы, влюблённые в своё дело.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-4">
            Популярные напитки
          </h2>
          <p className="text-center text-amber-700 mb-12 text-lg">
            Попробуйте наши хиты, которые покорили сердца гостей
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Капучино', price: '250₽', emoji: '☕', desc: 'Классика итальянского кофе' },
              { name: 'Латте', price: '280₽', emoji: '🥛', desc: 'Нежный молочный вкус' },
              { name: 'Флэт Уайт', price: '270₽', emoji: '🤎', desc: 'Двойной эспрессо с молоком' },
              { name: 'Раф', price: '320₽', emoji: '🍦', desc: 'Сливочный десертный кофе' },
            ].map((item) => (
              <div key={item.name} className="bg-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.name}</h3>
                <p className="text-amber-600 mb-3">{item.desc}</p>
                <p className="text-2xl font-bold text-amber-800">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block bg-amber-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition-colors"
            >
              Всё меню
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Заходите к нам в гости!</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Уютная атмосфера, вкусный кофе и приятная компания — всё, что нужно для идеального дня
          </p>
          <Link
            href="/contacts"
            className="inline-block bg-white text-amber-900 px-8 py-4 rounded-full font-semibold hover:bg-amber-100 transition-colors"
          >
            Найти нас на карте
          </Link>
        </div>
      </section>
    </main>
  );
}
