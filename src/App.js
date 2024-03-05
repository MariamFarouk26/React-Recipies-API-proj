import Pages from "./pages/pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import{PayPalScriptProvider} from "@paypal/react-paypal-js"

function App() {

  console.log("App component")
  return (
    <PayPalScriptProvider option={{"client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID}}>
      <div>
        <ChakraProvider>
        <Pages />
        </ChakraProvider>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
