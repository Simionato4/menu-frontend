import { formatCurrency } from "@/lib/formt";
import type { ProductDTO } from "../dtos/product.dto"
import noProduct from '@/assets/no-product.svg';


type ProductCardProps = {
    product: ProductDTO
}


export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 hover:border-[#B86A2C] transition-colors">

            <div className="relative aspect-4/3 overflow-hidden bg-[#E8E1D6]">
                <img
                src={product.picture ?? noProduct }
                alt={product.name}
                className="size-full object-cover"
                />

                {(product.vegetarian || product.isNew) && (
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                        {product.isNew && (
                            <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
                                Novidade
                            </span>
                        )}
                        {product.vegetarian && (
                            <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-semibold text-brand-foreground">
                                Vegetariano
                            </span>
                        )}
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="font-menu text-lg font-semibold uppercase leading-tight tracking-tight">
                    {product.name}
                </h3>

                {product.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                    </p>
                )}

                <span className="mt-auto font-menu text-lg font-bold text-[#B86A2C]">
                    {formatCurrency(product.price)}
                </span>

            </div>

        </div>
    )
}
