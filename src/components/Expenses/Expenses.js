import Expense from '../Expense/Expense';
import './Expenses.css';

const Expenses = ({ expenseData }) => {
  return (
    <div className='expenses'>
      {expenseData.map((expense) => (
        <Expense expense={expense} key={expense.id} />
      ))}
    </div>
  );
};

export default Expenses;
