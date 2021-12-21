import { useState } from 'react';
import Expense from '../Expense/Expense';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import './Expenses.css';

const Expenses = ({ expenseData }) => {
    const [yearFilter, setYearFilter] = useState('2020');

    const filterChangeYear = (year) => {
        setYearFilter(year);
    };

    return (
        <div className="expenses box-style">
            <ExpenseFilter
                onYearChange={filterChangeYear}
                selectedYear={yearFilter}
            />
            {expenseData.map((expense) => (
                <Expense expense={expense} key={expense.id} />
            ))}
        </div>
    );
};

export default Expenses;
