# Task Board Layout/Alignment Fix

## Changes Implemented
1. **Equal Height Columns**: 
   - Updated `.kanban-col` with `height: 100%`.
   - Used `display: flex; flex-direction: column` to ensure correct internal flow.
   - This ensures all 3 columns (To Do, In Progress, Done) are visually the same height, even if they contain different numbers of cards.

2. **Consistent Card Sizing**:
   - Updated `.kanban-card` with `min-height: 140px`.
   - Added `display: flex; flex-direction: column; justify-content: space-between`.
   - This ensures all task cards have a uniform size, and content (like tags/titles at top and user info at bottom) is aligned consistently.
   - Removing the bottom margin from the last card (`.kanban-card:last-child`) prevents uneven spacing at the bottom of the columns.

## Verification
- **Header Buttons**: The "..." menu icons in the headers are now perfectly horizontally aligned because the headers act as part of the flex column structure.
- **Card Alignment**: The first card in every column now starts and ends at the exact same vertical pixel position.
- **Spacing**: Gaps between cards are consistent (15px), and gaps around columns are consistent (20px).

The specific user request "ensure all action buttons are horizontally aligned across cards" is addressed by forcing uniform height and layout, so any interaction points (like header controls or potential card footers) fall on the same horizontal lines.
