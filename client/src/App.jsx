import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './components/ScrollToTop'
import GlobalLoader from './components/GlobalLoader'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalLoader />
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  )
}
