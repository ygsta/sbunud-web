import useSWR from 'swr'


export default function useGetBanners() {
  const fetcher = url => fetch(url).then(res => res.json());

  const {data:banners, error} = useSWR('http://localhost:3000/api/banners', fetcher)
  return {banners, error}
}
