const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


// app.use(morgan('dev'));
app.use('/listings/:id', express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});