import Expense from '../Expense/Expense';
import './Expenses.css';

const Expenses = ({ expenseData }) => {
    return (
        <div className="expenses box-style">
            {expenseData.map((expense) => (
                <Expense expense={expense} key={expense.id} />
            ))}
        </div>
    );
};

export default Expenses;
