import { AppRoutes }from './routes/AppRoutes'
import { store, persistor} from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from "@material-ui/core";
import { theme } from './styles/Theme';
import { useAuth } from './hooks/useAuth'
import '../src/fonts/fonts.css'

function App() {
  const user = useAuth()

  
  return (
    <ThemeProvider theme={theme} >
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRoutes />
    </PersistGate>
    </Provider>
    </ThemeProvider>
  );
}

export default App;
