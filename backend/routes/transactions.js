const { addIncome, getIncomes, deleteIncome } = require('../controllers/income.');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense.');


const router = require('express').Router();

router.post('/add-income', addIncome)
        .get('/get-incomes', getIncomes)
        .delete('/delete-income/:id', deleteIncome)
        .post('/add-expenses', addExpense)
        .get('/get-expenses', getExpense)
        .delete('/delete-expenses/:id', deleteExpense)

module.exports = router