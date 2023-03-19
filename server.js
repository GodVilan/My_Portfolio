import express, {request, response} from "express";

const app = express();
const port = process.env.PORT || 3010;
const options = {
	extensions:['htm','html','css','js','ico','jpg','jpeg','png','svg','pdf'],
	index:['index.html'],
}
app.use(express.static("frontend"));
app.use(express.json());


app.get("/", function(req, res){
	res.sendFile(process.cwd()+"/frontend/index.html");
});

app.listen(port, function(){
    console.log("Server running on http://localhost:"+port);
});