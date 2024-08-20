import helper from "@/utils/helper";
import { Button } from "@chakra-ui/react";
import { fakerFA } from "@faker-js/faker";

export const SiteNavigation = () => {
  return (
    <nav className="hidden md:flex items-center gap-3">
      {
        !links.length ? <></>
        : links.map((link:any) => (
          <Button
          key={link.id}
          //size={'sm'}
          variant={'link'}
          color={'white'}
          >
            {link.name}
          </Button>
        ))
      }
    </nav>
  )
}

const links = Array.from({length: 5}).map(() => {
  return {
    id: helper.generateId(),
    name: fakerFA.lorem.word(),
    href: '#'
  }
});
