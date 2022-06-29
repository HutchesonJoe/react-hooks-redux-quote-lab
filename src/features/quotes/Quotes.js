import React from "react";
import QuoteCard from "./QuoteCard";
import { useSelector } from "react-redux";

function Quotes() {

  const quotes = useSelector((state)=> [...state.quotes]);
  console.log(quotes)
  const allQuotes = quotes.map((quote)=><QuoteCard quote={quote} key={quote.id}/>)

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {allQuotes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
