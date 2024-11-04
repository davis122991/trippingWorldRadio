const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 relative'>
      <div className='absolute bg-black h-[110%] top-[-5%] z-[-1] w-[105%] blur-lg opacity-50' />
      <h3 className='uppercase text-3xl md:text-5xl text-center font-bold tracking-wider'>
        Tune into the music soon
      </h3>
      <form className='flex gap-2 flex-col items-center mt-5 md:mt-10'>
        {/* <div className='absolute bg-black w-full h-[115%] top-[-15%] z-[-1] md:w-[420px] blur-md opacity-60' /> */}
        <input
          type='email'
          placeholder='Enter your email'
          className='input input-bordered input-primary w-full md:w-[400px] focus:outline-none'
          name='email'
        />
        <button className='btn btn-primary w-full md:w-[400px]'>
          Notify Me!
        </button>
        <p className='text-center text-opacity-70 text-sm md:text-base w-full sm:w-[400px]'>
          Enter your email and click "Notify Me!" to be ready for the Grand
          Opening!
        </p>
      </form>
    </div>
  );
};

export default Page;
