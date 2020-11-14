const express = require('express');
const favicon = require('express-favicon');
// const compression = require('compression');
// const morgan = require('morgan');
const path = require('path');
const app = express();
// const normalizePort = port => parseInt(port, 10)
// const PORT = normalizePort(process.env.PORT || 4000);


if(process.env.NODE_ENV === 'production'){
app.use(favicon(__dirname + 'my-app/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
}
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(` server running ${port}`));
