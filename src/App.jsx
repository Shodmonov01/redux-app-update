import { useSelector } from 'react-redux';
import './App.css';
import Likes from './Likes';
import Title from './Title';
import Spin from './Spin';
import  Comments from './Comments';

import imgcha from '../public/vite.svg'

function App() {
  const error = useSelector(state => state.appReducer.error);

  console.log('error >>> ', error)
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          <div className="card-image">
            <img src={imgcha} alt="surfing"/>
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
