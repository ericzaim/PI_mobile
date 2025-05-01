import { IUser } from '../context/auth';

export const getUser = async (user: IUser) => {
  try {
    const response = await fetch(`/user?${user.email}`, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      },
    });
    return response.json();
    } catch (error) {
    console.error('User not found:', error);
    return error
  }
}

export const postUser = async (user: IUser) => {
  try {
    const response = await fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.error('Error creating user:', error);
    return error
  }
}