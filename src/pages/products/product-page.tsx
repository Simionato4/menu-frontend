import { useCategory } from "@/cases/categories/hooks/use-categories";
import { ProductList } from "@/cases/products/componentes/product-list";
import { useSearchParams } from "react-router-dom";

export function ProductPage() {
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('categoryId');

    const { data: selectedCategory } = useCategory(categoryId ?? '');

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold uppercase">
                {categoryId ? selectedCategory?.name : 'Todos os produtos'}
            </h2>

            <ProductList categoryId={categoryId ?? undefined} />
        </div>
    )
}