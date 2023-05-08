const express = require ("express")
const path = require ("path")
const app = express();
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
app.listen(3000, ()=>{
    console.log("Servidor escuchando en el puerto 3000")
});