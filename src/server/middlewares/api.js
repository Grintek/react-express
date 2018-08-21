// API
const books = [
  {
    id: 1,
    name: 'Сила подсознания, или Как изменить жизнь за 4 недели',
    description:
      'Книга-сенсация ‒ №1 среди книг по самопомощи. Нет необходимости смиряться с реальностью и постоянно подстраиваться, ' +
      'ведь в любой момент мы можем изменить свою жизнь. Автор мировых бестселлеров по развитию мозга, профессор нейрохимии и нейробиологии,' +
      ' доктор Джо Диспенза предлагает научный подход к изменению жизни. Его уникальная программа рассчитана на 4 недели, за это время она научит вас ' +
      'работать со своим подсознанием, чтобы достичь желаемого ‒ вам остается только решить, что конкретно вы хотите изменить в своей жизни. Эта умная, ' +
      'содержательная и насыщенная практическим материалом книга поможет вам освободиться из плена эмоций, наполнить жизнь здоровьем, счастьем и изобилием. ' +
      'Каждый, кто прочтет эту книгу и воспользуется методикой доктора Диспензы, не пожалеет о затраченных усилиях.',
    author: 'Dzho Dispenza'
  },
  {
    id: 2,
    name: 'МЕТРО 2033',
    description:
      ' 2033 год. Весь мир лежит в руинах. Человечество почти полностью' +
      ' уничтожено. Москва превратилась в город-призрак, отравленный радиацией и населенный чудовищами.' +
      ' Немногие выжившие люди прячутся в московском метро - самом большом противоатомном бомбоубежище на земле.' +
      ' Его станции превратились в города-государства, а в туннелях царит тьма и обитает ужас. Артему, жителю ВДНХ, предстоит ' +
      'пройти через все метро, чтобы спасти от страшной опасности свою станцию, а может быть и все человечество. ',
    author: 'Дмитрий Алексеевич Глуховский'
  },
  {
    id: 3,
    name: 'Связанные зоной',
    description:
      'Случайных людей Зона не любит, но тех, кого она приняла, - не отпускает просто так. Сталкер по прозвищу Кремень однажды решил ' +
      'вернуться к обычной жизни – с двумя приятелями покинул Зону, продал хабар и снова стал Алексеем Кожевниковым, старшим мастером заводской' +
      ' ремонтной бригады, любящим мужем и отцом. \nНо Зона жестоко напомнила о себе, и Алексей был вынужден отправиться в свою последнюю ходку, ' +
      'чтобы спасти от смерти десятилетнего сына… \n\nИсточник: https://fishki.net/2276488-luchshie-10-knig-iz-serii-stalker.html © Fishki.net',
    author: 'Роман Владимирович Куликов'
  }
];

module.exports = function setup(app) {
  app.get('/api/books', (req, res) => {
    res.json(books);
  });

  app.get('/api/book/:id', (req, res) => {
    const book = books.find((book) => {
      return book.id.toString() === req.params.id.toString();
    });
    res.json(book);
  });

  app.post('/api/books/add', (req, res) => {
    if (!req.body.name) {
      return res.json({
        error: 'cannot add book with empty name'
      });
    }
    books.push({
      id: books[books.length - 1].id + 1,
      name: req.body.name,
      description: req.body.description,
      author: req.body.author
    });
    return res.json({
      success: true
    });
  });
};
