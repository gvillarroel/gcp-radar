---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.586Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UrlFetchApp PATCH request support"
feature_slug: "urlfetchapp-patch-request-support"
latest_feature_date: "2016-04-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services/advanced"
  - "https://developers.google.com/apps-script/guides/services/external"
keywords:
  - "urlfetchapp"
  - "patch"
  - "request"
  - "can"
  - "send"
  - "http"
  - "requests"
---

# UrlFetchApp PATCH request support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

UrlFetchApp can send HTTP PATCH requests.

## Extended Definition

UrlFetchApp can send HTTP PATCH requests.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- [https://developers.google.com/apps-script/guides/services/external](https://developers.google.com/apps-script/guides/services/external)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- April 11, 2016 Feature Support for PATCH requests has been added to UrlFetchApp .
- UrlFetch requests made by scripts that run on a time-based trigger now include an If-Modified-Since HTTP header so that Apps Script can use a cached copy of the page if one is available and the page has not changed.
- Passing in string values for the document type is deprecated but still functional. (Issue 1755) Change Enabled SSL certificate validation for UrlFetchApp requests.
- Fixed a problem that prevented scripts from sending POST requests to other scripts that used the ContentService .

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Events . insert ( event , 'primary' , optionalArgs ); UrlFetch (HTTP): const event = { summary : 'Lunch' , location : 'Deli' , start : { dateTime : '2026-01-01T12:00:00-05:00' }, end : { dateTime : '2026-01-01T13:00:00-05:00' } }; const url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events?sendUpdates=all' ; const options = { method : 'post' , contentType : 'application/json' , headers : { Authorization : Bearer ${ ScriptApp . getOAuthToken () } }, payload : JSON . stringify ( event ) }; UrlFetchApp . fetch ( url , options ); For the UrlFetchApp method, manually specify the required OAuth scopes in the script's manifest file .
- The following table compares the two methods: Feature Advanced Service UrlFetch (HTTP) Authorization Handled automatically Manual handling required Autocomplete Available Not available Functionality Scope May be a subset of the API Full access to all API features Complexity Easier More complex (requires constructing headers and parsing responses) Code comparison The code samples show the difference in complexity between creating a Calendar event using the advanced service versus using UrlFetchApp .
- Example: Calendar.Events.insert To create a Calendar event : The Google Calendar API documentation shows the corresponding HTTP request structure: HTTP Verb : POST Request URL : https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events Request Body : An Event resource .
- If an advanced service is configured to accept HTTP request headers, and you set a request headers JavaScript object, then you must also set the optional parameters JavaScript object (to an empty object if you aren't using optional parameters).

### External APIs \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/external](https://developers.google.com/apps-script/guides/services/external)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parse XML If an external API returns a raw XML response for a request, access the XML response using the method HTTPResponse.getContentText() . // Make request to API and get response before this point. var xml = response . getContentText (); var doc = XmlService . parse ( xml ); When making XML requests to an API, use the XmlService methods to construct the XML to send. var root = XmlService . createElement ( 'entry' ) . setAttribute ( 'keywords' , 'dog, skateboard' ); var group = XmlService . createElement ( 'group' ) . setAttribute ( 'title' , 'Dog Skateboarding' ) . setAttribute ( 'description' , 'My dog gets some serious air' ); root . addContent ( group ); var document = XmlService . createDocument ( root ); var payload = XmlService . getPrettyFormat (). format ( document ); // Make request to API with payload after this point.
- This API request does not require authorization or an API key. var query = '"Apps Script" stars:">=100"' ; var url = 'https://api.github.com/search/repositories' + '?sort=stars' + '&q=' + encodeURIComponent ( query ); var response = UrlFetchApp . fetch ( url , { 'muteHttpExceptions' : true }); Logger . log ( response ); Make requests to services with OAuth APIs that act on behalf of a user usually require authorization, often using the OAuth protocol .
- Apps Script doesn't provide built-in support for the protocol, but there are open source libraries you can use to perform the OAuth flow and send the credentials with your requests: OAuth1 for Apps Script : Compatible with OAuth 1.0 and 1.0a.
- Handling XML responses and requests uses getContentText() and the XmlService methods.

