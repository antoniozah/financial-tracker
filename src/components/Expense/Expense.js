import './Expense.css';

const Expense = () => {
  return (
    <div className="expense box-style">
      <div className="expense__date">
        <span>March</span>
        <span>20</span>
        <span>2021</span>
      </div>
      <h3 className="expense__title">Buy milk!</h3>
      <span className="expense__amount">$55.99</span>
    </div>
  )
}

export default Expense
