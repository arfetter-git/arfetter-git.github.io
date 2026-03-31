import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">☕</span>
              Aroma Coffee
            </h3>
            <p className="text-amber-200 text-sm">
              Лучший кофе в городе с 2015 года. Мы любим своё дело и делимся этой любовью с вами!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-amber-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">Меню</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">О нас</Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-white transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-amber-200 text-sm">
              <li>📍 ул. Кофейная, д. 12</li>
              <li>📞 +7 (999) 123-45-67</li>
              <li>✉️ info@aromacoffee.ru</li>
              <li>🕐 Ежедневно: 8:00 - 22:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-6 text-center text-amber-300 text-sm">
          <p>&copy; 2026 Aroma Coffee. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
