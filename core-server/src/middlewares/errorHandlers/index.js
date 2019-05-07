module.exports = function(app) {
  app.use(function(req, res, next) {
    next({
      status: 404,
      message: 'Not found'
    });
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log('Error... ', err);
    // render the error page
    res.status(err.status || 500);
    res.send(err);
  });
}