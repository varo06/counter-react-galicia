
import './App.css'

function App() {

  return (
    <div className="container">
      <div className="row max-height align-items-center">
        <div className="col-10 mx-auto  text-center main-container p-5">
          <h1 className="text-uppercase">counter</h1>
          <h2 id="counter">0</h2>
          <div className="btn-container d-flex justify-content-around flex-wrap">
            <button className="btn counterBtn prevBtn text-uppercase m-2">
              lower count
            </button>
            <button className="btn counterBtn nextBtn text-uppercase m-2">
              add count
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
