'use server';

const notify = async (prevState, formData) => {
  const email = formData.get('email');

  return { email };
};

export default notify;
