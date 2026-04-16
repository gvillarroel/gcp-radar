---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.680Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Outbound OAuth requests"
feature_slug: "outbound-oauth-requests"
latest_feature_date: "2010-08-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services/cloud-run"
  - "https://developers.google.com/apps-script/guides/client-verification"
keywords:
  - "outbound"
  - "oauth"
  - "requests"
  - "apps"
  - "script"
  - "supports"
  - "through"
  - "urlfetchapp"
---

# Outbound OAuth requests

Product: Apps Script
Coverage: LOW

## Step 02 Summary

Apps Script supports outbound OAuth requests through UrlFetchApp OAuth services.

## Extended Definition

Apps Script supports outbound OAuth requests through UrlFetchApp OAuth services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run)
- [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification)

## Supporting Pages

### OAuth Client Verification \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the following articles: Unverified Apps OAuth Application Verification FAQ Google API Services: User Data Policy Figure 1 : Unverified app screen Figure 2 : Unverified app authorization flow This change applies to Google OAuth web clients, including those used by all Apps Script projects.
- Page Summary outlined flag Google requires verification for Google OAuth clients requesting certain sensitive OAuth scopes, though Apps Script projects within the same Google Workspace domain or customer are exempt.
- Home Google Workspace Apps Script Guides Send feedback OAuth Client Verification Stay organized with collections Save and categorize content based on your preferences.
- Apps Script projects that request sensitive OAuth scopes.

### Connect to Google Cloud services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run)
- Source ID: `site-docs-root-2`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Make an authenticated request Once configured, you can include the identity token in the Authorization header of your requests: function callCloudRunService () { const idToken = ScriptApp . getIdentityToken (); const url = 'https://your-service-url.a.run.app' ; const response = UrlFetchApp . fetch ( url , { headers : { 'Authorization' : 'Bearer ' + idToken } }); Logger . log ( response . getContentText ()); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In your script project's manifest file ( appsscript.json ), add the openid scope and any other required scopes to the oauthScopes array: { "timeZone" : "America/New York" , "dependencies" : { }, "exceptionLogging" : "STACKDRIVER" , "runtimeVersion" : "V8" , "oauthScopes" : [ "openid" , "https://www.googleapis.com/auth/script.external request" , "https://www.googleapis.com/auth/userinfo.email" ] } Configure the Google Cloud service You must configure the Google Cloud service to accept the identity token issued to your script.
- Home Google Workspace Apps Script Guides Send feedback Connect to Google Cloud services Stay organized with collections Save and categorize content based on your preferences.
- To find your script's client ID, you can decode an identity token: function logClientId () { const idToken = ScriptApp . getIdentityToken (); const body = idToken . split ( '.' )[ 1 ]; const decoded = Utilities . newBlob ( Utilities . base64Decode ( body )). getDataAsString (); const payload = JSON . parse ( decoded ); Logger . log ( 'Client ID: ' + payload . aud ); } For Cloud Run, you can configure custom audiences to allow this client ID.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- April 23, 2025 Fixed Between approximately September 2024 and March 2025, for Google Sheets modifications made by time-based Apps Script triggers, a bug caused incorrect OAuth App IDs and App Names to be logged in the Google Admin console.
- UrlFetch requests made by scripts that run on a time-based trigger now include an If-Modified-Since HTTP header so that Apps Script can use a cached copy of the page if one is available and the page has not changed.
- August 07, 2024 Change Google Workspace administrators can now turn on an allowlist in the admin console to control which external domains users can access through Apps Script's URL Fetch service .

