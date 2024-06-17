
export function formatDate(date: Date | string): string {
    // Ensure the date is a Date object
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
  
    // Define the options for the date format
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  
    // Use toLocaleDateString with 'en-GB' locale and the custom options
    return date.toLocaleDateString('en-GB', options);
}
  




export function capitalize(str : string) {
    if (!str) return str; // Handle empty string case
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

