
import './App.css';
import Todo from './component/Todo';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="container" >
      <div id="f1">
          <h1>Notes</h1>
          <Todo/>
      </div>
   </div>
   
  );
}

export default App;
