import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { AppThemeContext, AppThemeProvider, initialState } from './context/AppThemeContext.tsx'
import './axios/interceptor.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <AppThemeContext.Provider value={initialState}>
        <App />
      </AppThemeContext.Provider> */}
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </Provider>
  </StrictMode>,
)
