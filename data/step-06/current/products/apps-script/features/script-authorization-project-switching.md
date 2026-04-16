---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.595Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Script authorization project switching"
feature_slug: "script-authorization-project-switching"
latest_feature_date: "2015-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/cloud-platform-projects"
  - "https://developers.google.com/apps-script/guides/services/authorization"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "script"
  - "authorization"
  - "project"
  - "switching"
  - "scripts"
  - "can"
  - "change"
  - "which"
---

# Script authorization project switching

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Scripts can change which Google Developers Console project is used for authorization.

## Extended Definition

Scripts can change which Google Developers Console project is used for authorization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/cloud-platform-projects](https://developers.google.com/apps-script/guides/cloud-platform-projects)
- [https://developers.google.com/apps-script/guides/services/authorization](https://developers.google.com/apps-script/guides/services/authorization)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### Google Cloud projects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/cloud-platform-projects](https://developers.google.com/apps-script/guides/cloud-platform-projects)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Even if you change the project name on the shared drive, users that authorize the script still see the old name on authorization dialogs.
- Effects of switching to a different standard Cloud project If you switch your script from a default project or to a different standard project, it has the following effects: If you activated advanced services for your script, you must turn on the corresponding APIs in the new Cloud project.
- You can use either a default project that Apps Script creates or a standard project that you create yourself; default projects are for simple scripts, while standard projects are for complex, commercial, or publishable applications.
- If you want to execute functions in a script project from another app using the Apps Script API's scripts.run method , the script project and the calling application must share the same standard project.

### Authorization for Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/authorization](https://developers.google.com/apps-script/guides/services/authorization)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Scripts that you have previously authorized also ask for additional authorization if a code change adds new services.
- Limit scope to the current document If you're building an add-on or other script that uses the Spreadsheet service , Document service , Slides service , or Forms service , you can force the authorization dialog to ask only for access to files in which the add-on or script is used, rather than all of a user's spreadsheets, documents, or forms.
- How authorization for Google Services works When a script requires access to Google services, it follows this general process: Detection : Apps Script scans the script to identify which services it uses (for example, SpreadsheetApp or GmailApp ).
- Permissions and types of scripts The user identity that a script runs with — and thus the data it can access — varies based on the scenario in which the script is run, as shown in the following table.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- The Optimization service has been updated with the following batch methods: LinearOptimizationEngine.addContraints(lowerBounds, upperBounds, variableNames, coefficients) LinearOptimizationEngine.addVariables(names, lowerBounds, upperBounds, types, objectiveCoeffients) May 03, 2019 Feature The Document service has been updated to add methods to get and set the language of a document: Document.getLanguage() Document.getSupportedLanguageCodes() Document.setLanguage(languageCode) April 19, 2019 Feature The Data Studio service has been updated to add a few values to FieldType enum : HYPERLINK IMAGE IMAGE LINK April 08, 2019 Change The behavior of the Google Cloud (GCP) projects used by scripts has been altered.
- July 19, 2022 Change Apps Script now automatically deletes default Google Cloud projects (Google Cloud projects that Apps Script creates in the background) when their associated scripts haven't run in 180 days or more.
- Added the ability to change the Google Developers Console project that a script uses for authorization.
- July 29, 2013 Change All new scripts now use the new authorization flow by default.

