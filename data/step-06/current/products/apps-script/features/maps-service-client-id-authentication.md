---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.497Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Maps Service client ID authentication"
feature_slug: "maps-service-client-id-authentication"
latest_feature_date: "2026-03-05"
deprecation_date: "June 2026"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/client-verification"
  - "https://developers.google.com/apps-script/api/quickstart/python"
keywords:
  - "maps"
  - "client"
  - "id"
  - "authentication"
  - "uses"
  - "setauthentication"
  - "clientid"
  - "signingkey"
---

# Maps Service client ID authentication

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Maps Service client ID authentication uses setAuthentication(clientId, signingKey) to authenticate requests with a Maps Platform client ID; deprecated on June 2026.

## Extended Definition

Maps Service client ID authentication uses setAuthentication(clientId, signingKey) to authenticate requests with a Maps Platform client ID; deprecated on June 2026.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification)
- [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- March 05, 2026 Deprecated Deprecated: The method setAuthentication(clientId, signingKey) has been deprecated and is scheduled for sunset in June 2026.
- Feature Generally Available: To authenticate to the Maps service, you can now use an API key with the new methods setAuthenticationByKey(apiKey) and setAuthenticationByKey(apiKey, signingKey) .
- Instead, use setAuthenticationByKey(apiKey) or setAuthenticationByKey(apiKey, signingKey) .
- This change is because Maps platform client IDs were deprecated on May 26, 2025, and can't be used after May 31, 2026.

### OAuth Client Verification \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table illustrates what situations result in the unverified app authorization flow: Client is verified Publisher is a Google Workspace account of customer A Script is in a shared drive of customer A Publisher is a Gmail account User is a Google Workspace account of customer A Normal auth flow Normal auth flow Normal auth flow Unverified auth flow User is a Google Workspace account not of customer A Normal auth flow Unverified auth flow Unverified auth flow Unverified auth flow User is a Gmail account 1 Normal auth flow Unverified auth flow Unverified auth flow Unverified auth flow 1 Any Gmail account, including the account used to publish the app.
- For more information, see the following articles: Unverified Apps OAuth Application Verification FAQ Google API Services: User Data Policy Figure 1 : Unverified app screen Figure 2 : Unverified app authorization flow This change applies to Google OAuth web clients, including those used by all Apps Script projects.
- Page Summary outlined flag Google requires verification for Google OAuth clients requesting certain sensitive OAuth scopes, though Apps Script projects within the same Google Workspace domain or customer are exempt.
- Home Google Workspace Apps Script Guides Send feedback OAuth Client Verification Stay organized with collections Save and categorize content based on your preferences.

### Python quickstart \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This quickstart uses Google Workspace's recommended API client libraries to handle some details of the authentication and authorization flow.
- Install the Google client library for Python using pip to handle authentication and authorization flows.
- This quickstart uses a simplified authentication approach that is appropriate for a testing environment.
- SCOPES = [ "https://www.googleapis.com/auth/script.projects" ] SAMPLE CODE = """ function helloWorld() { console.log("Hello, world!"); } """ . strip () SAMPLE MANIFEST = """ { "timeZone": "America/New York", "exceptionLogging": "CLOUD" } """ . strip () def main (): """Calls the Apps Script API.""" creds = None The file token.json stores the user's access and refresh tokens, and is created automatically when the authorization flow completes for the first time. if os . path . exists ( "token.json" ): creds = Credentials . from authorized user file ( "token.json" , SCOPES ) If there are no (valid) credentials available, let the user log in. if not creds or not creds . valid : if creds and creds . expired and creds . refresh token : creds . refresh ( Request ()) else : flow = InstalledAppFlow . from client secrets file ( "credentials.json" , SCOPES ) creds = flow . run local server ( port = 0 ) Save the credentials for the next run with open ( "token.json" , "w" ) as token : token . write ( creds . to json ()) try : service = build ( "script" , "v1" , credentials = creds ) Call the Apps Script API Create a new project request = { "title" : "My Script" } response = service . projects () . create ( body = request ) . execute () Upload two files to the project request = { "files" : [ { "name" : "hello" , "type" : "SERVER JS" , "source" : SAMPLE CODE }, { "name" : "appsscript" , "type" : "JSON" , "source" : SAMPLE MANIFEST , }, ] } response = ( service . projects () . updateContent ( body = request , scriptId = response [ "scriptId" ]) . execute () ) print ( "https://script.google.com/d/" + response [ "scriptId" ] + "/edit" ) except errors .

