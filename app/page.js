import NotifyForm from '@/components/landing/NotifyForm';

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 relative'>
      <div className='absolute bg-black h-[110%] top-[-5%] z-[-1] w-[105%] blur-lg opacity-50' />
      <h3 className='uppercase text-3xl md:text-5xl text-center font-bold tracking-wider font-outline-2 drop-shadow-[0_1.2px_1.2px_#0369a1]'>
        Tune into the music soon
      </h3>
      <NotifyForm />
    </div>
  );
};

export default Page;
