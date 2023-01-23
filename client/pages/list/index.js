import style from '@/styles/List.module.css';
import Link from 'next/link';
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3500/api/v1/posts');
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
};
const List = ({ posts }) => {
  return (
    <div>
      {posts.map((item) => {
        const { title, message, _id, creator, createdAt } = item;
        return (
          <Link href={`/list/${_id}`} key={_id}>
              <h1 className={style.content}>{createdAt}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default List;
