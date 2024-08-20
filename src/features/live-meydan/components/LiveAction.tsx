import { IconButton } from "@chakra-ui/react"

export const LiveAction = ({item}:any) => {
  return (
    <div
    className="flex items-center gap-2"
    >
      <span className="hidden md:block !text-sm">
        {item.name}
      </span>
      <IconButton
      aria-label="action-btn"
      isRound={true}
      variant={'outline'}
      colorScheme="twitter"
      icon={item.icon}
      size={'xs'}
      //color={'white'}
      />
    </div>
  )
}
