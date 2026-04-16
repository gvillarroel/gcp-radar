---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.641Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Simplified Apps Script authorization flow"
feature_slug: "simplified-apps-script-authorization-flow"
latest_feature_date: "2013-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/quickstart/python"
  - "https://developers.google.com/apps-script/api/quickstart/java"
keywords:
  - "simplified"
  - "apps"
  - "script"
  - "authorization"
  - "flow"
  - "introduced"
  - "fewer"
  - "clicks"
---

# Simplified Apps Script authorization flow

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script introduced a new authorization flow with fewer clicks and automatic Google Developers Console project creation.

## Extended Definition

Apps Script introduced a new authorization flow with fewer clicks and automatic Google Developers Console project creation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python)
- [https://developers.google.com/apps-script/api/quickstart/java](https://developers.google.com/apps-script/api/quickstart/java)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Added an option to upgrade to a new authorization flow that requires fewer clicks and automatically creates a Google Developers Console project for every script.
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- This method is no longer useful because Apps Script's authorization model has changed since the time the method was introduced.
- Issue 2776 : Existing deployed web apps now properly authenticate after upgrading a script to use the new authorization experience.

### Java quickstart \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/quickstart/java](https://developers.google.com/apps-script/api/quickstart/java)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Include the following code in your new Java file: appsScript/quickstart/src/main/java/AppsScriptQuickstart.java View on GitHub import com.google.api.client.auth.oauth2.Credential ; import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp ; import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver ; import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow ; import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets ; import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.JsonFactory ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.client.util.store.FileDataStoreFactory ; import com.google.api.services.script.Script ; import com.google.api.services.script.model.Content ; import com.google.api.services.script.model.CreateProjectRequest ; import com.google.api.services.script.model.File ; import com.google.api.services.script.model.Project ; import java.io.FileNotFoundException ; import java.io.IOException ; import java.io.InputStream ; import java.io.InputStreamReader ; import java.security.GeneralSecurityException ; import java.util.Arrays ; import java.util.Collections ; import java.util.List ; public class AppsScriptQuickstart { private static final String APPLICATION NAME = "Apps Script API Java Quickstart" ; private static final JsonFactory JSON FACTORY = GsonFactory . getDefaultInstance (); private static final String TOKENS DIRECTORY PATH = "tokens" ; / Global instance of the scopes required by this quickstart.
- InputStream in = AppsScriptQuickstart . class . getResourceAsStream ( CREDENTIALS FILE PATH ); if ( in == null ) { throw new FileNotFoundException ( "Resource not found: " + CREDENTIALS FILE PATH ); } GoogleClientSecrets clientSecrets = GoogleClientSecrets . load ( JSON FACTORY , new InputStreamReader ( in )); // Build flow and trigger user authorization request.
- Builder (). setPort ( 8888 ). build (); return new AuthorizationCodeInstalledApp ( flow , receiver ). authorize ( "user" ); } public static void main ( String ... args ) throws IOException , GeneralSecurityException { // Build a new authorized API client service. final NetHttpTransport HTTP TRANSPORT = GoogleNetHttpTransport . newTrustedTransport (); Script service = new Script .
- Page Summary outlined flag This quickstart guides you through creating a Java command-line application that interacts with the Google Apps Script API using simplified authentication suitable for testing.

### Python quickstart \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/quickstart/python](https://developers.google.com/apps-script/api/quickstart/python)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SCOPES = [ "https://www.googleapis.com/auth/script.projects" ] SAMPLE CODE = """ function helloWorld() { console.log("Hello, world!"); } """ . strip () SAMPLE MANIFEST = """ { "timeZone": "America/New York", "exceptionLogging": "CLOUD" } """ . strip () def main (): """Calls the Apps Script API.""" creds = None The file token.json stores the user's access and refresh tokens, and is created automatically when the authorization flow completes for the first time. if os . path . exists ( "token.json" ): creds = Credentials . from authorized user file ( "token.json" , SCOPES ) If there are no (valid) credentials available, let the user log in. if not creds or not creds . valid : if creds and creds . expired and creds . refresh token : creds . refresh ( Request ()) else : flow = InstalledAppFlow . from client secrets file ( "credentials.json" , SCOPES ) creds = flow . run local server ( port = 0 ) Save the credentials for the next run with open ( "token.json" , "w" ) as token : token . write ( creds . to json ()) try : service = build ( "script" , "v1" , credentials = creds ) Call the Apps Script API Create a new project request = { "title" : "My Script" } response = service . projects () . create ( body = request ) . execute () Upload two files to the project request = { "files" : [ { "name" : "hello" , "type" : "SERVER JS" , "source" : SAMPLE CODE }, { "name" : "appsscript" , "type" : "JSON" , "source" : SAMPLE MANIFEST , }, ] } response = ( service . projects () . updateContent ( body = request , scriptId = response [ "scriptId" ]) . execute () ) print ( "https://script.google.com/d/" + response [ "scriptId" ] + "/edit" ) except errors .
- Call the Apps Script API to create a new script project, upload a file to the project, and log the script's URL to the user. """ import os.path from google.auth.transport.requests import Request from google.oauth2.credentials import Credentials from google auth oauthlib.flow import InstalledAppFlow from googleapiclient import errors from googleapiclient.discovery import build If modifying these scopes, delete the file token.json.
- Page Summary outlined flag This quickstart guide helps you create a Python command-line application that interacts with the Google Apps Script API using simplified authentication suitable for testing.
- Next steps Try the Google Workspace APIs in the APIs explorer Apps Script API reference documentation Google APIs Client for Python documentation Google Apps Script API PyDoc documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

