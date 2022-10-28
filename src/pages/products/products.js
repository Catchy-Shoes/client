import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { FakeStoreApi } from '../../services/fake-store-api'
import { useSearchParams } from "react-router-dom"
import { Item } from "../../components/item"
import { useCart } from "../../context/cart"

import { Cart } from "./../../pages/cart"
import { Data } from "./../../pages/product/data"
import { NavBar } from "./../../components/navbar"

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const axios = require('axios');

const Products = () => {

    const navigate = useNavigate();
    const { cartItemCount } = useCart()
  
    const onSearch = (searchQuery) => {
      navigate(`/?${createSearchParams({ q: searchQuery })}`)
    }
  
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [query] = useSearchParams();
    const { addToCart } = useCart()
    const[students,setStudents]=useState([])


    const searchQuery = query.get('q');

    // axios.get('http://localhost:8080/products/getAll')
    //     .then(function (response) {
    //         // handle success
    //         console.log(response);
    //     })
    // console.log("hi")
    //console.log();

    // const [quotes, setQuotes] = useState("");
    //
    // useEffect(() => {
    //
    //         axios.get("http://localhost:8080/products/getAll").then((response) => {
    //             setQuotes(response.data);
    //             console.log("dataaaaaaaaaaaaa")
    //             console.log(response.data)
    //         });
    //     console.log("dataaaaaaaaaaaaa1")
    // }, [quotes]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const products = searchQuery ? await FakeStoreApi.fetchProductsBySearchQuery(searchQuery) : await FakeStoreApi.fetchAllProducts();
            setProducts(products);
            setLoading(false)
        }
        fetchProducts().catch(console.error)
    }, [searchQuery])

    if (!loading && searchQuery && !products.length) {
        return (
            <div className="container">
                <div className="product py-2">
                    <div className="details p-3">No products found matching your query.</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
            <div className="container">
                <div className="products my-5">
                    <div className="grid">
                        {loading ? (
                            <div className="loader" />
                        ) : (
                            products.map((product) => (
                                <Item key={product.id} data={product} addToCart={() => addToCart(product)} />
                            ))
                        )}
                    </div>
                </div>
            </div>

                    
		<footer class="footer-distributed">
        <section></section>
            <div class="footer-right">

                <a href="#"><FacebookIcon /></a>
                <a href="#"><TwitterIcon /></a>
                <a href="#"><LinkedInIcon /></a>
                {/* <a href="#"><GitHubIcon /></a> */}

            </div>

            <div class="footer-left">

                <p class="footer-links">
                    <a class="link-1" href="#">Home</a>
                    <a href="#">Pricing</a>
                    <a href="#">About</a>
                    <a href="#">Faq</a>
                    <a href="#">Contact</a>
                </p>

                <p>Catchy Shoes &copy; 2022</p>
            </div>

        </footer>
        </>
    )
}

export { Products }
