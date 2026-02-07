# Specification

## Summary
**Goal:** Update the magazine cover (first page) to include the user’s portrait photo and revise the cover text while preserving the existing editorial aesthetic and responsive layout.

**Planned changes:**
- Add a new portrait-based static image asset under `frontend/public/assets/generated` and render it on the cover in a dedicated image block with soft edges/shadows and a paper-like feel.
- Update cover text strings on `frontend/src/features/portfolio/pages/CoverPage.tsx`: change “Portfolio” to “SHIVANGI KUMAR'”, change the year label to “2026 collection”, and replace the three highlight lines with “BTech Computer Science”, “1st year”, and “Banasthali Vidyapeeth”.
- Ensure the cover remains readable and balanced in both single-page (mobile) and spread (desktop) layouts, with no text overlap or layout shifts during page flips.

**User-visible outcome:** The magazine cover shows the user’s portrait in a styled image block and displays the updated cover labels/highlights consistently across mobile and desktop spread views.
