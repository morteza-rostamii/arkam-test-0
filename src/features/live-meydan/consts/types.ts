
export type TLive = {
  id: string,
  name: string,
  image: string,
}

export type TLiveStoreState = {
  lives: TLive[],
  status: any,
  error: any,
}