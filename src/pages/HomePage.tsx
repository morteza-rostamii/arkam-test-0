import { Header } from "@/features/header/Header"
import { HeroCarousel } from "@/features/hero-carousel/HeroCarousel"
import { Lives } from "@/features/live-meydan/components/Lives"
import { Mostanad } from "@/features/mostanad/components/Mostanad"

export const HomePage = () => {
  return (
    <div
    className="relative #p-4 pb-4"
    >
      <Header/>
      <HeroCarousel/>
      <Lives/>
      
      <Mostanad/>
    </div>
  )
}
