import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveNewExpense, formStatus }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');

    const titleHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateHandler = (event) => {
        setExpenseDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const addExpenseData = {
            title,
            amount,
            expenseDate: new Date(expenseDate),
        };

        onSaveNewExpense(addExpenseData);
        setTitle('');
        setAmount('');
        setExpenseDate('');
    };

    return (
        <form className="form box-style" onSubmit={submitHandler}>
            <div className="form__container">
                <div className="form__group form__group--50">
                    <label htmlFor="name">Title</label>
                    <input
                        type="text"
                        placeholder="example: Buy milk"
                        name="name"
                        value={title}
                        onChange={titleHandler}
                    />
                </div>
                <div className="form__group form__group--50">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        placeholder="example: 9.99"
                        name="amount"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={amountHandler}
                    />
                </div>
                <div className="form__group form__group--50">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={expenseDate}
                        onChange={dateHandler}
                    />
                </div>
            </div>
            <div className="form__submit">
                <button
                    className="btn btn--red"
                    onClick={() => formStatus(false)}
                >
                    Cancel
                </button>
                <button className="btn btn--blue" type="submit">
                    New expense
                </button>
            </div>
        </form>
    );
};

export default ExpenseForm;
