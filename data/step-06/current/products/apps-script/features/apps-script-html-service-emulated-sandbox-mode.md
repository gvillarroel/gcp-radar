---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.714Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script HTML Service EMULATED sandbox mode"
feature_slug: "apps-script-html-service-emulated-sandbox-mode"
latest_feature_date: "2015-12-10"
deprecation_date: "2015-12-10"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/guides/triggers/events"
keywords:
  - "emulated"
  - "sandbox"
  - "mode"
  - "html"
  - "script"
  - "apps"
  - "was"
  - "the"
---

# Apps Script HTML Service EMULATED sandbox mode

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The HTML service’s EMULATED sandbox mode was deprecated, so scripts explicitly requesting it now use IFRAME mode; deprecated on 2015-12-10.

## Extended Definition

The HTML service’s EMULATED sandbox mode was deprecated, so scripts explicitly requesting it now use IFRAME mode; deprecated on 2015-12-10.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- In a few edge cases, this may affect how existing web apps operate; if so, append .setSandboxMode(HtmlService.SandboxMode.EMULATED) to your HtmlOutput object to restore the old behavior.
- December 10, 2015 Deprecated In the HTML service , EMULATED sandbox mode was sunset .
- November 12, 2015 Change In the HTML service , all new scripts default to IFRAME sandbox mode unless NATIVE mode is explicitly specified.
- This method is no longer useful because Apps Script's authorization model has changed since the time the method was introduced.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The webpage provides an advanced guide on creating a fact-check custom function for Google Sheets using Google Apps Script, powered by a Vertex AI agent and Gemini model.
- View on GitHub Create and configure in a new spreadsheet To make a complete copy of the sample Sheets spreadsheet including its container-bound Apps Script project, click the following button: Copy Google Sheets speadsheet In the newly created spreadsheet, go to Extensions > Apps Script .
- In the Apps Script project, go to Project Settings , click Edit script properties , then click Add script property to add the following script properties: LOCATION with the location of the Google Cloud project created in previous steps such as us-central1 .
- Coding level : Advanced Duration : 30 minutes Project type : Custom function Overview A fact-check custom function for Google Sheets to be used as a bound Google Apps Script project powered by a Vertex AI agent and Gemini model.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following sample code shows a simple onEdit(e) trigger for a Google Sheets script that uses the event object to determine which cell was edited. function onEdit ( e ){ // Set a comment on the edited cell to indicate when it was changed . var range = e . range ; range . setNote ( 'Last modified: ' + new Date ()); } This page describes the fields in the event object for different types of triggers.
- 4034124084959907503 user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Edit ( simple and installable ) authMode A value from the ScriptApp.AuthMode enum.
- 4034124084959907503 user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Change ( installable ) authMode A value from the ScriptApp.AuthMode enum.
- When the Apps Script EventUpdated trigger fires indicating a calendar event change, perform an incremental sync for the affected calendar using the stored nextSyncToken .

