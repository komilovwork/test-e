import { useEffect } from 'react';

interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  metaKey?: boolean;
  callback: () => void;
}

export const useKeyboardShortcuts = (shortcuts: KeyboardShortcut[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      shortcuts.forEach(({ key, ctrlKey = false, metaKey = false, callback }) => {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const isCorrectModifier = isMac ? event.metaKey === metaKey : event.ctrlKey === ctrlKey;
        
        if (
          event.key.toLowerCase() === key.toLowerCase() &&
          isCorrectModifier &&
          !event.shiftKey &&
          !event.altKey
        ) {
          event.preventDefault();
          callback();
        }
      });
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
};