import React,{useState, useEffect} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";



function Index() {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        Axios.get('/api/notes')
          .then(result => {
            setNotes(result.data);
          })
          .catch(err => console.error(err));
      }, []);

      return(
        <div className="container">
            <header>
                <h1>All Notes</h1>
            </header>

            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Due date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {notes.map(note => (
                        <tr key={note.id}>
                        <td>
                            <a href={`/notes/${note._id}`}>{note.title}</a></td>
                        <td>{note.date}</td>
                        <td>
                            <Link to={`/notes/${note._id}/edit`}>edit</Link>|
                            <Link to={`/notes/${note._id}/destroy`}>delete</Link></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
      </div>
      )
}

export default Index;