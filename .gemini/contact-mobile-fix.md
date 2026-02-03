# Contact Page Mobile Layout Fix

## Issue
The Contact page retained a two-column desktop layout on mobile devices, causing:
- Layout squishing or horizontal overflow.
- Misaligned or left-aligned content that didn't look optimized for mobile.

## Correction
1.  **HTML Update (`contact.html`)**:
    - Replaced the inline `grid-template-columns: 1fr 1fr;` style with a class `contact-layout`. This enables CSS control via media queries.

2.  **CSS Update (`assets/css/style.css`)**:
    - **Desktop**: Defined `.contact-layout { grid-template-columns: 1fr 1fr; }` to maintain the original 2-column look.
    - **Mobile/Tablet (`max-width: 768px`)**:
        - Set `grid-template-columns: 1fr;` to force a single-column vertical stack.
        - Added `text-align: center;` to center the heading and description.
        - Added `justify-content: center;` to the flex containers holding email/phone/address info, ensuring these rows align nicely in the center of the screen.
        - Centered the social media icons row.

## Result
On mobile and tablet devices:
- **Order**: Contact Information appears first, followed by the Contact Form below it.
- **Alignment**: All text, icons, and form inputs are centered within the viewport.
- **Spacing**: Adequate 40px gap between the info and the form ensures readability.
- **No Overflow**: The layout fits perfectly within the screen width.
