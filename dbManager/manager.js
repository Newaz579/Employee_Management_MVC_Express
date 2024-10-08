const { db } = require("./db");

function addEmployeeManager(employee){
    // console.log(employee);
    const sql = 'INSERT INTO employees SET ?';
    return new Promise((resolve, reject) => {
        db.query(sql, employee, (err, result) => {
            if(err){
                return reject(err);
            } 
            return resolve(result);
            
        });
    });
}

function getAllEmployeeManager(){
    // const sql = "SELECT * FROM employees";
    const sql = `SELECT 
    id, 
    name, 
    age, 
    gender, 
    birthdate, 
    email, 
    contactNo, 
    emergencyContactNo, 
    bloodGroup, 
    presentAddress, 
    permanentAddress, 
    department
    FROM employees`;

    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results)
        })
    })
}

function getSingleEmployeeManager(id){
    // const sql = `SELECT * FROM employees WHERE id = ?`
    const sql = `SELECT 
                    id, 
                    name, 
                    age, 
                    gender, 
                    birthdate, 
                    email, 
                    contactNo, 
                    emergencyContactNo, 
                    bloodGroup, 
                    presentAddress, 
                    permanentAddress, 
                    department
                    FROM employees WHERE id = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

function updateEmployeeManager(id, updatedData){
    const sql = 'UPDATE employees SET ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [updatedData, id], (err, result) => {
            if(err){
                return reject(err);
            }
            return resolve(result)
        })
    })
}

function searchEmployeeManager(attribute, value){
    const sql = `SELECT id, 
                    name, 
                    age, 
                    gender, 
                    birthdate, 
                    email, 
                    contactNo, 
                    emergencyContactNo, 
                    bloodGroup, 
                    presentAddress, 
                    permanentAddress, 
                    department
                    FROM employees WHERE ?? LIKE ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [attribute, `${value}`], (err, result) => {
            if(err){
                return reject(err);
            }
            return resolve(result);
        })
    })
}

function deleteEmployeeManager(id){
    const sql = 'DELETE FROM employees WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, id, (err, result) => {
            if(err){
                return reject(err);
            }
            return resolve(result);
        })
    })
}

module.exports = {
    getAllEmployeeManager,
    getSingleEmployeeManager,
    addEmployeeManager,
    updateEmployeeManager,
    searchEmployeeManager,
    deleteEmployeeManager
}