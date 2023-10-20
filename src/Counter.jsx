import CountDisplay from './CountDisplay.jsx';

function Counter({ count, stateCount }) {

  // incrementation
  const increment = () => {
    stateCount((thres) => thres + 1);
  }

  // decrementation
  const decrement = () => {
    if (count < 1) {
      return;
    } else {
      stateCount((thres) => thres - 1);
    }
  }

  return (
    <>
      <section>
        <CountDisplay count={count} />
        <button onClick={decrement} className="btn btn-dark rounded-5">Decrement</button>
        <button onClick={increment} className="btn btn-dark rounded-5">Increment</button>
      </section >
    </>
  )
}

export default Counter;