const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');


// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/listings/:id', express.static(path.join(__dirname, 'public')));


//Reservations - Alice
app.get('/listings/:id/reservations', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://13.57.206.173/listings/${id}/reservations`);
});


//Reviews - Wilson
app.get('/listings/:id/reviews', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://18.191.158.244/listings/${id}/reviews`);
});

app.get('/listings/:id/listings', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://18.191.158.244/listings/${id}/listings`);
});


//Descriptions - Blake
app.get('/listings/:id/description', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://3.16.13.208/listings/${id}/description`);
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});


// const routes = {
// 	reviews: 3000
// 	lsitings: 3001
// }

//Reviews rerouting - Wilson
// app.get(`/listings/:id/reviews`, (req, res) => {
// 	axios.get(`http://18.191.158.244/listings/${req.params.id}/reviews`)
// 		.then(resp => res.status(200).send(resp.data))
// 		.catch(err => res.status(500).end(err.message));
// })

// app.get(`/listings/:id/listings`, (req, res) => {
// 	axios.get(`http://18.191.158.244/listings/${req.params.id}/listings`)
// 		.then(resp => res.status(200).send(resp.data))
// 		.catch(err => res.status(500).end(err.message));
// })
