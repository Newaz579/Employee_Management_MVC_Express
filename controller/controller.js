const { getAllEmployeeManager, getSingleEmployeeManager, addEmployeeManager, updateEmployeeManager, deleteEmployeeManager, searchEmployeeManager } = require("../dbManager/manager");

async function addEmployeeController(req, res){
    try{
        const employee = req.body;
        // console.log(employee);
        await addEmployeeManager(employee);
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('Employee Added..');
    } catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type':'text/plain'});
        res.end('Failed Add Employee');
    }
}

async function getAllEmployeeController(req, res){
    // console.log('hello');
    try{
        const results = await getAllEmployeeManager();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(results));
    } catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Failed to Retrieved Employees');
    }
}

async function getSingleEmployeeController(req, res){
    
    try{
        const id = req.params.id;
        // console.log(id);
        if (isNaN(Number(id))) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Invalid employee ID');
            return;
        }
        const result = await getSingleEmployeeManager(id);
        if(result.length === 0){
            res.writeHead(404, {'Content-type':'text/plain'});
            res.end('Employee Not Found');
            return;
        }
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(result[0]));
    } catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type':'text/plain'});
        res.end('error finding employee');
    }
}

async function updateEmployeeController(req, res){
    try{
        const id = req.params.id;
        const updatedData = req.body;
        await updateEmployeeManager(id, updatedData);
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('Update Employee...')
    } catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type':'text/plain'});
        res.end('Failed to Update Employee');
    }
}

async function searchEmployeeController(req, res) {
    try{
        const {attribute, value} = req.query;
        const results = await searchEmployeeManager(attribute, value);
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(results));
    } catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type':'text/plain'});
        res.end('Error Searching Employees...');
    }
}

async function deleteEmployeeController(req, res) {
    try{
        const id = req.params.id;
        await deleteEmployeeManager(id);
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('Delete Employee...');
    } catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type':'text/plain'});
        res.end('Failed to Delete Employee');
    }
}

module.exports = {
    getAllEmployeeController,
    getSingleEmployeeController, 
    addEmployeeController,
    updateEmployeeController,
    searchEmployeeController,
    deleteEmployeeController
};