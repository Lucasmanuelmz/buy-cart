import {createContext, useContext, useEffect, useState} from 'react';

const ProductByCategoryContext = createContext();

export function ProductByCategoryProvider({category, children}) {
  const [productCategory, setProductCategory] = useState([]);

  useEffect(() => {
    if(!category) return;
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(response => {
      if(response.ok) {
        return response.json();
      }else {
        throw Error('A busca de produto pela categoria deu erro')
      }
    })

    .then(data => {
      setProductCategory(data)
    })

    .catch(error => {
      console.log(error)
    })
  },[category])

  return(
    <ProductByCategoryContext.Provider value ={{productCategory, setProductCategory}}>
      {children}
    </ProductByCategoryContext.Provider>
  )
}

export function useProductByCategory() {
  const context = useContext(ProductByCategoryContext);
  if(!context) {
    throw Error('Nao foi possivel obter produto pela categoria')
  }
  return context;
}