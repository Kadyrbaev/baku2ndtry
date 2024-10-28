import './App.css';
import FoodsPage from './components/products/FoodsPage';
import FoodsWrapper from './store';

function App() {
  return (
    <div className="App">
      <FoodsWrapper>
        <FoodsPage/>
      </FoodsWrapper>
    </div>
  );
}

export default App;
