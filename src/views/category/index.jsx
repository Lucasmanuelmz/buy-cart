import { ProductByCategoryProvider } from "../../Context/prodCategory";
import { NewProductCategory } from "./category";
import { useParams } from "react-router-dom";

export function ProductCategory() {
  const { category } = useParams();

  return (
    <ProductByCategoryProvider category={category}>
      <NewProductCategory />
    </ProductByCategoryProvider>
  );
}
