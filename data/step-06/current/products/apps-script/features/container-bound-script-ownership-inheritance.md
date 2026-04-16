---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.582Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Container-bound script ownership inheritance"
feature_slug: "container-bound-script-ownership-inheritance"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/bound"
  - "https://developers.google.com/apps-script/guides/collaborating"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "container"
  - "bound"
  - "script"
  - "ownership"
  - "inheritance"
  - "apps"
  - "makes"
  - "owner"
---

# Container-bound script ownership inheritance

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script makes the container owner the owner of new container-bound script projects regardless of who created them.

## Extended Definition

Apps Script makes the container owner the owner of new container-bound script projects regardless of who created them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/bound](https://developers.google.com/apps-script/guides/bound)
- [https://developers.google.com/apps-script/guides/collaborating](https://developers.google.com/apps-script/guides/collaborating)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### Container-bound Scripts \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/bound](https://developers.google.com/apps-script/guides/bound)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Guides Send feedback Container-bound Scripts Stay organized with collections Save and categorize content based on your preferences.
- All container-bound scripts use the same owner, viewer, and editor access list defined for the container file.
- The container owner takes ownership of a new script project regardless of who created it.
- The file that a bound script is attached to is called a "container." Bound scripts generally behave like standalone scripts except that they don't appear in Google Drive, they can't be detached from the file they are bound to, and they gain a few special privileges over the parent file.

### Collaborate with other developers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/collaborating](https://developers.google.com/apps-script/guides/collaborating)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Collaboration basics In order to collaborate on a project, you and your collaborators must all have editor access to the Apps Script project file (and its container, if it is a bound script ).
- Collaboration requires all developers to have editor access to the Apps Script project file and its container if it's a bound script.
- All container-bound scripts use the same owner, viewer and editor access list defined for the container file .
- The container owner takes ownership of a new script project regardless of who created it.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- For all container-bound scripts , the container owner takes ownership of a new script project regardless of who created it.
- For container-bound scripts : If someone outside the container owner's organization creates or edits a container-bound script project, the container owner receives an email notification.
- Change Any script that is container-bound to a Google Doc can now access the active user's Cursor and Selection by calling Document.getCursor() and Document.getSelection() , respectively.
- June 27, 2012 Feature Launched script.google.com and the ability to create standalone scripts that are not bound to a container like Google Sheets or Google Sites.

