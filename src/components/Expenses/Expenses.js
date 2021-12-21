import { useState } from 'react';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseList from '../ExpenseList/ExpenseList';
import './Expenses.css';

const Expenses = ({ expenseData }) => {
    const [yearFilter, setYearFilter] = useState('2021');

    const filteredExpenses = expenseData.filter(
        (expense) => expense.expenseDate.getFullYear().toString() === yearFilter
    );

    const filterChangeYear = (year) => {
        setYearFilter(year);
    };

    return (
        <div className="expenses box-style">
            <ExpenseFilter
                onYearChange={filterChangeYear}
                selectedYear={yearFilter}
            />
            <ExpenseList
                filteredExpenses={filteredExpenses}
                year={yearFilter}
            />
        </div>
    );
};

export default Expenses;
