---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.499Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Granular OAuth consent in Apps Script IDE"
feature_slug: "granular-oauth-consent-in-apps-script-ide"
latest_feature_date: "2025-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/client-verification"
  - "https://developers.google.com/apps-script/guides/cloud-platform-projects"
keywords:
  - "granular"
  - "oauth"
  - "consent"
  - "apps"
  - "script"
  - "ide"
  - "lets"
  - "users"
---

# Granular OAuth consent in Apps Script IDE

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Granular OAuth consent in the Apps Script IDE lets users approve individual OAuth scopes during script execution.

## Extended Definition

Granular OAuth consent in the Apps Script IDE lets users approve individual OAuth scopes during script execution.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification)
- [https://developers.google.com/apps-script/guides/cloud-platform-projects](https://developers.google.com/apps-script/guides/cloud-platform-projects)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- January 08, 2025 Feature Generally Available : Granular OAuth permissions are now supported for users executing scripts in the Apps Script IDE.
- For more information, refer to the Workspace Updates blog post: Granular OAuth consent in Google Apps Script IDE executions .
- The granular OAuth consent screen lets users specify which individual OAuth scopes they would like to authorize.
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.

### OAuth Client Verification \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the following articles: Unverified Apps OAuth Application Verification FAQ Google API Services: User Data Policy Figure 1 : Unverified app screen Figure 2 : Unverified app authorization flow This change applies to Google OAuth web clients, including those used by all Apps Script projects.
- Page Summary outlined flag Google requires verification for Google OAuth clients requesting certain sensitive OAuth scopes, though Apps Script projects within the same Google Workspace domain or customer are exempt.
- Unverified Apps Script projects using sensitive scopes and accessed by users outside the domain will display an "unverified app" screen and have a cap on the number of unverified users.
- Home Google Workspace Apps Script Guides Send feedback OAuth Client Verification Stay organized with collections Save and categorize content based on your preferences.

### Google Cloud projects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/cloud-platform-projects](https://developers.google.com/apps-script/guides/cloud-platform-projects)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Shared drives (formerly Team Drives) provide shared spaces where groups of Drive users can collaborate on Apps Script projects and Drive documents.
- The OAuth consent screen settings define the information Google presents to users, such as the application name and Terms of Service URL.
- Default Cloud projects create a consent screen automatically from the Apps Script project details; you can't adjust those settings.
- Complete the OAuth consent screen When using services that require OAuth, Google prompts users to authorize those services.

