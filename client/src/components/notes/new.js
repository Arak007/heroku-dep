import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function New() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post(
      '/api/notes',
      {
        
          title: inputs.title,
          content: inputs.content,
          date: inputs.date,
          tags: inputs.tags
        
      }
    )
      .then(resp => {
        console.log(resp);
        setRedirect(true);
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  function handleInputChange(event) {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;

    setInputs(inputs => {
      // Below is a shallow merge. It takes the original inputs value and merges in the new object key and value using the spread operator
      return {
        ...inputs, [name]: value
      }
    });
  }

  if (redirect) {
    return <Redirect to="/notes" />;
  }

  return (
    <div className="container">
    <header>
      <h1>New Note</h1>
    </header>
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" name="title" required="required" onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" name="content" onChange={handleInputChange}></textarea>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input type="date" className="form-control" name="date" onChange={handleInputChange}></input>
        </div>
        <div className="form-group">
          <label>tags</label>
          <textarea className="form-control" name="tags" onChange={handleInputChange}></textarea>
        </div>

        <div className="form-group">
          <button className="btn btn-dark" type="submit">Submit</button>
        </div>
      </form>
    </div>
    
  </div>
  );
}

export default New;