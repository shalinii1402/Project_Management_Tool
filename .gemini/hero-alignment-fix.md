# Hero Section Alignment Update

## Request
Center the "Get Started" and "View Demo" buttons across all devices.

## Implementation
1.  **CSS Update (`assets/css/style.css`)**:
    *   Updated `.hero-cta` class to include `display: flex` and `gap: 15px` by default.
    *   Ensured `.hero-content.text-center .hero-cta` applies `justify-content: center`.

2.  **HTML Update (`index.html`)**:
    *   Added `text-center` class to the `.hero-content` container.
    *   Replaced the inline style `<div>` with `<div class="hero-cta">`.

## Result
*   **Desktop & Tablet**: The main headline ("Manage Projects...") and the paragraph text are now centered. The action buttons are centered below the text.
*   **Mobile**: The layout remains centered (as it was previously), maintaining consistency.

This approach ensures "center across the devices" is interpreted as a consistent, centered layout for the entire hero section content block, preventing the awkward appearance of centered buttons beneath left-aligned text.
