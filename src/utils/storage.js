export function loadState(key, defaultValue) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch (e) {
    console.warn('loadState error', e);
    return defaultValue;
  }
}

export function saveState(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('saveState error', e);
  }
}

import { useState, useEffect } from 'react';
export function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => loadState(key, initialValue));

  useEffect(() => {
    saveState(key, state);
  }, [key, state]);

  useEffect(() => {
    function handleStorage(e) {
      if (e.key === key) {
        try {
          setState(e.newValue ? JSON.parse(e.newValue) : null);
        } catch {
          setState(null);
        }
      }
    }
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [key]);

  return [state, setState];
}
