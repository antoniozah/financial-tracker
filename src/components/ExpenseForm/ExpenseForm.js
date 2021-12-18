import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const {
    onSubmitHandler,
    onChangeTitle,
    onChangeAmount,
    onChangeDate,
    title,
    amount,
    expenseDate,
  } = props.data;

  return (
    <form className='form box-style' onSubmit={onSubmitHandler}>
      <div className='form__container'>
        <div className='form__group form__group--50'>
          <label htmlFor='name'>Title</label>
          <input
            type='text'
            placeholder='example: Buy milk'
            name='name'
            value={title}
            onChange={onChangeTitle}
          />
        </div>
        <div className='form__group form__group--50'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            placeholder='example: 9.99'
            name='amount'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={onChangeAmount}
          />
        </div>
        <div className='form__group form__group--50'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            name='date'
            value={expenseDate}
            onChange={onChangeDate}
          />
        </div>
      </div>
      <div className='form__submit'>
        <button className='btn btn--blue' type='submit'>
          New expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
