import img1 from "../assets/goat-logo.jpg"
export default function Header({openCart}) {
    return (
        <>
            <div className="news-header">
                <p>Enjoy an exclusive 10% coupon for your first purchase</p>
            </div>
            <nav>
                <img src={img1} alt="logo" className="logo" />
                <div className="menu">
                    <a href="">Latest Products</a>
                    <a href="">Backpack</a>
                    <a href="">Bags</a>
                    <a href="">Accessories</a>
                    <a href="">Collection</a>
                    <a href="">Gifting</a>
                    <a href="">Service</a>
                </div>
                <div className="menu-icons">
                    <i className="bx bx-search" />
                    <i className="bx bx-cart" onClick={openCart}/>
                    <i className="bx bx-planet" />
                    <i className="bx bx-user" />
                </div>
            </nav>
        </>

    )
}