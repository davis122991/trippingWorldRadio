'use server';

import axios from 'axios';

const notify = async (prevState, formData) => {
  const email = formData.get('email');

  try {
    const res = await axios.post(`${process.env.SERVER_URL}/notify`, { email });
    return res.data;
  } catch (error) {
    const err = { error: error.response.data.error };
    return err;
  }
};

export default notify;
