
export const Heading1 = ({item}:any) => {
  return (
    <div className='mb-8'>
      <h1 className="text-xl md:text-2xl text-white">
        {item.text}
      </h1>
    </div>
  )
}
