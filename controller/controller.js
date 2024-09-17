const { getAllEmployeeManager, getSingleEmployeeManager, addEmployeeManager, updateEmployeeManager, deleteEmployeeManager, searchEmployeeManager } = require("../dbManager/manager");

async function addEmployeeController(req, res){
    try{
        const employee = req.body;
        // console.log(employee);
        await addEmployeeManager(employee);
        res.status(200).send('Employee Added');
    } catch(err){
        console.error(err);
        res.status(500).send('Failed to Add Employee');
    }
}

async function getAllEmployeeController(req, res){
    // console.log('hello');
    try{
        const results = await getAllEmployeeManager();
        res.status(200).json(results);
    } catch(err){
        console.error(err);
        res.status(500).send('Failed to Retrieve Employees');
    }
}

async function getSingleEmployeeController(req, res){
    
    try{
        const id = req.params.id;
        // console.log(id);
        if (isNaN(Number(id))) {
            return res.status(400).send('Invalid employee ID');
        }
        const result = await getSingleEmployeeManager(id);
        if(result.length === 0){
            return res.status(404).send('Employee Not Found');
        }
        res.status(200).json(result[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Error finding employee'); 
    }
}

async function updateEmployeeController(req, res){
    try{
        const id = req.params.id;
        const updatedData = req.body;
        await updateEmployeeManager(id, updatedData);
        res.status(200).send('Employee Updated');
    } catch(err){
        console.error(err);
        res.status(500).send('Failed to Update Employee');
    }
}

async function searchEmployeeController(req, res) {
    try{
        const {attribute, value} = req.query;
        const results = await searchEmployeeManager(attribute, value);
        res.status(200).json(results);
    } catch(err){
        console.error(err);
        res.status(500).send('Error Searching Employees...');
    }
}

async function deleteEmployeeController(req, res) {
    try{
        const id = req.params.id;
        await deleteEmployeeManager(id);
        res.status(200).send('Delete Employee...');
    } catch(err){
        console.error(err);
        res.status(500).send('Failed to Delete Employee');
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