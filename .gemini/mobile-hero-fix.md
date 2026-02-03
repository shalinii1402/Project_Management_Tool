# Mobile Hero Alignment Fix

## Issue
On mobile screens, the hero section image was misaligned, potentially squished or overflowing because the layout remained in a horizontal flex row.

## Correction
Updated `assets/css/style.css` within the `@media (max-width: 768px)` block:

1.  **Stacked Layout**:
    ```css
    .hero {
        flex-direction: column;
        text-align: center;
        padding-top: 120px;
    }
    ```
    - `flex-direction: column`: Forces the hero content (text) and hero image to stack vertically. Text on top, Image below.
    - `text-align: center`: Ensures text content is centered.
    - `padding-top: 120px`: Adds breathing room below the fixed/absolute header on mobile.

2.  **Image Container**:
    ```css
    .hero-image {
        width: 100%;
        margin-top: 20px;
    }
    ```
    - `width: 100%`: Ensures the image container spans the full available width of the mobile screen.
    - `margin-top: 20px`: Adds spacing between the "Get Started" buttons and the image.

3.  **Global Safety**:
    - The previously added `img { max-width: 100%; }` rule ensures the image inside `.hero-image` scales down perfectly to fit within the 100% container width, preventing any sidescroll overflow.

## Result
On mobile devices, the Hero section now displays clearly:
- **Top**: Headline and call-to-action buttons (centered).
- **Bottom**: Hero image (centered, scaled to fit width).
- **No Overflow**: The content fits perfectly within the viewport.
