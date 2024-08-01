import HomeContainer from '@/common/containers/HomeContainer';
import fetcher from '@/common/utils/fetcher';

export default async function Home() {
  const getData = await fetcher<any, any>({
    path: '/users',
    isExternal: true,
  });

  // console.log(getData);

  return (
    <div className="mx-auto flex flex-col items-center gap-4 justify-center pt-5 w-full">
      <HomeContainer />
    </div>
  );
}
