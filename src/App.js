import { useSelector } from 'react-redux';
import './App.css';
import Header from "./Components/Header";
import SingleProduct from "./Components/SingleProduct";
import SingleProductCart from "./Components/SingleProductCart";


function App() {
    const cart = useSelector((state)=>state);
    let totalItems = 0;
    let totalPrice = 0;
    cart.map(item => {
        totalItems += item.cartQuantity;
        totalPrice += item.cartQuantity * item.unitPrice;
    })
    const products = [
        {
            "id": 1,
            "Name": "Asus Vivobook X515MA",
            "stockQuantity": 20,
            "cartQuantity": 0,
            "unitPrice": 35500
        },
        {
            "id": 2,
            "Name": "Dell E1916HV 18.5 Inch",
            "stockQuantity": 35,
            "cartQuantity": 0,
            "unitPrice": 9300
        },
        {
            "id": 3,
            "Name": "Canon Eos 4000D 18MP",
            "stockQuantity": 72,
            "cartQuantity": 0,
            "unitPrice": 36500
        }
    ];
    return (
        <div className="bg-gray-50 h-full md:h-screen">
            <Header />
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
                    {products.map((product) => {return <SingleProduct product={product} key={product.id}/>})}
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
                    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                        {products.map((product) => {return <SingleProductCart product={product} cart={cart} key={product.id}/>})}
                        <div className="flex justify-center items-center text-center">
                            <div className="text-xl font-semibold">
                                    <p className="text-5xl">{totalItems}</p>
                                <p>Total Item</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                        <div className="flex justify-center items-center text-center">
                            <div className="text-xl font-semibold">
                                <p>Total Price</p>
                                <p className="text-5xl">{totalPrice.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
