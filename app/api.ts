import { TaskProps } from './pages/tasks';
import { env } from './envoirentment';

const baseUrl = env.BASEAPI_URL

interface UserProps {
  name?:string;
  email?: string;
  password?:string
}

export const getUser = async (user: UserProps) => {
  try {
    const response = await fetch(user.email ? `${baseUrl}/users/email/?${user.email}` : `${baseUrl}/users/name/?${user.name}`, {
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

export  async  function postUser(user: UserProps){
  try {
    const response = await fetch(`${baseUrl}/users/cadastro`, {
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

export async function getTasks(userId: number) {
  try {
    const response = await fetch(`${baseUrl}/tasks/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    console.error('Error getting tasks by user id:', error);
    return error;
  }
}

export const postTask = async(task:TaskProps)=>{
  try {
    const response =  await fetch(`${baseUrl}/tasks`,{
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