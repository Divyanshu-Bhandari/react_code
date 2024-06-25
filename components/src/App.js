import Product from "./Product";
import "./App.css";

function App() {
  const product1 = {
    name: "pen",
    color: "blue",
    length: "6inch",
  };
  return (
    <div className="App">
      <Product product_desc={product1} />
    </div>
  );
}

export default App;
