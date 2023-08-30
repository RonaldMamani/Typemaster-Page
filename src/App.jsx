import CharacteristicsProduct from "./components/CharacteristicsProduct";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductBuy from "./components/ProductBuy";
import ProductSecundary from "./components/ProductSecundary";

export default function App() {
  return (
    <>
      <Header />
      <ProductBuy />
      <ProductSecundary />
      <CharacteristicsProduct />
      <Footer />
    </>
  )
}