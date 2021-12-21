import Expense from '../Expense/Expense';
import './ExpenseList.css';

const ExpenseList = ({ filteredExpenses, year }) => {
    if (filteredExpenses.length === 0) {
        return (
            <div className="expense-message box-style">
                <p className="expense-message__text">
                    No expenses found for Year:
                    <span className="highlight-text"> {year}</span>
                </p>
            </div>
        );
    }

    return (
        <ul>
            {filteredExpenses.map((expense) => (
                <Expense expense={expense} key={expense.id} />
            ))}
        </ul>
    );
};

export default ExpenseList;
