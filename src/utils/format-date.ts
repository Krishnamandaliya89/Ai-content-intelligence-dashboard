// src/utils/format-date.ts

/**
 * Format a date string into a readable format (e.g. "Oct 12, 2023").
 * Optionally include time.
 */
export function formatDate(dateString: string | undefined, includeTime = false): string {
  if (!dateString) return "";
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      ...(includeTime && {
        hour: "numeric",
        minute: "2-digit",
      }),
    };
    
    return new Intl.DateTimeFormat("en-US", options).format(date);
  } catch (e) {
    return dateString;
  }
}
