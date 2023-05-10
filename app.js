const express = require ("express")
const path = require ("path")
const app = express();
const port = process.env.PORT || 3001;
app.listen(port, () =>console.log("servidor corriendo en el puerto ${port}"));
app.use (express.static("public"));

app.get('/', (req, res)=>{

    res.sendFile (path.join(__dirname, './views/index.html'))
    
})
app.get('/form.html', (req, res)=>{

    res.sendFile (path.join(__dirname, './views/form.html'))
    
})
app.get('/login.html', (req, res)=>{

    res.sendFile (path.join(__dirname, './views/login.html'))
    
})
