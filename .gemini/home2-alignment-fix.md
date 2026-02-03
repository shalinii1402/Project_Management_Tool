# Home 2 Mobile/Tablet Alignment

## Request
Center-align all headings in tablet and mobile views on Home Page 2, matching the desktop layout style (where appropriate) or enforcing a clean centered mobile stack.

## Implementation
Updated `assets/css/style.css` within the `@media (max-width: 768px)` block:

1.  **Centered Grid Content**:
    ```css
    .section-padding .grid > div {
        text-align: center;
    }
    ```
    This targets the text and image containers within the feature sections. Since the grid collapses to a single column on mobile, center alignment often looks superior to left alignment.

2.  **Optimized Feature Lists**:
    ```css
    .plan-features {
        display: inline-block;
        text-align: left;
        margin: 20px auto;
    }
    ```
    - `display: inline-block` + `margin: auto` allows the list container itself to be centered relative to the page.
    - `text-align: left` ensures the bullet points (checkmarks) and text inside the list remain aligned with each other, preventing an awkward "ragged center" look for the list items.

3.  **Image Spacing**:
    ```css
    .section-padding .grid > div img {
        margin-bottom: 20px;
    }
    ```
    Ensures adequate spacing between the stacked image and the text following it.

## Result
On mobile and tablet devices:
- All section headings (`h2`, `h3`) in `home-2.html` are now centered.
- Paragraph text is centered.
- Feature lists are centered blocks with readable left-aligned items.
- Images have proper spacing.
