export const setAuthToken = (token: string) => {
  // Guardar en localStorage (para client-side access)
  if (typeof window !== 'undefined') {
    localStorage.setItem("token", token);
    
    // Guardar en cookie (para middleware de Next.js)
    document.cookie = `auth-token=${token}; path=/; max-age=3600; SameSite=Strict`;
  }
};

export const removeAuthToken = () => {
  // Remover de localStorage
  if (typeof window !== 'undefined') {
    localStorage.removeItem("token");
    
    // Remover cookie
    document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

export const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("token");
  }
  return null;
};
