import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import quoteAction from "../redux/actions/quote";

export default function KanyeQuoteView() {
  const dispatch = useDispatch();
  const [favorite, setFavortie] = useState([]);
  const quote = useSelector((state) => state.quote.quote);
  console.log(favorite);

  const getQuoteHandler = () => {
    dispatch(quoteAction.getDataThunk());
  };

  const getFavorite = (quote) => {
    console.log(quote);
    !favorite.includes(quote) && setFavortie([...favorite, quote]);
  };

  useEffect(() => {
    dispatch(quoteAction.getDataThunk());
  }, [dispatch]);
  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      <h4 style={{ fontSize: "30px", marginTop: "10px" }}>" {quote} "</h4>

      <button onClick={getQuoteHandler}>Get Quote</button>
      <button
        onClick={() => {
          getFavorite(quote);
        }}
      >
        Add Favorite
      </button>
      {favorite.map((quote, index) => (
        <div key={index}>
          <p>"{quote}"</p>
        </div>
      ))}
    </section>
  );
}
