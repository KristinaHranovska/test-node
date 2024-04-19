// const express = require('express');
// const app = express();

// app.get('/con?tact', (req, res) => {
//     res.send('<h1>Contact page!</h1>');
// });

// app.use((req, res, next) => {
//     console.log('Наше проміжне ПЗ');
//     next();
// });

// app.get('/contact/:id', (req, res) => {
//     res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
// });

// app.patch('/user/:userid', (req, res) => {
//     const id = req.params.userid;
//     // виконуємо необхідні дії
// });

/*
Браузер відправить на URL <урл нашого застосунку>/login дані форми.
Це будуть дві змінні: email та password.
За це відповідають атрибути name у відповідних тегів input.
Ці дані ми повинні прийняти на стороні сервера наступним обробником

<form action="/login" method="POST">
 <label for="email">Email</label>
 <input type="text" name="email" id="email" />
 <label for="password">Пароль</label>
 <input type="password" name="password" id="password" />
 <button type="submit">Увійти</button>
</form>
*/

// app.use(express.urlencoded({ extended: false }));

// app.post('/login', (req, res, next) => {
//     const { email, password } = req.body;
//     // Виконуємо необхідні операції
// });

/* Rezult:
{
 email: 'Значення, що було введено в поле input',
 password: 'Значення, що було введено в поле input'
}
*/

// app.listen(3000, () => {
//     console.log('Example app listening on port 3000!');
// });

// const expresss = require('express');
// const router = expresss.Router();
// // визначимо домашній роутер
// router.get('/', (req, res) => {
//     res.send('Це головний роутер');
// });
// // визначимо роутер about
// router.get('/about', (req, res) => {
//     res.send('About');
// });
// module.exports = router;

// app.all('/anything', (req, res, next) => {
//     console.log('Anything method.');
//     next(); // передаємо управління далі
// });

// app
//     .route('/blog')
//     .get((req, res) => {
//         res.send('Get a list of blog');
//     })
//     .post((req, res) => {
//         res.send('Add a record to blog');
//     })
//     .put((req, res) => {
//         res.send('Update blog');
//     });


// // підключені всі сторонні пакети, які потрібні для функціонування застосунку
// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// // ми підключаємо роути
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

// // створюється екземпляр застосунку та підключаємо шаблони
// const app = express();
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// // блок підключення проміжного ПЗ
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// // встановлюємо обробку статичних ресурсів
// app.use(express.static(path.join(__dirname, 'public')));

// // підключення роутерів до застосунку
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // Спочатку відбувається обробка неіснуючого роуту або помилка 404
// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });
// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });
// module.exports = app;
