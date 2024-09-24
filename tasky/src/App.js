import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="Container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today"description="Do dishes and keep away"/>
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away"/>
      <Task title="Tidy" deadline="Today" description="Deep clean the kitchen"/>
    </div>
  );
}

export default App;
