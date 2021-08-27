const express = require('express');
const path = require('path');


const app = express();
const port = 3000;
const rootDir = path.join(path.dirname(require.main.filename), 'weilue-personal-website')

app.use('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'index.html'));
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})