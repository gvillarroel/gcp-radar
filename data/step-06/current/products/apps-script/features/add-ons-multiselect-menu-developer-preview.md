---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.650Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Add-ons multiselect menu developer preview"
feature_slug: "add-ons-multiselect-menu-developer-preview"
latest_feature_date: "2024-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/add-ons/overview"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
keywords:
  - "multiselect"
  - "enters"
  - "developer"
  - "preview"
  - "menu"
  - "ons"
  - "add"
  - "for"
---

# Add-ons multiselect menu developer preview

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Multiselect menu support for add-ons enters Developer Preview in Apps Script.

## Extended Definition

Multiselect menu support for add-ons enters Developer Preview in Apps Script.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)

## Supporting Pages

### Add-ons overview \_|\_ Google Workspace add-ons \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Quickstart guides are available for developers to learn how to build Google Workspace add-ons using Node.js or Apps Script.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-04 UTC."],[],["Add-ons enhance Google Workspace by automating tasks, integrating third-party services, and creating custom user interfaces.
- Add new capabilities to Google Workspace Add-ons help automate tasks or make third-party services or information available in Google Workspace.
- Developers can build two types of add-ons: Google Workspace add-ons and Editor add-ons, each offering unique capabilities and functionalities.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- February 21, 2024 Feature ( Developer Preview ): Multiselect menus are now in Developer Preview for Add-ons.
- For more information refer to the following: SelectionInput for Apps Script SelectionInput for other runtimes Feature ( Developer Preview ): Columns are now in Developer Preview for Add-ons.
- March 11, 2014 Announcement Announced a developer preview for add-ons in Google Docs and the new version of Google Sheets, with support for Google Forms coming soon.
- November 15, 2023 Feature ( Developer Preview ) : Google Workspace Add-ons now support third-party resource creation from the @ menu in Google Docs.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- If each cell required its own function call, the operation would take considerably more time, since the Apps Script server would have to download and parse the XML feed each time. / Show the title and date for the first page of posts on the Developer blog. @return Two columns of data representing posts on the Developer blog. @customfunction / function getBlogPosts () { var array = []; var url = 'https://gsuite-developers.googleblog.com/atom.xml' ; var xml = UrlFetchApp . fetch ( url ). getContentText (); var document = XmlService . parse ( xml ); var root = document . getRootElement (); var atom = XmlService . getNamespace ( 'http://www.w3.org/2005/Atom' ); var entries = document . getRootElement (). getChildren ( 'entry' , atom ); for ( var i = 0 ; i < entries . length ; i ++ ) { var title = entries [ i ]. getChild ( 'title' , atom ). getText (); var date = entries [ i ]. getChild ( 'published' , atom ). getValue (); array . push ([ title , date ]); } return array ; } These techniques can be applied to nearly any custom function that is used repeatedly throughout a spreadsheet, although the implementation details vary depending on the function's behavior.
- Function naming In addition to the standard conventions for naming JavaScript functions, be aware of the following: The name of a custom function must be distinct from the names of built-in functions like SUM() .
- Get a custom function from the Google Workspace Marketplace The Google Workspace Marketplace offers several custom functions as Google Workspace add-ons for Sheets .
- A function that is triggered from a menu asks the user for authorization if necessary and can consequently use all Apps Script services.

