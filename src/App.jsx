import "./App.css";

import "./App.css";
import Form from "./Components/Form/Form";
import ItemsList from "./Components/ItemsList/ItemsList";
import Select from "./Components/Select/Select";

function App() {
  return (
    <div className="App">
      <ItemsList />

      <Form />
      <Select />
    </div>
  );
}

export default App;
