---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.499Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Granular OAuth scope management APIs"
feature_slug: "granular-oauth-scope-management-apis"
latest_feature_date: "2025-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/quickstart/python"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects/getMetrics"
keywords:
  - "granular"
  - "oauth"
  - "scope"
  - "management"
  - "apis"
  - "let"
  - "developers"
  - "inspect"
---

# Granular OAuth scope management APIs

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Granular OAuth scope management APIs let developers inspect required and authorized scopes programmatically through ScriptApp and AuthorizationInfo.

## Extended Definition

Granular OAuth scope management APIs let developers inspect required and authorized scopes programmatically through ScriptApp and AuthorizationInfo.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects/getMetrics](https://developers.google.com/apps-script/api/reference/rest/v1/projects/getMetrics)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- ScriptApp class : requireScopes(authMode, oAuthScopes) requireAllScopes(authMode) getAuthorizationInfo(authMode, oAuthScopes) AuthorizationInfo class : getAuthorizedScopes() For more information, refer to Handle granular OAuth permissions .
- The granular OAuth consent screen lets users specify which individual OAuth scopes they would like to authorize.
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.

### Method: projects.getMetrics \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects/getMetrics](https://developers.google.com/apps-script/api/reference/rest/v1/projects/getMetrics)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization Scopes Requires the following OAuth scope: https://www.googleapis.com/auth/script.metrics For more information, see the OAuth 2.0 Overview .
- Authorization requires the https://www.googleapis.com/auth/script.metrics OAuth scope.
- HTTP request Path parameters Query parameters Request body Response body JSON representation Authorization Scopes MetricsGranularity MetricsFilter JSON representation MetricsValue JSON representation Try it!
- Query parameters Parameters metricsGranularity enum ( MetricsGranularity ) Required field indicating what granularity of metrics are returned. metricsFilter object ( MetricsFilter ) Optional field containing filters to apply to the request.

### Python quickstart \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SCOPES = [ "https://www.googleapis.com/auth/script.projects" ] SAMPLE CODE = """ function helloWorld() { console.log("Hello, world!"); } """ . strip () SAMPLE MANIFEST = """ { "timeZone": "America/New York", "exceptionLogging": "CLOUD" } """ . strip () def main (): """Calls the Apps Script API.""" creds = None The file token.json stores the user's access and refresh tokens, and is created automatically when the authorization flow completes for the first time. if os . path . exists ( "token.json" ): creds = Credentials . from authorized user file ( "token.json" , SCOPES ) If there are no (valid) credentials available, let the user log in. if not creds or not creds . valid : if creds and creds . expired and creds . refresh token : creds . refresh ( Request ()) else : flow = InstalledAppFlow . from client secrets file ( "credentials.json" , SCOPES ) creds = flow . run local server ( port = 0 ) Save the credentials for the next run with open ( "token.json" , "w" ) as token : token . write ( creds . to json ()) try : service = build ( "script" , "v1" , credentials = creds ) Call the Apps Script API Create a new project request = { "title" : "My Script" } response = service . projects () . create ( body = request ) . execute () Upload two files to the project request = { "files" : [ { "name" : "hello" , "type" : "SERVER JS" , "source" : SAMPLE CODE }, { "name" : "appsscript" , "type" : "JSON" , "source" : SAMPLE MANIFEST , }, ] } response = ( service . projects () . updateContent ( body = request , scriptId = response [ "scriptId" ]) . execute () ) print ( "https://script.google.com/d/" + response [ "scriptId" ] + "/edit" ) except errors .
- Call the Apps Script API to create a new script project, upload a file to the project, and log the script's URL to the user. """ import os.path from google.auth.transport.requests import Request from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow from googleapiclient import errors from googleapiclient.discovery import build If modifying these scopes, delete the file token.json.
- Next steps Try the Google Workspace APIs in the APIs explorer Apps Script API reference documentation Google APIs Client for Python documentation Google Apps Script API PyDoc documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Install the Google client library Install the Google client library for Python: python3 - m pip install -- upgrade google - api - python - client google - auth - httplib2 google - auth - oauthlib Configure the sample In your working directory, create a file named quickstart.py .

