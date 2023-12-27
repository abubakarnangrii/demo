
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';

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
      date: new Date(2023,5,12),
      title: "Cloths",
      price: "$261.56",
    },
  ];
  return (
    <div className="App">
        <h1 className='Expense-item-title'>Expense Item</h1>
      <ExpenseItem date={expenses[0].date} title={expenses[0].title} price={expenses[0].price} />
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} price={expenses[1].price} />
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} price={expenses[2].price} />
      <ExpenseItem date={expenses[3].date} title={expenses[3].title} price={expenses[3].price} />
    </div>
  );
}

export default App;
