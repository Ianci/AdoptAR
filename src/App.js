import { AppRoutes }from './routes/AppRoutes'
import { store, persistor} from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <AppRoutes />
    </PersistGate>
    </Provider>
  );
}

export default App;
