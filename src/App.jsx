import { CardsContainer } from "./components/CardsContainer";
import { ProductContextProvider } from "./Context/ProductContextProvider";
import { TotalContextProvider } from "./Context/TotalContextProvider";
import { Cart } from "./components/Cart";


function App() {

  return (
    <ProductContextProvider>
      <TotalContextProvider>
      <div className="App">
        <CardsContainer />
        <Cart />
      </div>
      </TotalContextProvider>
    </ProductContextProvider>
  )
}

export default App
