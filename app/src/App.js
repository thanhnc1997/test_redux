import './App.css';
import { useState } from 'react';
import { toggleOption, loadInitialState } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [isActive, setActive] = useState();
  const handleToggle = () => {
    setActive(!isActive);
  }
  const dispacth = useDispatch();

  const handleToggleOption = (e) => {
    const action = toggleOption(e);
    dispacth(action);
    //console.log(data)
  }
  const handleResetState = () => {
    const action = loadInitialState();
    dispacth(action);
  }
  const data = useSelector(state => state)
  const dop = data.filter(item => item.check === true)

  return (
    <div className="App">
      <div className="search-option">
        <p><strong>Search option</strong></p>
        <div onClick={handleToggle} className="show-option">
          {
            dop.map((item, index) => {
              return (
                <span key={index}>
                  {item.name}
                </span>
              )
            })
          }
        </div>
        <div className={isActive ? 'option-box show' : 'option-box'}>
          {
            data.map((item, index) => {
              return (
                <label className="item" key={index}>
                  <input
                    onChange={() => handleToggleOption(item)}
                    type="checkbox"
                    checked={item.check === true ? 'checked' : ''}
                  />
                  <span>{item.name}</span>
                </label>
              )
            })
          }
        </div>
      </div>
      {/* <div className="result">
        <p><strong>Result</strong></p>
        <div className="show-result">
          
        </div>
      </div> */}
      <button type="button" onClick={() => handleResetState()}>Reset</button>
    </div>
  );
}

export default App;
