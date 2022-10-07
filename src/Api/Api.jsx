export const API_MOVIES_URL = import.meta.env.VITE_API;
export const API_NODE_URL = import.meta.env.NODE_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;

export function GET_TOP_RATED() {
  return {
    url: `${API_MOVIES_URL}top_rated?${API_KEY}`,
    options: {
      method: "GET",
    },
  };
}
