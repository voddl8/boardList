const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId; // _id 사용하기 위해 필요
require('dotenv').config();
const cors = require('cors');


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'project/build')));
app.use(cors());

let db;
MongoClient.connect(process.env.DB_URL, function(error, client){
    if (error) return console.log(error);
    db = client.db('Board');
    app.listen(process.env.PORT, function(){
        console.log('listening on 8090')
    });
});

app.get('/' , function(req, res){
    res.send(req.body);
    console.log(req.body);
});

app.post('/' , function(req, res){
    res.send("데이터 전송 성공");
    console.log(req.body);
    db.collection('boardList').insertOne({user: req.body._id, title: req.body.title, contents: req.body.content},
        function(err,res){
            console.log(res);
        });
});

app.get('/boardList', function(req, res){
    db.collection('boardList').find({}).toArray(function(err,result){
        res.send(result);
    });
});

app.get('/update', function(req, res){
  res.send("업데이트 확인")
  console.log(req.body);
});

app.post('/update', function(req, res){
  res.send('ss')
  console.log(req.body);
  console.log(req.body.id);
  db.collection('boardList').updateOne({_id : ObjectId(req.body.id) },
     {$set: {title : req.body.title , contents : req.body.content}}, function(err,result){

     });
});

app.post('/delete', function(req, res){
  res.send('ss')
  console.log(req.body);
  console.log(req.body.delId);
  db.collection('boardList').deleteOne({_id : ObjectId(req.body.delId) },
     function(err,result){

     });
});








// app.get("/api/get", (req, res)=>{
//     const sqlQuery = "SELECT * FROM simpleboard;";
//     db.query(sqlQuery, (err, result)=>{
//         res.send(result);
//     })
// })

// app.get('http://localhost:8090/boardList/write', function(req,res){
//     res.redirect('http://localhost:8080/boardList');
//     console.log(req.body);
// });

// app.get('/boardList/write', function(req, res){
//     res.render('write.tsx');
// });

// app.post('/boardList/write', function(req,res){
//     res.redirect('/App.tsx');
//     let data = 요청.body;
//     console.log(data);
// });



//리액트가 라우트 하게 하는 설정 가장 최하단에 둬야함
// app.get('*', function(req, res){
//     res.sendFile(path.join(__dirname, '/board/public/index.html'));
// });


// app.get('http://localhost:3000/', function(req, res){
//     res.sendFile(path.join(__dirname, 'react-project/build'));          // 경로 변경필요
// });