import React from 'react'
import { ShoppingCart, Heart } from 'lucide-react';


export default function ProductCard({imagen, nombre, precio, categoria}){
  return (
    <article className="producto">
      
      <img src={imagen} alt={nombre} className="producto__imagen" />
      <div className="producto__contenido">
        <h3 className="producto__titulo">{nombre}</h3>
        <div className="producto__precio">${precio}</div>
        <div className="producto__precio">{categoria}</div>
      </div>
    </article>
  );
}
