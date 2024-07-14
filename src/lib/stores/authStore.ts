import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';

// Define the User interface
interface User {
  id: string;
  email: string;
  [key: string]: any;
}

const pb = new PocketBase('http://127.0.0.1:8090');
const user = writable<User | null>(null);

// Type guard to check if the object is of type User
function isUser(obj: any): obj is User {
  return typeof obj === 'object' && 'id' in obj && 'email' in obj;
}

// Listen for changes in authStore
pb.authStore.onChange((auth: any) => {
  if (isUser(auth?.model)) {
    user.set(auth.model);
  } else {
    user.set(null);
  }
});

export { pb, user };
