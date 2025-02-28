import { useState, useEffect } from 'react';

const useImageLoader = (imageUrls) => {
  // creo el estado  y lo inicializao en true
  const [isLoading, setIsLoading] = useState(true);
  // Se ejecuta cuando el componente se monta o cuando imageUrls cambia.
  useEffect(() => {
    const loadImages = async () => {
      try {
        //  Para cada URL, crea una promesa.
        const promises = imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(url);
            img.onerror = (error) => reject(error);
          }).catch(() => null); // Ignora errores individuales
        });
        await Promise.all(promises);  //Espera a que todas las promesas se resuelvan.
      } catch (error) {
        console.error("Algunas imágenes no cargaron:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [imageUrls]);

  //Devuelve el estado de carga para que el componente que usa el hook sepa si mostrar el "loading".
  return isLoading;
};

export { useImageLoader };