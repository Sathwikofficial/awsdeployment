const express = require('express');



const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on the port number ${PORT}`));


app.get('/klef',async function(req,res)
{
        res.json("KL DEEMED TO BE UNIVERSITY");
});