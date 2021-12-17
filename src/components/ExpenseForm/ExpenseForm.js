import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form className="form box-style">
      <div className="form__group form__group--50">
        <label htmlFor="name">Title</label>
        <input type="text" placeholder="example: Buy milk" name="name" />
      </div>
      <div className="form__group form__group--50">
        <label htmlFor="amount">Amount</label>
        <input type="number" placeholder="example: 9.99" name="amount" min="0.01" step="0.01" />
      </div>
      <div className="form__group form__group--50">
        <label htmlFor="date">Date</label>
        <input type="date" name="date" />
      </div>
    </form>
  )
}

export default ExpenseForm;
