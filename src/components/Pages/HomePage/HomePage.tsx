import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../store/slices/ApiSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../store/store";

type Props = {};

export default function HomePage({}: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {posts.loading ? (
        <div>Loading...</div>
      ) : posts.error ? (
        <div>Error: {posts.error}</div>
      ) : (
        <div>
          <h1>Posts</h1>
          <ul>
            {posts.data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
