import { Link } from "react-router-dom"
import { useState } from "react"

const NavBar = ({ onSearch, cartItemCount }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = () => {
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        }
        setSearchQuery('')
    }

    return (
        <div className="wrapper">
            <header className="container">
                <div className="header py-2">
                    <div className="grid">
                        <div className="leftCon">
                            <Link to="/" className="link" >
                                <h2 className="brand">Online Store</h2>
                            </Link>
                        </div>
                        
                        <div className="formContainer">
                            <form className="search">
                                <div className="form-control">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        placeholder="Search products..."
                                    />
                                </div>
                                <button type="button" className="search-btn" onClick={handleSubmit} >
                                    <box-icon name='search-alt'></box-icon>
                                </button>
                            </form>
                        </div>
                        <div className="leftCon">
                            <Link to="/cart" className="link">
                                <img className="cartImg" src="/cart.svg" alt="cart" />
                                {cartItemCount > 0 && (
                                    <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                                )}
                            </Link>
                            <h4>Shopping Cart</h4>
                        </div>
                       
                    </div>
                </div>
            </header>
        </div>
    )
}

export { NavBar }