# Приклад клієнтсько-серверного веб додатку
Додаток дозволяє логінізуватись в систему використовуючи кодову фразу.
Якщо фраза відсутня в базі данних, можна створити нову. 
Після авторизації кодову фразу можна змінити 
# Технології
При верстанні сторінки використовувався фрейморк [Twitter Bootstrap](http://getbootstrap.com/).
Для для опрацювання клієнтських подій, маніпуляцій DOM, та HTTP запитів використовувався 
[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) та бібліотека [JQuery](https://jquery.com/)
Для створення серверної частини використовувалась технологія [Node.js](https://nodejs.org/en/) і фреймворк [Express.js](http://expressjs.com/)
В якості бази даних використовуватась технологія [MongoDB](https://www.mongodb.org/) та [MongoLab](https://mongolab.com/) в якості хмарного хранилища.
Для комунікації між [Express.js](http://expressjs.com/) та [MongoDB](https://www.mongodb.org/) використовувалась бібліотека [Mongoose](http://mongoosejs.com/)
# Інсталяція

Для запуску додатку потрібно встановити Node.js - https://nodejs.org/en/

Після установки потрібно проінсталювати залежності(dependency). Для цього знаходячись в папці з додатком в консолі потрібно прописати команду
```js
npm install
```
Після закінчення завантаження залежностей потрібно запустити сервер командою (знаходячись в папці з додатком)
```js
node server.js
```
Додаток буде доступний за адрессою: [http://localhost:3000](http://localhost:3000)

# Структура
Файл [serve.js](https://github.com/Elythingol/studentsExample/blob/master/server.js) містить налаштування сервера (підключення до бази, REST роути, функціонал). Файл [package.json](https://github.com/Elythingol/studentsExample/blob/master/package.json) містить інструкції для npm модуля. [.gitignore](https://github.com/Elythingol/studentsExample/blob/master/.gitignore) файл містить список файлів та папок які будуть ігноровані при комітах. У папці [public](https://github.com/Elythingol/studentsExample/tree/master/public) зберігаються client-side файли: [index.html](https://github.com/Elythingol/studentsExample/blob/master/public/index.html) - основний файл розмітки, [app.js](https://github.com/Elythingol/studentsExample/blob/master/public/app.js) - файл з написаним js функціоналом, libs (утворюється в процесі виконання команди npm install або шляхом команди bower install після установки bower) - папка з бібліотеками. 
