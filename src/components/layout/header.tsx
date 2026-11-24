import logomarca from "@/assets/logomarca.svg"
import { SpotButton } from "@/cases/spots/components/spot-button"

export function Header() {
    return (
        <header className="bg-transparent">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
                <img src={logomarca} alt="Mater Burguer" className="h-auto w-40 md:w-48" />
                <SpotButton />
            </div>
        </header>
    )
}
