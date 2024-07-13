import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';

// Define the User interface
interface User {
  id: string;
  email: string;
  [key: string]: any; // This allows other dynamic properties
}

const pb = new PocketBase('http://127.0.0.1:8090');
const user = writable<User | null>(null); // Initialize with null

// Type guard to check if the object is of type User
function isUser(obj: any): obj is User {
  return typeof obj === 'object' && 'id' in obj && 'email' in obj;
}

// Listen for changes in authStore
pb.authStore.onChange((auth: any) => {
  if (isUser(auth?.model)) { // Use optional chaining to avoid errors if auth is null or undefined
    user.set(auth.model); // Set user store with auth.model if it's of type User
  } else {
    user.set(null); // Set to null if auth.model doesn't match User interface or if auth is null/undefined
  }
});

export { pb, user };
