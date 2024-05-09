

exports.addExpenses = async (req, res) => {
    const {title, amount, category, description, date} = req.body

    const income = ExpensesSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields required.'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number.'})
        }
        await income.save()
        res.status(200).json({message: 'Expenses Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }



    console.log(income);
}


exports.getExpenses = async (req, res) => {
    try {
        const incomes = await ExpensesSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}



exports.deleteExpenses = async (req, res) => {
    const {id} = req.params;
    ExpensesScehma.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'Expenses Deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'server Errror'})
        })



}










