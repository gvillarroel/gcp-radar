---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.616Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UrlFetchApp advanced parameter escaping"
feature_slug: "urlfetchapp-advanced-parameter-escaping"
latest_feature_date: "2014-01-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services/advanced"
  - "https://developers.google.com/apps-script/advanced/chat"
keywords:
  - "urlfetchapp"
  - "advanced"
  - "parameter"
  - "escaping"
  - "fetch"
  - "supports"
  - "disable"
  - "automatic"
---

# UrlFetchApp advanced parameter escaping

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

UrlFetchApp.fetch() supports an advanced parameter to disable automatic escaping of reserved URL characters.

## Extended Definition

UrlFetchApp.fetch() supports an advanced parameter to disable automatic escaping of reserved URL characters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added the advanced parameter escaping to UrlFetchApp.fetch() .
- Fixed Issue 2740 : UrlFetchApp.fetch() calls no longer fail if the advanced parameters specify a payload without specifying the request method.
- Issue 286 : UrlFetchApp 's fetch method now accepts followRedirects as an advanced argument.
- Issue 3046 : UrlFetchApp now properly preserves RFC 3986 escaping.

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table compares the two methods: Feature Advanced Service UrlFetch (HTTP) Authorization Handled automatically Manual handling required Autocomplete Available Not available Functionality Scope May be a subset of the API Full access to all API features Complexity Easier More complex (requires constructing headers and parsing responses) Code comparison The code samples show the difference in complexity between creating a Calendar event using the advanced service versus using UrlFetchApp .
- Events . insert ( event , 'primary' , optionalArgs ); UrlFetch (HTTP): const event = { summary : 'Lunch' , location : 'Deli' , start : { dateTime : '2026-01-01T12:00:00-05:00' }, end : { dateTime : '2026-01-01T13:00:00-05:00' } }; const url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events?sendUpdates=all' ; const options = { method : 'post' , contentType : 'application/json' , headers : { Authorization : Bearer ${ ScriptApp . getOAuthToken () } }, payload : JSON . stringify ( event ) }; UrlFetchApp . fetch ( url , options ); For the UrlFetchApp method, manually specify the required OAuth scopes in the script's manifest file .
- If an advanced service is configured to accept HTTP request headers, and you set a request headers JavaScript object, then you must also set the optional parameters JavaScript object (to an empty object if you aren't using optional parameters).
- How method signatures are determined Advanced services generally use the same objects, method names, and parameters as the corresponding public APIs, although method signatures are translated for use in Apps Script.

### Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Advanced Chat service has limitations and does not support the media.download method or Developer Preview methods, which require using UrlFetchApp . manage Chat spaces, members, and messages.
- In most cases, Apps Script automatically determines what scopes a script needs, but when you use the Chat advanced service, you must manually add the authorization scopes that your script uses to your Apps Script project's manifest file.
- Chat API methods available in Developer Preview To download a message attachment or call a developer preview method, use UrlFetchApp instead.
- Like all advanced services in Apps Script, the Chat service uses the same objects, methods, and parameters as the public API.

