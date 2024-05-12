import { Watch } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="flex justify-center mt-40 mb-40">
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
