'use client';

import { useEffect, useRef, useState } from 'react';

const useDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  const handleDropdownOpen = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownOpen &&
        dropdownMenuRef.current &&
        dropdownButtonRef.current
      ) {
        if (
          !dropdownMenuRef.current.contains(event.target as Node) &&
          !dropdownButtonRef.current.contains(event.target as Node)
        ) {
          setDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen, dropdownMenuRef, dropdownButtonRef]);

  return {
    dropdownOpen,
    dropdownMenuRef,
    dropdownButtonRef,
    setDropdownOpen,
    handleDropdownOpen,
  };
};

export default useDropdown;
