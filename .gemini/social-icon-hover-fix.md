# Social Media Icon Hover Fix

## Issue
Users reported that the social media icons in the footer were "fading out" or disappearing on hover.

## Root Cause
The issue was caused by a CSS specificity conflict.
- The footer links had a generic hover style: `.footer-links a:hover { color: var(--primary-color); }`.
- The social icons had a specific hover style: `.social-icon:hover { background-color: var(--primary-color); color: white; }`.

However, the generic `.footer-links a:hover` selector had higher specificity (or equal enough to win due to how cascade works with the wrapper class) in terms of text color.
As a result, on hover:
- Background became **Indigo** (Primary Color)
- Icon Text became **Indigo** (Primary Color, inherited/overridden from parent link style)
- Result: **Indigon icon on Indigo background = Invisible.**

## Fix Implemented
Updated `assets/css/style.css`.
- Increased specificity of the social icon hover selector to `.social-icons .social-icon:hover`.
- This ensures `color: white` is applied, making the icon visible against the indigo background.
- Added `box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);` to create a glow effect, meeting the user requirement for them to be "more prominent".

## Verification
1. Hover over any social media icon in the footer.
2. The background should turn Indigo.
3. The icon should turn White (and remain visible).
4. A soft indigo glow should appear around the circle.
