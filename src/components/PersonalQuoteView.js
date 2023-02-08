import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import quoteAction from "../redux/actions/quote";

export default function PersonalQuoteView() {
  const dispatch = useDispatch();
  const [quote, setQuote] = useState("");
  const [submittedQuote, setSubmittedQuote] = useState([]);

  const changeHandler = (e) => {
    setQuote(e.target.value);
  };

  const handleSubmit = (e, quote) => {
    e.preventDefault();

    !submittedQuote.includes(quote) &&
      setSubmittedQuote([...submittedQuote, quote]);

    dispatch(quoteAction.createDataThunk());
  };
  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e, quote);
        }}
      >
        <input
          type="text"
          name="quote"
          placeholder="Enter your email address"
          required
          onChange={changeHandler}
        />
        <button type={`submit`}>Submit</button>
      </form>
      {submittedQuote.map((quote, index) => (
        <div key={index}>
          <p>"{quote}"</p>
        </div>
      ))}
    </section>
  );
}
