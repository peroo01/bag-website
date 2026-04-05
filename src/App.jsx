import Header from './component folder/header'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import HomepageBody from './component folder/homepagebody'
import bags from './productsarr'
import Products from './component folder/products'
import Modal from './component folder/product-modal'
import Cart from './component folder/cart'
import './App.css'

function App() {
    const [bagItems, setBagItems]  = useState(bags)
    const [qty,setQty] = useState(1)
    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [isPopUpOpen,setIsPopUpOpen] = useState(false)
    const [currentProduct, setCurrentProduct] = useState({})

    function click(e) {
      const idNo = e.target.id
      bagItems.map( item => item.id == idNo ? setCurrentProduct(item) : null)
      setIsPopUpOpen(true)
      setQty(1)
    }
    function openCart() {
      console.log(cartItems);
      setIsCartOpen(true)
    }
    function close() {
    if (isCartOpen) {
        setIsCartOpen(false)
      } else if(setIsPopUpOpen) {
        setIsPopUpOpen(false)
      }
    }

    function addOrLess(event) {
      event.preventDefault()
      const idNo = event.target.id
      idNo === "add" ? setQty(prevValue => prevValue + 1) : setQty(prevValue => prevValue - 1)
    }
    function fu(event) {
      event.preventDefault()
      const idNo = event.target.id
      console.log(idNo);
      const dataID = event.target.dataset.id;
      console.log(dataID);
      setCartItems( prevCartItems => (
      prevCartItems.map( item => item.id == dataID ? {...item, qty: idNo !== "add" ? item.qty - 1 : item.qty + 1 } : item )
      )) 
    }
    
    function preventDefault(event) {
      event.preventDefault()
    }
    
    function addToCart(event) {
      event.preventDefault()
      const idNo = event.target.id
      const formdata  = new FormData(event.target)
      const size = formdata.get("size")
      const color = formdata.get("colorsdd")
      
      setCartItems( prevCartItems => {
        return (
          [
            ...prevCartItems,
            {
              ...bagItems[idNo],
              id: nanoid(),
              size: size,
              color: color,
              qty: qty
            }
          ]
        )
      })
    }
    function removeFromCart(event) {
      const dataID = event.target.dataset.id;
      setCartItems( prevCartItems => (
        prevCartItems.filter( item=> item.id !== dataID )
      ))
    }
  return (
    <>
      <Header openCart={openCart} />
      <HomepageBody/>
      <Products click={click} bagItems={bagItems} search={preventDefault} />
      {  isPopUpOpen && <Modal
        currentProduct={currentProduct}
        close={close}
        qty={qty}
        crement={addOrLess}
        addToCart={addToCart}
      />}
      { isCartOpen && <Cart
        cartItems={cartItems}
        func={fu}
        close={close}
        open={isCartOpen}
        deleteFunc={removeFromCart}
      />}
    </>
  )
}

export default App