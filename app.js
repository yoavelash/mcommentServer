var express = require('express');
var logger = require('morgan');
var app = express();
const { createComment } = require('./services/commentService');
const cors = require ('cors');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get('/comment/:studentName/:gender/:overallStatus/:overallGit/:overallTests', (req, res, next) => {
  res.set('Content-Type', 'text/html');
  res.send(JSON.stringify(createComment(req.params)));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
