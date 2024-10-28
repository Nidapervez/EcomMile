import CartList from "./components/cartList";
import ProductList from "./components/productList";


export default function Home() {

  return (
    <div className="p-5">
      <h1 className="text-center">Redux Toolkit</h1>
      <ProductList/>
      <h1 className="mt-24 text-center font-extrabold bg-pink-700">Cart list</h1>
      <CartList/>
    </div>
  );
}
