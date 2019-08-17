import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`/api/notes/${props.match.params.id}`)
      .then(result => {
        setInputs(result.data);
      })
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post(
      '/api/notes/update',
      {
            id: props.match.params.id,
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

  return(

    <div className="container">
    <header>
      <h1>Edit Note</h1>
    </header>
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" name="title" required="required" onChange={handleInputChange} defaultValue={inputs.title}/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" name="content" onChange={handleInputChange} value={inputs.content}></textarea>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input type="date" className="form-control" name="date" onChange={handleInputChange} value={inputs.date}></input>
        </div>
        <div className="form-group">
          <label>tags</label>
          <textarea className="form-control" name="tags" onChange={handleInputChange} value={inputs.tags}></textarea>
        </div>

        <div className="form-group">
          <button className="btn btn-dark" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
  );
}

  export default Edit;