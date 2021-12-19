import { useState } from 'react';
import { nanoid } from 'nanoid';
import Expenses from './components/Expenses/Expenses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Container from './components/Layout/Container';
import Section from './components/Layout/Section';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

const DUMMY_DATA = [
    {
        id: nanoid(),
        title: 'Buy Milk!',
        amount: '2.99',
        expenseDate: new Date(),
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_DATA);

    const addNewExpenses = (newExpenseData) => {
        setExpenses((prevExpenses) => {
            return [newExpenseData, ...prevExpenses];
        });
    };

    return (
        <div className="app">
            <Header />
            <Section className="app__content">
                <Container className="container">
                    <NewExpense onAddNewExpenses={addNewExpenses} />
                    <Expenses expenseData={expenses} />
                </Container>
            </Section>
            <Footer />
        </div>
    );
}

export default App;
