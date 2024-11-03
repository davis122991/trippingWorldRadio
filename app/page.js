const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <h3 className='uppercase text-3xl md:text-5xl text-center font-bold tracking-wider'>
        Tune into the music soon
      </h3>
      {/* <div className='mt-5 md:mt-10'>
        <p className='text-center text-opacity-70 text-sm md:text-base'>
          Currently working on new website.
        </p>
        <p className='text-center text-opacity-70 text-sm md:text-base w-full sm:w-[400px]'>
          Enter your email and click "Notify Me!" to be ready for the Grand
          Opening!
        </p>
      </div> */}
      <form className='flex gap-2 flex-col items-center mt-5 md:mt-10'>
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
