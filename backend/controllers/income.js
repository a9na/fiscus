

exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
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
            return res.status(400).json({message: 'All fields required.'})
        }
    } catch (error) {
        
    }



    console.log(income);
}