import React from 'react'
import { ShoppingCart, Heart, Menu } from 'lucide-react'; // Importamos iconos


export default function Header({ onOpenCart, contadorCarrito, contadorFavoritos }){
  return (
    <header className="header">
      {/* <img src={logo} alt="" /> */}
      <div className="header__logo"><i className="fas fa-mug-hot"></i>Nexus Store</div>
      <div className="header__actions">
        <button className="action-btn"><span className="badge">{contadorFavoritos}</span> <Heart size={16} /></button>
        <button className="action-btn" onClick={onOpenCart}> <span className="badge">{contadorCarrito}</span><ShoppingCart size={16} /></button>
      </div>
    </header>
  )
}
