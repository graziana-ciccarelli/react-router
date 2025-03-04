import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    
    axios.get(`http://localhost:3000/api/posts/${postId}`)
      .then(response => setPost(response.data));
  }, [postId]); 

  return (
    <div>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      )}
    </div>
  );
};

export default PostDetail;
