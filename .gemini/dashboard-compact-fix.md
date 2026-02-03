# Dashboard Compactness & Font Fixes

## Issue
On tablet and mobile devices, the dashboard looked cluttered due to:
-   **Large Numbers**: The stats (e.g., "12 Pending Tasks") were using desktop-sized fonts, taking up too much vertical space.
-   **Oversized Headings**: Section titles and card headers were too dominant for small screens.
-   **Excessive Padding**: Cards had too much internal whitespace.

## Correction
Updated `assets/css/style.css` within the `max-width: 1024px` media query:

1.  **Number Cards**:
    -   Reduced numbers (`h1`) to `2rem`.
    -   Reduced labels (`p`) to `0.9rem`.
    -   Reduced card padding to `15px`.
    -   This makes the stats row much more compact and cleaner.

2.  **Typography**:
    -   Reduced Main Page Title (`#section-title`) to `1.5rem`.
    -   Reduced Kanban Column Titles to `1rem`.
    -   Tightened margins to remove unnecessary vertical gaps.

## Result
-   **Compact Layout**: More content fits on a single screen without scrolling.
-   **Proportional Sizing**: Text size feels native to mobile/tablet rather than a shrunken desktop site.
-   **Visual Hierarchy**: Numbers still stand out but don't overwhelm the layout.
