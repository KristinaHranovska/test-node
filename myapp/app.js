const express = require('express');
const app = express();

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

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

