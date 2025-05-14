import { IUser } from '../context/auth';
import { TaskProps } from './tasks';

export const getUser = async (user: IUser) => {
  try {
    const response = await fetch(`baseurl/user?${user.email}`, {
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
    const response = await fetch('baseurl/user', {
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

export const postTask = async(task:TaskProps)=>{
  try {
    const response =  await fetch('baseurl/tasks',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(task),
    });
    return response.json
  } catch (error) {
    console.error('Error creating tasks',error)
    return error
  }
}