# About Us Page Overflow Fixes

## Issue
Cards and content on the "About Us" page were overflowing the container on mobile and tablet views, causing horizontal scrolling and cut-off content.

## Root Cause
1. **Grid Column Width:** The `minmax(300px, 1fr)` definition in the grid layout was too wide for smaller mobile screens (especially when combined with container padding), forcing the grid to overflow.
2. **Image Width:** The hero image `.about-hero-img` lacked `width: 100%`, relying only on `max-width: 900px`, which meant it wouldn't shrink below its intrinsic size on smaller screens.
3. **Large Gaps:** The generic `.gap-3` class (64px) was too large for mobile layouts, consuming valuable horizontal space for multi-column attempts or creating excessive vertical spacing.

## Fix Implemented
1. **Updated HTML (`about.html`):**
   - Changed grid column definition from `minmax(300px, 1fr)` to `minmax(250px, 1fr)` in the "Mission & Vision" section. This allows the cards to fit comfortably on proper mobile screens (down to ~290px).

2. **Updated CSS (`assets/css/style.css`):**
   - Added `width: 100%` to `.about-hero-img`, forcing it to be responsive and fit within its parent container regardless of screen size.
   - Added a mobile-specific rule to reduce `.gap-3` from `4rem` to `2rem` (32px) inside the `@media (max-width: 480px)` query.
   - Reduced `gap-3` usage ensures better layout fit and prevents spacing-induced overflow.

## Verification
- **Mobile View (320px - 480px):**
  - Cards now stack properly or fit side-by-side if space permits, without overflowing horizontally.
  - The hero image scales down perfectly.
  - Spacing is proportional to the screen size.
- **Tablets (768px):**
  - Grid items respect the container references.
  - No horizontal scrolling is triggered.
