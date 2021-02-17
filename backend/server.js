const express = require('express');
const app = express();
const port = 5645

app.get('/', (req,res) => {
    console.log(res.body)
    res.send({
        "name": "Joe"
    })
})


app.listen(port, () => console.log(`App is listening on port ${port}`))