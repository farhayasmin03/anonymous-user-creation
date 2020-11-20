let express = require('express');
let app = express()
app.get('/', (req,res) =>{
    res.status(200).send("Welcome ")
})
app.listen(3000, (err) => {
    if (err)
        throw err;
    console.log('listening on port 3000');
});