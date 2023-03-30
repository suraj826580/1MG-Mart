import "./App.css";
import MainRoutes from "./Components/MainRoutes";
import { Cart } from "./Pages/Cart";
import Payment from "./Pages/Payment";

function App() {
  return (
    <>
    <Cart/>
      <MainRoutes />
      <Payment/>
    </>
  );
}

export default App;
