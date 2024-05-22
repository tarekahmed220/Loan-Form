import React, { useState } from "react";
import SubmitMessage from "./submitMessage";
import "./loanForm.css";

export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    age: "",
    employee: false,
    salary: "",
  });

  const dataChecker = data.name === "" || data.age === "" || data.phone === "";

  function handelSubmit(e) {
    if (data.age < 15 || data.age > 50) {
      setErrorMessage("sorry but your age is not allowed");
    }
    if (data.phone.length < 11 || data.phone.length >= 12) {
      setErrorMessage("sorry but your phone number is not valid");
    }
    e.preventDefault();
    setShowModel(true);
  }
  return (
    <div className="formParent" style={{}}>
      <form onSubmit={handelSubmit}>
        <h1>Requesting a Loan</h1>
        <hr />

        <label id="first-label">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          autoComplete="on"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Put Your Phone Number"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />

        <label>Age</label>
        <input
          type="number"
          placeholder="Your Age must be between 15-50 "
          value={data.age}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />

        <label>Are you an employee</label>
        <input
          type="checkBox"
          checked={data.employee}
          onChange={(e) => setData({ ...data, employee: e.target.checked })}
        />

        <label>Salary</label>
        <select
          placeholder="Write Your Age"
          value={data.salary}
          onChange={(e) => setData({ ...data, salary: e.target.value })}
        >
          <option>less than $500</option>
          <option>between $500 and $2000</option>
          <option>more than $2000</option>
        </select>

        <button
          className={dataChecker ? "form-btn disabled" : "form-btn enabled"}
          type="submit"
          disabled={dataChecker}
        >
          Submit
        </button>
      </form>
      <SubmitMessage
        showModel={showModel}
        setShowModel={setShowModel}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
}
