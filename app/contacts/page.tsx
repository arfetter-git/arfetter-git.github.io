'use client';

import { useState } from 'react';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contacts = [
    {
      title: 'Основная кофейня',
      address: 'ул. Кофейная, д. 12',
      phone: '+7 (999) 123-45-67',
      hours: 'Ежедневно: 8:00 - 22:00',
      emoji: '📍',
    },
    {
      title: 'Филиал на набережной',
      address: 'Набережная рекa, д. 5',
      phone: '+7 (999) 765-43-21',
      hours: 'Ежедневно: 9:00 - 21:00',
      emoji: '🌊',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-900 mb-4">Контакты</h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Ждём вас в гости! Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Наши кофейни</h2>
            {contacts.map((contact) => (
              <div
                key={contact.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-amber-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">{contact.emoji}</span>
                  {contact.title}
                </h3>
                <ul className="space-y-3 text-amber-700">
                  <li className="flex items-start gap-3">
                    <span>📍</span>
                    <span>{contact.address}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>📞</span>
                    <span>{contact.phone}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>🕐</span>
                    <span>{contact.hours}</span>
                  </li>
                </ul>
              </div>
            ))}

            {/* Social Media */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Мы в социальных сетях</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-amber-100 text-amber-900 px-6 py-3 rounded-full hover:bg-amber-200 transition-colors inline-flex items-center gap-2"
                >
                  <span>📷</span> Instagram
                </a>
                <a
                  href="#"
                  className="bg-amber-100 text-amber-900 px-6 py-3 rounded-full hover:bg-amber-200 transition-colors inline-flex items-center gap-2"
                >
                  <span>💬</span> Telegram
                </a>
                <a
                  href="#"
                  className="bg-amber-100 text-amber-900 px-6 py-3 rounded-full hover:bg-amber-200 transition-colors inline-flex items-center gap-2"
                >
                  <span>📘</span> VKontakte
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Напишите нам</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-amber-900"
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-amber-900"
                  placeholder="ivan@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-amber-900 resize-none"
                  placeholder="Расскажите, что вы думаете о нас..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-900 text-white py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">Как нас найти</h2>
          <div className="bg-amber-100 rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-amber-800 text-lg">
              Интерактивная карта будет добавлена в ближайшее время
            </p>
            <p className="text-amber-600 mt-2">
              Пока вы можете найти нас по адресу: ул. Кофейная, д. 12
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
