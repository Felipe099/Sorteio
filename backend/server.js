const express = require('express');
const cors = require('cors');

const app = express();

const db = require('./models');

db.sequelize.sync().then(() => {
    console.log('Drop and re-sync db.');
});

var corsOptions = {
    origin: 'http://localhost:5001',
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ mensagem: 'Ta fluindo' });
});

require('./routers/user.routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
