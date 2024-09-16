const express = require('express');
// const app = express();
const { 
    getAllEmployeeController, 
    getSingleEmployeeController, 
    addEmployeeController, 
    updateEmployeeController, 
    deleteEmployeeController, 
    searchEmployeeController
} = require('../controller/controller');

const router = express.Router()


router.post('/add-employee', addEmployeeController)

router.get('/getAll', getAllEmployeeController);

router.get('/getsingle-employee/:id', getSingleEmployeeController);

router.get('/search-employees', searchEmployeeController);

router.put('/update-employee/:id', updateEmployeeController);

router.delete('/delete-employee/:id', deleteEmployeeController);

module.exports = {
    router,
}

