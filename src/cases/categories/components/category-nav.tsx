import { Link, useSearchParams } from "react-router-dom"
import { useCategories } from "../hooks/use-categories"
import { cn } from "cn"
import { LayoutGrid, Utensils } from "lucide-react"

const linkClassName = (selected: boolean) => cn(
    'relative flex w-full items-center gap-3 px-5 py-5',
    'font-menu text-lg font-semibold uppercase tracking-tight',
    'border border-transparent border-b-border/60',
    'transition-colors duration-200',
    'hover:z-10 hover:text-[#B86A2C]',
    selected ?
    ['border-[#B86A2C]', 'bg-primary/5', 'text-[#B86A2C]']
    :
    ['text-foreground']
)

export function CategoryNav() {

    const [searchParams] = useSearchParams();
    const selectedCategoryId = searchParams.get('categoryId');

    const { data: categories = [] } = useCategories()
    const activeCategories = categories.filter((category) => category.active)

    return (
        <nav className="w-full">
            <ul className="overflow-hidden rounded-xl border border-border/70 bg-transparent">
                <li className="relative">
                    <Link to="/products" className={linkClassName(!selectedCategoryId)}>
                        <LayoutGrid className="size-10 text-brand"/>
                        <span className="leading-tight">Todos</span>
                    </Link>
                </li>
                {activeCategories.map((category) => (
                    <li
                    key={category.id}
                    className="relative"
                    >
                        <Link
                            to={`/products?categoryId=${category.id}`}
                            className={linkClassName(selectedCategoryId == category.id)}
                        >
                            {category.icon ? (
                                <img src={category.icon} alt={category.name} className="size-10 object-contain"/>
                            ) : (
                                <Utensils className="size-10 text-brand"/>
                            )}
                            <span className="leading-tight">
                                {category.name}
                            </span>
                        </Link>
                    </li>
                )) }
            </ul>
        </nav>
    )
}
