import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams();

  return (
    <>
      <h2>Dettaglio del Post {postId}</h2>
      <p>Contenuto del post {postId}</p>

    </>
  );
};

export default PostDetail;
