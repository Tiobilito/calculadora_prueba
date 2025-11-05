'use client'

import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";

export default function SolarPanelsCalculator() {
  const [consumoDiario, setConsumoDiario] = useState<number | "">("");
  const [potenciaPanel, setPotenciaPanel] = useState<number | "">("");
  const [horasSol, setHorasSol] = useState<number | "">("");
  const [paneles, setPaneles] = useState<number | null>(null);

  const calcular = () => {
    if (!consumoDiario || !potenciaPanel || !horasSol) return;
    const energiaDiariaPanel = (Number(potenciaPanel) / 1000) * Number(horasSol);
    const necesarios = Number(consumoDiario) / energiaDiariaPanel;
    setPaneles(Math.ceil(necesarios));
  };

  return (
    <Card className="max-w-md mx-auto p-4 space-y-6">
      <CardContent className="space-y-6">
        {/* Consumo Diario */}
        <div className="space-y-1">
          <Label>Consumo diario</Label>
          <InputGroup>
            <InputGroupInput
              type="number"
              placeholder="Ejemplo: 100"
              value={consumoDiario}
              onChange={(e) => {
                const v = e.target.value;
                setConsumoDiario(v === "" ? "" : Number(v));
              }}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupText>kWh / día</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Potencia del panel */}
        <div className="space-y-1">
          <Label>Potencia del panel</Label>
          <InputGroup>
            <InputGroupInput
              type="number"
              placeholder="Ejemplo: 450"
              value={potenciaPanel}
              onChange={(e) => {
                const v = e.target.value;
                setPotenciaPanel(v === "" ? "" : Number(v));
              }}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupText>W</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Horas de sol */}
        <div className="space-y-1">
          <Label>Horas de sol</Label>
          <InputGroup>
            <InputGroupInput
              type="number"
              placeholder="Ejemplo: 5"
              value={horasSol}
              onChange={(e) => {
                const v = e.target.value;
                setHorasSol(v === "" ? "" : Number(v));
              }}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupText>hrs / día</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Botones */}
        <div className="flex gap-2 w-full">
          <Button
            onClick={calcular}
            className="w-[80%]"
          >
            Calcular
          </Button>

          <Button
            variant="secondary"
            className="w-[20%] flex items-center justify-center"
          >
            <Wand2 className="w-5 h-5" />
          </Button>
        </div>

        {paneles !== null && (
          <div className="text-center text-xl font-semibold">
            Se necesitan aproximadamente {paneles} paneles solares.
          </div>
        )}

      </CardContent>
    </Card>
  );
}