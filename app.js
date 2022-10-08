// 01 setting projek express dan memanggil cookie parser
const express = require('express')
const cookieParser = require('cookie-parser')

//02 setup express app
const app = express()

// 03 gunakan cookie parser
app.use(cookieParser());

//04 membuat route homepage
app.get('/', (req, res) => {
res.send('Selamat Datang Di Https Cookies');
});

//05 buat sebuah cookies
// app.get('/setcookie',(req, res)=>{
//     res.cookie('Cookie token','Nama value cookie')
//     res.send('Cookie telah tersimpan')
// })

//Cookie yang aman
app.get('/setcookieaman',(req, res)=>{
    res.cookie('Cookie yang aman','Value cookie yang aman', {
        maxAge: 5000,
        expires: new Date ('01 01 2023'),
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    });

    res.send('Cookie ini telah tersimpan')

})

// menghapus cookie
app.get('/hapus', (req, res)=> {
    res.clearCookie()
    res.send('Menghapus Cookie')
})

// mengambil cookie
app.get('/getcookie', (req, res)=> {
    console.log(req.cookies)
    res.send(req.cookies)
})



app.listen(8000,() => console.log('Server running pada port 8000'))
