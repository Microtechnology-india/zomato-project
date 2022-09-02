const con = require("../../Model/medel");

const get = async (req, res) => {
    try{
     let data = "SELECT * FROM hotal";
     await con.query(data, (err, result) =>{
    if(err){
        return res.send({Error: err.sqlMessage});
    }
    res.send({status:200, "response":result})
     })
}
catch(err){
    res.send(err.sqlMessage);
}
}

const post = async (req, res) =>{
    try{
        let data = req.body;
        let sqlquery = "INSERT INTO hotal SET ?";
        
        await con.query(sqlquery,data, (err, result) =>{
            if(err){
                return res.send({Error: err.sqlMessage})
            }
            res.send({status: 200, "response": result})
        })
    }
    catch(err){
        res.send(err.sqlMessage);
    }
}

const update = async (req, res) =>{
    try{
        let data = [req.body, req.params.h_id];
        let sqlquery = "UPDATE hotal set ? WHERE h_id=?"
        await con.query(sqlquery, data, (err, result) =>{
            if(err){
                return res.send({Error: err.sqlMessage})
            }
            res.send({status: 200, "response":result})
        })
    }
    catch(err){
        res.send(err.sqlMessage);
    }
}

const destroy = async (req, res) =>{
    try{
        let data = req.params.h_id;
        let sqlquery = "DELETE FROM hotal WHERE h_id =?";
        await con.query(sqlquery, data, (err, result) =>{
            if(err){
                return res.send({Error: err.sqlMessage})
            }
            res.send({status: 200, "response":result})
        })
    }
    catch(err){
        res.send(err.sqlMessage);
    }
}

module.exports = {get, post, update, destroy}