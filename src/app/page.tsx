import HomeContainer from '@/common/containers/HomeContainer';
import fetcher from '@/common/utils/fetcher';

export default async function Home() {
  const getData = await fetcher<any, any>({
    path: '/users',
    isExternal: true,
  });

  // console.log(getData);

  return (
    <div>
      <HomeContainer />
    </div>
  );
}
