import { nanoid } from 'nanoid';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';
import expenseIcon from '../../assets/icons/expense.png';
import { useState } from 'react';

const NewExpense = (props) => {
    const [formIsOpened, setFormIsOpened] = useState(false);

    const saveNewExpenseHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: nanoid(),
        };
        props.onAddNewExpenses(expenseData);
        setFormIsOpened(false);
    };

    const changeFormVisibility = () => {
        setFormIsOpened(true);
    };
    return (
        <>
            {!formIsOpened && (
                <button
                    className="btn btn-with-icon"
                    onClick={changeFormVisibility}
                >
                    <img
                        src={expenseIcon}
                        className="bounce"
                        alt="expense icon"
                    />
                    <span>Add new Expense</span>
                </button>
            )}
            {formIsOpened && (
                <ExpenseForm
                    onSaveNewExpense={saveNewExpenseHandler}
                    formStatus={setFormIsOpened}
                />
            )}
        </>
    );
};

export default NewExpense;
