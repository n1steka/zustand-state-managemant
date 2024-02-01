// state.ts
import create, { SetState } from "zustand";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UnknownData {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}
interface State {
  users: User[];
  unknownData: UnknownData[];
  fetchUsers: () => Promise<void>;
  fetchUnknownData: () => Promise<void>;
}

const useStore = create<State>((set: SetState<State>) => ({
  users: [],
  unknownData: [],
  fetchUsers: async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      set({ users: data.data });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },
  fetchUnknownData: async () => {
    try {
      const response = await fetch("https://reqres.in/api/unknown");
      const data = await response.json();
      set({ unknownData: data.data });
    } catch (error) {
      console.error("Error fetching unknown data:", error);
    }
  },
}));

export default useStore;
