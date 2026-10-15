const Time = ({ count }) => {
  return <div>{(count / 1000).toFixed(2)}초</div>;
};

export default Time;