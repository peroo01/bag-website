import { useState } from "react"
function Products({click,bagItems,search}) {
    const [formdata,setFormData] = useState({ inputValue:"", selectValue:"" })

    function handleChange(e) {        
        const {name,value} = e.target   
        setFormData( prevValue => ({ ...prevValue, [name]:value }))
    }

    const product = bagItems
    .filter( bag => bag.name.toLowerCase().startsWith(formdata.inputValue))
    .filter( bag => formdata.selectValue !== "" ? bag.price >= 50 : true)
    .map( ({id,name,price,src}) => (
        <div role="button" className="product" key={id} id={id} onClick={click}>
            <div className="imgconprod"><img src={src} alt="product-image"/></div>
            <div className="prodtext"><h3>{name}</h3></div>
            <p>{price}</p>
        </div>
    ))

    return(
        <section className="productpg">
            <div className="productpgheader">
                <div className="producctpgdescriptions">
                    <h4>Backpack Collection</h4>
                    <h2>Browse Backpack Collection</h2>
                </div>
                <form onSubmit={search}>
                    <input onChange={handleChange} type="text" name="inputValue" id="search" placeholder="Search Product" />
                    <select name="selectValue" id="filter" onChange={handleChange}>
                        <option value=""></option>
                        <option value="price">Price</option>
                    </select>
                </form>
            </div>
            <div className="productlist">{product}</div>
            <div className="center"><button className="product-btn">View More</button></div>
        </section>        
    )
}
export default Products