const express   = require('express');
const app       = express();
const port      = 3000;

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/vendor', express.static(__dirname + 'public/vendor'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html')
  })
  
  app.listen(port, () => {
      console.log('Listening on port ' + port);
    })
