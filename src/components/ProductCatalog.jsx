import ProductCard from './ProductCard'
import React, { useState, useEffect } from 'react';
export default function Catalog({categoria}){

    const categories = [
  { key:'all', id:'0' },
  { key:'clothes', id:'1' },
  { key:'electronics', id:'2' },
  { key:'Furniture', id:'3' },
  {key:'shoes', id :'4'}
]

let selection = 0;
if(categoria === 'all') selection = 0;
if(categoria === 'clothes') selection = 1;
if(categoria === 'electronics') selection = 2;
if(categoria === 'Furniture') selection = 3;
if(categoria === 'shoes') selection = 4;



    // 1. Estado para guardar los productos
  const [productos, setProductos] = useState([]);
  // 2. Estado para manejar la carga
  const [loading, setLoading] = useState(true);
  // 3. Estado para manejar errores
  const [error, setError] = useState(null);

  // 4. useEffect para realizar la petición al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const limit = 40;
        const offset = 0;
        let url = `https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${offset}`;

        if (selection !== 0 ) {
          url += `&categoryId=${selection}`;
        }
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Error en la petición');
        }

        const data = await response.json();
        setProductos(data); // Guardamos los datos
      } catch (err) {
        setError(err.message); // Guardamos el error si ocurre
      } finally {
        setLoading(false); // Terminamos la carga sea éxito o error
      }
    };

    fetchData();
  }, [categoria]);

  // Renderizado condicional
  if (loading) return <div className="catalogo"><div className="loader">Cargando...</div></div>;
  if (error) return <div className="catalogo"><p>No hay productos.</p></div>;


  return (
    <div id="catalogo" className="catalogo">
      {productos.map((producto) => (
          // AQUI OCURRE LA MAGIA: Pasamos los datos al hijo
          <ProductCard 
            key={producto.id}
            nombre={producto.title}
            precio={producto.price}
            // La API devuelve un array de imágenes, tomamos la primera
            imagen={producto.images[0]}
            categoria={producto.category.name}
          />
        ))}
    </div>
  )
}
