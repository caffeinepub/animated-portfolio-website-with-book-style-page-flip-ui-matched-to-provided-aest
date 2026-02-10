# Specification

## Summary
**Goal:** Convert the “Skills & Services” page into a “Skills” page by removing all services content and updating skills content and labels.

**Planned changes:**
- Update `frontend/src/features/portfolio/pages/SkillsServicesPage.tsx` to remove the Services section and replace the Skills content with: Core Skills → Programming Languages (Java, Python, C, Dart, JavaScript), Projects Built (Mini Amazon (Java), Mini Tally (Java), Mini Calculator (C), Period Tracker (Dart)), and Extra Skills (Poet, Writer).
- Change the page heading from “Skills & Services” to “Skills” in `frontend/src/features/portfolio/pages/SkillsServicesPage.tsx`.
- Update the navigation/table-of-contents label by changing the title in `frontend/src/features/portfolio/portfolioPages.tsx` from “Skills & Services” to “Skills”.

**User-visible outcome:** The portfolio shows a “Skills” page (and nav label) with updated skills/project lists and no services section.
