import './App.css';
import Loading from './Loading';
import {  lazy, Suspense } from 'react';
const Content= lazy(()=> import('./Content'))
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
        <Content/>
      </Suspense>
    </div>
  );
}

export default App;
