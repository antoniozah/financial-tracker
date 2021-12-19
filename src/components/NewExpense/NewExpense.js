import { nanoid } from 'nanoid';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveNewExpenseHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: nanoid(),
        };
        props.onAddNewExpenses(expenseData);
    };
    return (
        <>
            <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
        </>
    );
};

export default NewExpense;
