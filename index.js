const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Halo decks')
// })

const bodyPs = require('body-parser');
app.use(bodyPs.urlencoded({ extended: false}));
app.use(bodyPs.json());

const kdrRouter = require('./routes/kendaraan.js');
app.use('/api/kendaraan', kdrRouter);

const trnRouter = require('./routes/transmisi.js');
app.use('/api/transmisi', trnRouter);

app.listen(port, () => {
    console.log(`aplikasi berjalan di http:://localhost:${port}`)
})