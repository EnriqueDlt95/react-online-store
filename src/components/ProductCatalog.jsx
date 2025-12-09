import ProductCard from './ProductCard'
import React, { useState, useEffect } from 'react';
export default function Catalog(){


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
        const limit = 10;
        const offset = 0;
        
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${offset}`
        );
        
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
  }, []);

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
