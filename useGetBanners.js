import useSWR from 'swr'


export default function useGetBanners() {
  const fetcher = url => fetch(url).then(res => res.json());

  const {data:banners, error} = useSWR('api/banners', fetcher)
  return {banners, error}
}
