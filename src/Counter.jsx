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
    }
    else {
      stateCount((thres) => thres - 1);
    }
  }

  return (
    <>
      <section className='container text-center mt-5 d-flex justify-content-center'>
        <div className="card p-5 rounded-5 w-50 ">
          <div className="card-body">
            <CountDisplay count={count} />
            <button onClick={decrement} className="btn btn-dark rounded-5 mt-5 mx-3">Decrement</button>
            <button onClick={increment} className="btn btn-dark rounded-5 mt-5 mx-3">Increment</button>
          </div>
        </div>
      </section >
    </>
  )
}

export default Counter;