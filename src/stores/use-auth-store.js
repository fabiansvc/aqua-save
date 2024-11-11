import { create } from "zustand";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../firebase.config";

const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => ({
  user: null,
  loading: true, // Inicialmente, el estado es de carga
  error: null,

  loginGoogleWithPopUp: async () => {
    set({ loading: true, error: null });
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    set({ loading: true, error: null });
    try {
      await signOut(auth);
      set({ user: null });
    } catch (error) {
      console.error(error);
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  observeAuthState: () => {
    set({ loading: true }); // Marcar como 'loading' mientras se observa el estado de autenticación
    onAuthStateChanged(auth, (user) => {
      console.log("Estado de autenticación:", user);
      set({ user, loading: false }); // Una vez que se conoce el estado, actualizar 'user' y 'loading'
    });
  },
}));

export const useAuthObserver = () => {
  const observeAuthState = useAuthStore((state) => state.observeAuthState);
  useEffect(() => {
    observeAuthState(); // Llamar la función de observación cuando se monta el componente
  }, [observeAuthState]);
};

export default useAuthStore;
