import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <TopBar />
      <AllTheBooks />
    </div>
  );
}

export default App;
