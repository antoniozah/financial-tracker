import './Expense.css';

const Expense = ({ expense }) => {
  const day = expense.expenseDate.getDate();
  const month = expense.expenseDate.toLocaleString('default', {
    month: 'short',
  });
  const year = expense.expenseDate.getFullYear();

  return (
    <div className='expense box-style'>
      <div className='expense__date'>
        <span>{day}</span>
        <span>{month}</span>
        <span>{year}</span>
      </div>
      <h3 className='expense__title'>{expense.title}</h3>
      <span className='expense__amount'>${expense.amount}</span>
    </div>
  );
};

export default Expense;
