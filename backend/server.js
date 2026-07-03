import mysql from "mysql2";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
});

app.post('/signup',(req,res)=>
{
    const sql="insert into login(`name`,`email`,`password`) values(?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql,[values],(err,data)=>{
        if(err)
        {
            return res.json("Error in signup server code");
        }
        return res.json(data);
    });
});

app.post('/login',(req,res)=>
{
    const sql="select * from login where `email`=? and `password`=? ";
    db.query(sql,[req.body.email,req.body.password],(err,data)=>{
        if(err)
        {
            return res.json("Error in login code at server side");
        }
        if(data.length>0)
        {
            return res.json("Success");
        }
        else
        {
            return res.json("Fail");
        }
    });
});

app.listen(8081, ()=>{
    console.log("Server is listening at port 8081");
});