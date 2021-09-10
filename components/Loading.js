import Image from "next/image";

const Loading = () => {
  return (
    <div className="loading">
      <h4>loading trips for you.. </h4>
      <Image src="/images/gif/loading-arrow.gif" alt="loading" />
    </div>
  );
};

export default Loading;
