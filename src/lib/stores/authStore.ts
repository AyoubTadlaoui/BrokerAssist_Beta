import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';
import type { AuthModel } from 'pocketbase'; // Type-only import

interface User extends AuthModel {
  id: string;
  email: string;
  [key: string]: any; // This allows other dynamic properties
}

const pb = new PocketBase('http://127.0.0.1:8090');
const user = writable<User | null>(pb.authStore.model as User | null);

pb.authStore.onChange((auth) => {
  user.set(auth.model as User | null);
});

export { pb, user };
