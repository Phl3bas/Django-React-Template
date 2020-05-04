import * as React from 'react';

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = (): void => {
    setCount(count + 1);
  };
  return (
    <>
      <div>Click Count: {count}</div>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default App;
