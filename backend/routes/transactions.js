
const router = require('express').Router();

router.post('/add-income', addIncome)
        .get('/get-incomes', getIncomes)
        .delete('/delete-income/:id', deleteIncome)
        .post('/add-expenses', addExpenses)
        .get('/get-expenses', getExpenses)
        .delete('/delete-expenses/:id', deleteExpenses)

module.exports = router