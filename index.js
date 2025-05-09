import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(__dirname +'/public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("index",{button :"New Joke"});
});

app.post("/joke",async (req,res)=>{
    const category = req.body.category || "Any";

    try{
        const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}`);
        const type = response.data.type;
        if(type==="single"){
            res.render("index",{single:response.data.joke, button: "↻"});
        }else{
            res.render("index",{single:response.data.setup,
                delivery: response.data.delivery,
                button:"↻"
            });
        }
    }catch(error){
        console.log(response.data.message);
    };
    

});
app.listen(port,(req,res)=>{
    console.log(`server launched at port ${port}`);
});