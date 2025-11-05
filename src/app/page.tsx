"use client";

import SolarPanelsCalculator from "@/components/SolarPanelsCalculator";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

const cards = [
  {
    title: "Panel Solar 450W",
    description:
      "Panel monocristalino de alta eficiencia ideal para hogares y oficinas.",
    price: "$450",
    image: "/img/solar1.png",
  },
  {
    title: "Inversor Solar 5kW",
    description:
      "Convierte la energía solar en electricidad utilizable con máxima estabilidad.",
    price: "$1,200",
    image: "/img/solar2.png",
  },
  {
    title: "Batería Solar 10kWh",
    description: "Almacena energía para usar durante la noche o emergencias.",
    price: "$3,500",
    image: "/img/solar3.png",
  },
];

export default function SolarPanelsWindow() {
return (
  <div className="w-full min-h-screen flex justify-center">
    <div className="max-w-7xl w-full flex flex-col md:flex-row mt-10">

      {/* Lado izquierdo */}
      <div className="w-full md:w-3/5 p-6 space-y-4">
        <h1 className="text-3xl font-bold">
          Soluciones completas en energía solar para hogares y empresas con máxima eficiencia y garantía
        </h1>

        <p>
          Ofrecemos paneles solares de alta eficiencia, instalación certificada y soporte integral. 
          Ahorra en tu factura de electricidad y contribuye al cuidado del medio ambiente con tecnología limpia.
        </p>

        {/* Carrusel */}
        <div className="relative w-full h-64 overflow-hidden">
          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full h-full"
          >
            <CarouselContent>
              {cards.map((card, idx) => (
                <CarouselItem key={idx} className="w-full h-64">
                  
                  <Card className="flex flex-row items-center p-4 h-full shadow-lg border rounded-xl transition-all hover:shadow-2xl hover:scale-[1.01]">
                    
                    {/* Imagen */}
                    <div className="w-1/2 flex items-center justify-center bg-slate-100 rounded-lg p-3">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={220}
                        height={220}
                        className="object-contain drop-shadow-md"
                      />
                    </div>

                    {/* Contenido */}
                    <div className="w-1/2 flex flex-col justify-between h-full pl-4">

                      <CardHeader className="p-0">
                        <CardTitle className="text-xl font-semibold tracking-tight text-slate-900">
                          {card.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="p-0 text-sm text-slate-600 leading-snug mt-1">
                        {card.description}
                      </CardContent>

                      <CardFooter className="p-0 flex justify-between items-center mt-4">
                        <span className="font-bold text-green-600 text-lg">
                          {card.price}
                        </span>

                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg flex gap-1 items-center"
                        >
                          Ver más
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 12l-6.75 6.75m0-13.5L17.25 12"
                            />
                          </svg>
                        </Button>

                      </CardFooter>
                    </div>

                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Lado derecho */}
      <div className="w-full md:w-2/5 p-6 flex items-start justify-center md:justify-end">
        <div className="w-full max-w-sm">
          <SolarPanelsCalculator />
        </div>
      </div>

    </div>
  </div>
)

}
