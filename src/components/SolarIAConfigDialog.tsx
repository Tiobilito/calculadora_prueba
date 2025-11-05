"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

interface SolarIAConfigDialogProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

export default function SolarIAConfigDialog({
  open,
  onOpenChange,
}: SolarIAConfigDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-none md:max-w-[90vw] lg:max-w-[60vw]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Genera tu configuración con IA
          </DialogTitle>
          <DialogDescription className="text-center">
            Nuestra IA te sugiere combinaciones óptimas para tu sistema solar.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto">
          {/* ✅ Columna izquierda: Chat */}
          <div className="flex flex-col gap-4 border rounded-xl p-4 bg-muted/40">
            {/* ZONA DE MENSAJES */}
            <div className="flex flex-col gap-3 max-h-[350px] overflow-y-auto pr-1">
              {/* Mensaje del bot */}
              <div className="flex items-start gap-2">
                <div className="p-3 rounded-lg bg-white border shadow-sm text-sm max-w-[85%]">
                  <p>
                    He preparado una propuesta basada en tu consumo eléctrico.
                    Este sistema está diseñado para proporcionarte energía
                    limpia y eficiente durante todo el día.
                  </p>
                </div>
              </div>

              {/* Mensaje del usuario */}
              <div className="flex items-start justify-end gap-2">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground shadow-sm text-sm max-w-[85%]">
                  <p>Suena bien, ¿puedo ampliar la capacidad?</p>
                </div>
              </div>

              {/* Mensaje del bot */}
              <div className="flex items-start gap-2">
                <div className="p-3 rounded-lg bg-white border shadow-sm text-sm max-w-[85%]">
                  <p>
                    Claro, puedo sugerirte baterías adicionales según tus
                    necesidades.
                  </p>
                </div>
              </div>
            </div>

            {/* INPUT */}
            <div className="flex gap-2 items-end pt-2">
              <Textarea
                placeholder="Escribe tu mensaje..."
                className="min-h-[50px]"
              />
              <Button className="px-4 flex items-center justify-center h-[50px]">
                ✨
              </Button>
            </div>
          </div>

          {/* ✅ Columna derecha: Productos */}
          <div className="flex flex-col gap-2 overflow-y-auto">
            <h2 className="font-bold text-lg">Tu configuración</h2>

            <div className="flex gap-2 border-b pb-3">
              <Image
                src="/img/solar1.png"
                alt="Panel Solar"
                width={80}
                height={80}
                className="object-contain rounded-md"
              />

              <div className="flex flex-col text-sm">
                <span className="font-semibold">Panel Solar 450W</span>
                <span className="text-muted-foreground">Alta eficiencia</span>
              </div>

              <div className="ml-auto font-semibold">$450</div>
            </div>

            <div className="flex gap-2 border-b pb-3">
              <Image
                src="/img/solar3.png"
                alt="Batería"
                width={80}
                height={80}
                className="object-contain rounded-md"
              />

              <div className="flex flex-col text-sm">
                <span className="font-semibold">Batería 10kWh</span>
                <span className="text-muted-foreground">
                  Almacenamiento nocturno
                </span>
              </div>

              <div className="ml-auto font-semibold">$3,500</div>
            </div>

            <div className="flex justify-between font-bold text-lg pt-2">
              <span>Total</span>
              <span>$3,950</span>
            </div>

            <Button className="mt-2 w-full">Exportar configuración</Button>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cerrar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
