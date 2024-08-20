import { Button, Image } from "@chakra-ui/react"
import { SiteNavigation } from "./SiteNavigation"

export const Header = () => {
  return (
    <header
    className="fixed top-0 left-0 right-0 z-[9999999999999]
    bg-gradient-to-t from-gray-900/30 via-gray-900/60 to-black/80
    "
    >
      <div
      className="
      container p-4 flex items-center justify-center md:justify-between
      "
      >
      
        <div
        className="flex items-center gap-4 "
        >
          <div
          className="w-20"
          >
            <Image src="/logo.png" className="w-full object-fill"/>
          </div>

          <SiteNavigation/>
        </div>

        <div
        className="hidden md:flex"
        >
          <Button
          borderRadius={'99999px'}
          colorScheme="twitter"
          >
            خرید اشتراک
          </Button>
        </div>

      </div>
    </header>
  )
}
