// Importei hooks do React para gerenciamento de estado e contexto
import {createContext, useContext, useEffect, useState} from 'react';

// Criei um contexto para produtos filtrados por categoria
const ProductByCategoryContext = createContext();

// Provider para buscar e fornecer produtos baseados na categoria selecionada
export function ProductByCategoryProvider({category, children}) {
  const [productCategory, setProductCategory] = useState([]);

  // Efeito que busca produtos sempre que a categoria muda
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

// Retornando o contexto com os produtos da categoria para os componentes filhos
  return(
    <ProductByCategoryContext.Provider value ={{productCategory, setProductCategory}}>
      {children}
    </ProductByCategoryContext.Provider>
  )
}

// Hook personalizado para acessar produtos da categoria em qualquer componente
export function useProductByCategory() {
  const context = useContext(ProductByCategoryContext);
  if(!context) {
    throw Error('Nao foi possivel obter produto pela categoria')
  }
  return context;
}