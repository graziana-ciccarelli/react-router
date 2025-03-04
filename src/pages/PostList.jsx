import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:3000/api/posts')
      .then(response => setPosts(response.data));
  }, []);

  return (
    <div>
      <h2>Lista dei Post</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <Link to={`/post/${post.id}`}>
              <button>Vai al Dettaglio</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
