import { useProducts } from "../hooks/use-products";
import { ProductCard } from "./product-card";

type ProductListProps = {
    categoryId?: string;
}

export function ProductList ({ categoryId }: ProductListProps) {

    const { data: products = [], isLoading } = useProducts(categoryId);

    return (
        <ul className="grid grid-cols-3 gap-4">

            {products?.map( product =>  (
                <li key={product.id}>
                    {isLoading ? (
                        <span>Carregando...</span>
                    ) : (
                        <ProductCard product={product} />
                    )}
                </li>
            ))}

        </ul>
    )
}