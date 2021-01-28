const app = require('./server');
require('./dao/database');

app.listen(app.get('port'), () => {
    console.log('escuchando en el puerto', app.get('port'))
})