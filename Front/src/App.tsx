import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterIndex from "./routes/RouterIndex";
function App() {
  return (
    <div>
      <BrowserRouter>
      <RouterIndex />
      </BrowserRouter>
    </div>
  );
}

export default App;

