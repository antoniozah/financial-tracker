import { useState } from 'react';
import { nanoid } from 'nanoid';
import Expenses from './components/Expenses/Expenses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Container from './components/Layout/Container';
import Section from './components/Layout/Section';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenses, setExpenses] = useState([
    {
      id: nanoid(),
      title: 'Buy Milk!',
      amount: '2.99',
      expenseDate: new Date(),
    },
  ]);

  const submitHandler = (event) => {
    event.preventDefault();
    const addExpenseData = [
      ...expenses,
      {
        id: nanoid(),
        title,
        amount,
        expenseDate: new Date(expenseDate),
      },
    ];

    setExpenses(addExpenseData);
    setTitle('');
    setAmount('');
    setExpenseDate('');
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setExpenseDate(event.target.value);
  };

  return (
    <div className='app'>
      <Header />
      <Section className='app__content'>
        <Container className='container'>
          <NewExpense
            onSubmitHandler={submitHandler}
            onChangeTitle={titleHandler}
            title={title}
            onChangeAmount={amountHandler}
            amount={amount}
            onChangeDate={dateHandler}
            expenseDate={expenseDate}
          />
          <Expenses expenseData={expenses} />
        </Container>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
