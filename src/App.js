import './App.css';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import Expenses from './components/Expenses/Expenses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Container from './components/Layout/Container';
import Section from './components/Layout/Section';

function App() {
  return <div className='app'>
      <Header />
      <Section className="app__content">
        <Container className="container">
          <ExpenseForm />
          <Expenses />
        </Container>
      </Section>
      <Footer />
  </div>;
}

export default App;
