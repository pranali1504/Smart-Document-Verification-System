// Centralized API configurations loaded from Vite environment variables with safe fallbacks.
// Trailing slashes are automatically stripped to prevent malformed endpoint paths.

export const AUTH_API_URL = (import.meta.env.VITE_AUTH_API_URL || "http://localhost:5000").replace(/\/$/, "");
export const OCR_API_URL = (import.meta.env.VITE_OCR_API_URL || "http://localhost:8000").replace(/\/$/, "");
export const FORGERY_API_URL = (import.meta.env.VITE_FORGERY_API_URL || "http://localhost:8001").replace(/\/$/, "");
