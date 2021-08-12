// anime table props -- components - table
export type AnimeCardProps = {
    fetchAnimesData: (url: string) => void,
    animes: Array<object | undefined>
  }