const express = require('express') //require : Nap thu vien
const app = express() // function da duoc nap san : express : doi tuong xay dung website.
const port = 3000 // cong 3000

//route
//co the viet cach khac : 
//app.get('/', function(req, res){ return res.send("Hello World")})
app.get('/tin-tuc', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
  return res.send('Hello Nguyen Nhat Hoang ha!')
})
//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})