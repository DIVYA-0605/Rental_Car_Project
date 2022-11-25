import "./App.css";
import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Body />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
