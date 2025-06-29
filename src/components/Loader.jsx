import { RotatingLines , Oval} from "react-loader-spinner";

function Loader() {
  return (
    <RotatingLines
      strokeColor="white"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  )
}

function DownloadingLoader() {
  return (
    <Oval
    visible={true}
    height="25"
    width="25"
    color="#2196F3"
    ariaLabel="oval-loading"
    wrapperStyle={{}}
    wrapperClass=""
    strokeWidth={4}
  />
  )
}
export {DownloadingLoader};
export default Loader;