import { CircleDashed, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl py-1.5 px-2.5 rounded-md bg-zinc-900">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block front-medium text-zinc-100">
                            Jessica White
                        </span> 
                        <span className="block text-xs text-zinc-400 truncate">
                            jessica.white54@yahoo.com.br
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block front-medium text-zinc-100">Pedro João</span>
                        <span className="block text-xs text-zinc-400 truncate">
                            pedro544joao@hotmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                </div>
            </div>
          
            <Button variant="secondary" size="full">
                <Plus className="size-5"/>
                Gerênciar convidados
            </Button>
        </div>
    )
}