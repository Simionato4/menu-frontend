import { Button } from "@base-ui/react";
import { MapPin } from "lucide-react";
import { SpotDialog } from "./spot-dialog";
import { useState } from "react";
import type { SpotDTO } from "../dtos/spot.dto";

export function SpotButton(){

    const [dialogOpen, setDialogOpen] = useState(false);

    const [selectedSpot, setSelectedSpot] = useState<SpotDTO | null>(() => {
        const spotStorage = localStorage.getItem('spot')
        return spotStorage ? JSON.parse(spotStorage) : null;
    });

    function hendleSelect(spot: SpotDTO){
        localStorage.setItem('spot', JSON.stringify(spot));
        setSelectedSpot(spot);
        setDialogOpen(false);
    }

    return (
        <div className="flex items-center justify-center">
            <Button
            className="flex cursor-pointer items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-primary"
            onClick={() => setDialogOpen(true)}
            >
                <MapPin className="size-5" />
                { selectedSpot ? selectedSpot.name : 'Selecionar mesa' }
            </Button>

            <SpotDialog 
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                onSelect={hendleSelect}
                selectedSpotId={selectedSpot?.id}
            />
        </div>
    )
}