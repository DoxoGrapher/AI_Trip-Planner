// Import necessary utilities
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Function to merge Tailwind classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
