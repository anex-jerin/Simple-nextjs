export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3500/api/v1/posts');
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item._id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('http://localhost:3500/api/v1/posts/' + id);
  console.log(res)
  const data = await res.json();
  return{
    props:{posts:data}
  }
};

const Details = ({posts}) => {
  return <h1>{posts._id}</h1>;
};

export default Details;
