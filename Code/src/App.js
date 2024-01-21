import './App.css';
import Main from './components/main/Wrapper';
// import FontAwesome from './components/font-awesome/FontAwesome';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000); 
  }, []);
  return (
    <div className="App sm:pt-4 md:pt-5 lg:pt-10 container mx-auto">
      {/* <FontAwesome /> */}
      {loading && <div className='loader-app'></div>}
      {!loading && <Main />}
      
    </div>
  );
}

export default App;
