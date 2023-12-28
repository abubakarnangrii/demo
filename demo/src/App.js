
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

function App() {
  const expenses = [
    {
      date: new Date(2023, 8, 27),
      title: "Car Payment",
      price: "$242.56",
    },
    {
      date: new Date(2023, 2, 2),
      title: "Phone Payment",
      price: "$298.56",
    },
    {
      date: new Date(2023, 12, 28),
      title: "Food",
      price: "$120.56",
    },
    {
      date: new Date(2023, 5, 12),
      title: "Cloths",
      price: "$261.56",
    },
  ];
  return (
    <div className="App">
      <h1 className='Expense-item-title'>Expense Item</h1>
      <NewExpense/>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
