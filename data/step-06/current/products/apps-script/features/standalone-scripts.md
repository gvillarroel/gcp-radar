---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.660Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Standalone scripts"
feature_slug: "standalone-scripts"
latest_feature_date: "2012-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/standalone"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/clasp"
keywords:
  - "standalone"
  - "scripts"
  - "apps"
  - "script"
  - "launched"
  - "com"
  - "not"
  - "bound"
---

# Standalone scripts

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script launched standalone scripts on script.google.com that are not bound to a container application.

## Extended Definition

Apps Script launched standalone scripts on script.google.com that are not bound to a container application.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/standalone](https://developers.google.com/apps-script/guides/standalone)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/clasp](https://developers.google.com/apps-script/guides/clasp)

## Supporting Pages

### Standalone Scripts \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/standalone](https://developers.google.com/apps-script/guides/standalone)
- Source ID: `site-docs-root-3`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a standalone script To create a standalone script, visit script.google.com and click add New project .
- You can easily create a standalone script by visiting script.google.com or through Google Drive.
- Home Google Workspace Apps Script Guides Send feedback Standalone Scripts Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag Standalone scripts are not bound to specific Google Workspace files like Sheets or Docs and are found in Google Drive.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- June 27, 2012 Feature Launched script.google.com and the ability to create standalone scripts that are not bound to a container like Google Sheets or Google Sites.
- Add-ons can now be developed and published from standalone scripts (as opposed to scripts bound to a Sheet, Doc, or Form).
- The Optimization service has been updated with the following batch methods: LinearOptimizationEngine.addContraints(lowerBounds, upperBounds, variableNames, coefficients) LinearOptimizationEngine.addVariables(names, lowerBounds, upperBounds, types, objectiveCoeffients) May 03, 2019 Feature The Document service has been updated to add methods to get and set the language of a document: Document.getLanguage() Document.getSupportedLanguageCodes() Document.setLanguage(languageCode) April 19, 2019 Feature The Data Studio service has been updated to add a few values to FieldType enum : HYPERLINK IMAGE IMAGE LINK April 08, 2019 Change The behavior of the Google Cloud (GCP) projects used by scripts has been altered.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .

### "Use the command-line interface with clasp \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/guides/clasp](https://developers.google.com/apps-script/guides/clasp)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: On script.google.com: ├── tests/slides.gs └── tests/sheets.gs Locally: ├── tests/ │ ├─ slides.gs │ └─ sheets.gs Project types You can use clasp to manage both standalone and container-bound script projects.
- The Apps Script API enabled at script.google.com/home/usersettings .
- Troubleshooting Error Fix "Script API not enabled" Enable at script.google.com/home/usersettings "401 Unauthorized" Re-run clasp login locally, update CLASPRC JSON secret "ENOENT .clasp.json" Verify the credentials step writes the file before clasp push Push succeeds but code unchanged Confirm scriptId in the secret matches your target project Further Reading GitHub Actions documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Structure code clasp lets you organize your code into directories, which are preserved when you upload them to script.google.com.

