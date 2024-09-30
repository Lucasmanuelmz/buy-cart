import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const CategoriesContext = createContext();

export function CategoriesProvider({children}) {
  const  [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')

    .then(response => {
      if(response.ok) {
       return response.json();
      } else {
        throw Error ('Erro ao obter as categorias')
      }
    })

    .then(data => {
      setCategories(data)
    })
    
    .catch(error => {
      console.log(error.message)
      throw Error('Encontramos um erro, veja os logs no console')
    });
    
  }, [])

  return (
    <CategoriesContext.Provider value={{categories, setCategories}}>
     {children}
    </CategoriesContext.Provider>
  )
}

export function useCategories() {
  const context = useContext(CategoriesContext) 
  if(!context) {
    throw Error ('Erro ao obter categorias no provedor')
  }
  return context;
}