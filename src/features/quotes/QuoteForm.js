import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";


function QuoteForm() {

  const [formData, setFormData] = useState({
    author: "",
    content: ""
  });

  const dispatch = useDispatch();

  function handleChange(event) {
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const quote = {...formData, id: uuid(), votes: 0}    
    dispatch(addQuote(quote))
    setFormData({
      author: "",
      content: ""
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label" name="content">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="content"
                      onChange={handleChange}
                      value={formData.content}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label" name="author">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      className="form-control"
                      type="text"
                      name="author"
                      onChange={handleChange}
                      value={formData.author}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default" >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
