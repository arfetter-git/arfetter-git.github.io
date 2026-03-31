export default function About() {
  const team = [
    { name: 'Александр', role: 'Основатель и главный обжарщик', emoji: '👨‍🍳' },
    { name: 'Мария', role: 'Старший бариста', emoji: '👩‍🍳' },
    { name: 'Дмитрий', role: 'Бариста', emoji: '👨‍🔧' },
    { name: 'Елена', role: 'Кондитер', emoji: '👩‍🎨' },
  ];

  const values = [
    {
      icon: '🌱',
      title: 'Экологичность',
      description: 'Мы используем только биоразлагаемую посуду и перерабатываем кофейную гущу.',
    },
    {
      icon: '🤝',
      title: 'Честная торговля',
      description: 'Закупаем зёрна напрямую у фермеров, обеспечивая им справедливую оплату.',
    },
    {
      icon: '⭐',
      title: 'Качество',
      description: 'Контролируем каждый этап: от отбора зёрен до подачи чашки гостю.',
    },
    {
      icon: '💚',
      title: 'Забота',
      description: 'Создаём уютную атмосферу, где каждый гость чувствует себя как дома.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">О нашей кофейне</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            История любви к кофе, которая началась в 2015 году
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Наша история</h2>
            <div className="space-y-4 text-lg text-amber-800 leading-relaxed">
              <p>
                Всё началось с маленькой поездки в Италию, где наш основатель Александр впервые 
                попробовал настоящий эспрессо в небольшой семейной кофейне в Риме. Этот вкус 
                настолько впечатлил его, что он решил привезти культуру настоящего кофе в Россию.
              </p>
              <p>
                В 2015 году мы открыли нашу первую кофейню площадью всего 30 квадратных метров. 
                Мы работали сами, жарили зёрна на маленьком ростере и лично знали каждого гостя.
              </p>
              <p>
                Сегодня Aroma Coffee — это команда из 15 человек, собственная обжарочная и 
                три уютные кофейни в городе. Но мы сохранили главное — трепетное отношение 
                к каждой чашке кофе и к каждому гостю.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">{value.title}</h3>
                <p className="text-amber-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{member.name}</h3>
                <p className="text-amber-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">9+</div>
              <div className="text-amber-200">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50 000+</div>
              <div className="text-amber-200">Чашек в год</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-amber-200">Сотрудников</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-amber-200">Арабика</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
