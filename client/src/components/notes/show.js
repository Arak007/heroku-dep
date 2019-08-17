import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [note, setNotes] = useState([]);

  useEffect(() => {
    Axios.get(`/api/notes/${props.match.params.id}`)
      .then(result => {
        console.log(result);
        setNotes(result.data);
      })
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>Contents</h1>
      </header>

      <div>
        <label>Title</label>
        <h2>{note.title}</h2>
      </div>
      <div>
        <label>Content</label>
        <h3>{note.content}</h3>
      </div>
    </div>
  );
}

export default Show;