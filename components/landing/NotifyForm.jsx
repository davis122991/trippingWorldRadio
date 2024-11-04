'use client';

import { useActionState, useState } from 'react';

import notify from '@/actions/notify-action';

const NotifyForm = () => {
  const [state, formAction, isPending] = useActionState(notify, {});
  const [email, setEmail] = useState('');

  console.log(state);

  return (
    <>
      <form
        action={formAction}
        className='flex gap-2 flex-col items-center mt-5 md:mt-10'
      >
        <input
          type='email'
          placeholder='Enter your email'
          className={`input input-bordered ${
            state?.error ? 'input-error' : 'input-primary'
          } w-full md:w-[400px] focus:outline-none`}
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className='btn btn-primary w-full md:w-[400px]'
          disabled={isPending}
        >
          Notify Me!
        </button>
        <p className='text-center text-opacity-70 text-sm md:text-base w-full sm:w-[400px]'>
          Enter your email and click "Notify Me!" to be ready for the Grand
          Opening!
        </p>
      </form>
      {state?.error && (
        <div className='toast toast-center toast-top'>
          <div className='alert alert-error'>
            <span>{state?.error}</span>
          </div>
        </div>
      )}
      {state?.message && (
        <div className='toast toast-center toast-top'>
          <div className='alert alert-success'>
            <span>{state?.message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default NotifyForm;
