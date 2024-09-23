const Page = () => {
  return (
    <div className='flex sm:gap-10 gap-6 flex-col items-center mt-5'>
      <div className='md:h-48 md:w-48 h-28 w-28 rounded-full bg-gray-500 flex items-center justify-center'>
        <span>Logo</span>
      </div>

      <h1 className='text-text sm:text-6xl text-2xl font-bold tracking-widest text-center'>
        COMMING SOON
      </h1>

      <div>
        <div className='flex justify-center align-middle sm:w-[600px] sm:h-14 w-[300px] h-8 bg-background rounded-full border border-border pl-3'>
          <input
            type='text'
            placeholder='Please enter your email address'
            className='flex-1 overflow-hidden bg-transparent outline-none p-4 text-text sm:text-xl text-xs'
          />
          <button className='sm:w-48 w-20 sm:text-xl text-xs bg-primary rounded-full border border-border flex items-center justify-center text-text cursor-pointer hover:bg-secondary'>
            Notify
          </button>
        </div>
        <p className='text-text text-l text-center mt-3 sm:text-[18px] text-xs'>
          Notify me when app launches
        </p>
      </div>
    </div>
  );
};

export default Page;
