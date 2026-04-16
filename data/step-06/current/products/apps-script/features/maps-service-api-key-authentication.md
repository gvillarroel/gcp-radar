---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.497Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Maps Service API key authentication"
feature_slug: "maps-service-api-key-authentication"
latest_feature_date: "2026-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/service-account"
  - "https://developers.google.com/apps-script/guides/services/authorization"
keywords:
  - "maps"
  - "key"
  - "authentication"
  - "lets"
  - "scripts"
  - "authenticate"
  - "optionally"
  - "signing"
---

# Maps Service API key authentication

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Maps Service API key authentication lets scripts authenticate with an API key and optionally a signing key.

## Extended Definition

Maps Service API key authentication lets scripts authenticate with an API key and optionally a signing key.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/service-account](https://developers.google.com/apps-script/guides/service-account)
- [https://developers.google.com/apps-script/guides/services/authorization](https://developers.google.com/apps-script/guides/services/authorization)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Feature Generally Available: To authenticate to the Maps service, you can now use an API key with the new methods setAuthenticationByKey(apiKey) and setAuthenticationByKey(apiKey, signingKey) .
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
- March 05, 2026 Deprecated Deprecated: The method setAuthentication(clientId, signingKey) has been deprecated and is scheduled for sunset in June 2026.
- Instead, use setAuthenticationByKey(apiKey) or setAuthenticationByKey(apiKey, signingKey) .

### "Authenticate as an Google Apps Script project using service accounts \_\

- URL: [https://developers.google.com/apps-script/guides/service-account](https://developers.google.com/apps-script/guides/service-account)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Related topics Create access credentials Authenticate as a Google Chat app Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Google Workspace Apps Script Guides Send feedback Authenticate as an Google Apps Script project using service accounts Stay organized with collections Save and categorize content based on your preferences.
- Consider using service account authentication for these reasons: Better performance with Google Cloud APIs and services : Many Google Cloud APIs are designed for service account authentication.
- Set up service account authentication in your Apps Script project This section explains how to add your service account credentials from your Cloud project to an Apps Script project.

### Authorization for Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/authorization](https://developers.google.com/apps-script/guides/services/authorization)
- Source ID: `site-docs-root-2`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions and types of scripts The user identity that a script runs with — and thus the data it can access — varies based on the scenario in which the script is run, as shown in the following table.
- Authorization lifecycle for add-ons Add-ons for Sheets, Docs, Slides, and Forms generally follow the same authorization model as scripts that are bound to a document.
- Re-authentication behavior with Apps Script Apps Script does not enforce the re-authentication frequency that is configured in Google Cloud service settings.
- Your Apps Script application doesn't automatically ask you to re-authenticate after the specified time period (for example, 12 hours).

