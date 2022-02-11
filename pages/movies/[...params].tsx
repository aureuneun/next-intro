import { GetServerSideProps, NextPage } from "next";
import Seo from "../../components/Seo";

const Detail: NextPage<{ params: any }> = ({ params }) => {
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      params: params?.params,
    },
  };
};
