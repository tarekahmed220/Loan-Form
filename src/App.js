import LoanForm from "./LoanForm";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LoanForm />
      {/* <Routes>
        <Route path="/hello" element={<h1>Hello from react router</h1>} />
      </Routes> */}
    </div>
  );
}

export default App;
