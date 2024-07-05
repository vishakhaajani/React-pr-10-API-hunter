import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const all = await axios.get("https://dummyjson.com/comments");
    setComments(all.data.comments);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <h2 align="center" className="my-3">API call by axios</h2>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Comment</th>
            <th scope="col">User</th>
            <th scope="col">Post Id</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.body}</td>
              <td>{comment.user.username}</td>
              <td>{comment.postId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
