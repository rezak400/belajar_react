import { Routes, GLOBAL_STORE } from '../config';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={GLOBAL_STORE}>
      <Routes />
    </Provider>
  );
}

export default App;
