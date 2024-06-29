
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PaymentProvider from './Context/PaymentContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<PaymentProvider>
  <App/>
</PaymentProvider>
)
