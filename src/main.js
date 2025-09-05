// Modern HTMX Todo App - Client-side JavaScript
// This file is processed by Vite

console.log('Modern HTMX Todo App loaded with Vite!')

// Add any additional client-side functionality here
// HTMX handles most of the dynamic behavior

// Example: Add some modern enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Add smooth transitions for HTMX swaps
  document.body.addEventListener('htmx:afterSwap', (event) => {
    // Add any post-swap animations or effects here
    console.log('HTMX swap completed:', event.detail)
  })
  
  // Add loading states
  document.body.addEventListener('htmx:beforeRequest', (event) => {
    console.log('HTMX request starting:', event.detail)
  })
  
  document.body.addEventListener('htmx:afterRequest', (event) => {
    console.log('HTMX request completed:', event.detail)
  })
})
