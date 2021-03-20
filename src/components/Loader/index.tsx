import Loader from "react-loader-spinner";

export function Loading() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '20%'
    }}>
      <Loader
        type="ThreeDots"
        color="rgba(0, 0, 0, 0.2)"
        height={'10rem'}
        width={'10rem'}
        timeout={0} // infinity
      />
    </div>
  );
}