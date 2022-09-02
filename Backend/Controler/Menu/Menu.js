const con = require("../../Model/medel");

const get = async (req, res) => {
    try{
        let data = "SELECT * FROM menu";
        await con.query(data, (err, result) =>{
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

const post = async (req, res) => {
    try{
        let data = req.body;
        let sqlquery ="INSERT INTO menu SET ?";
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

const update = async (req, res) => {
    try{
        let data = [req.body, req.params.m_id];
        let sqlquery = "UPDATE menu SET ? WHERE m_id =?";
        await con.query(sqlquery, data, (err, result) =>{
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

const destroy = async (req, res) => {
    try{
        let data = req.params.m_id;
        let sqlquery = "DELETE FROM menu WHERE m_id =?";
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