import ExpenseForm from "../ExpenseForm/ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  return (
    <>
      <ExpenseForm data={props} />
    </>
  )
}

export default NewExpense;
