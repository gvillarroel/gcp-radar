---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.701Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UrlFetch batch requests"
feature_slug: "urlfetch-batch-requests"
latest_feature_date: "2018-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/docs"
  - "https://developers.google.com/apps-script/guides/services/advanced"
keywords:
  - "fetchall"
  - "perform"
  - "urlfetch"
  - "batch"
  - "requests"
  - "urlfetchapp"
  - "added"
  - "to"
---

# UrlFetch batch requests

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added UrlFetchApp.fetchAll to perform multiple URL fetch calls in a single invocation.

## Extended Definition

Added UrlFetchApp.fetchAll to perform multiple URL fetch calls in a single invocation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- April 11, 2016 Feature Support for PATCH requests has been added to UrlFetchApp .
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- Range.copyTo(destination, copyPasteType, transposed) January 19, 2018 Feature The UrlFetch service now has a fetchAll method that makes multiple fetch requests.
- Feature Added the advanced parameter escaping to UrlFetchApp.fetch() .

### Advanced Docs Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- This can be useful when replacing placeholders in a copy of a template document with values from a database. advanced/docs.gs View on GitHub / Performs "replace all". @param {string} documentId The document to perform the replace text operations on. @param {Object} findTextToReplacementMap A map from the "find text" to the "replace text". @return {Object} replies @see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate / function findAndReplace ( documentId , findTextToReplacementMap ) { const requests = []; for ( const findText in findTextToReplacementMap ) { const replaceText = findTextToReplacementMap [ findText ]; // Replace all text across all tabs. const replaceAllTextRequest = { replaceAllText : { containsText : { text : findText , matchCase : true , }, replaceText : replaceText , }, }; // Replace all text across specific tabs. const replaceAllTextWithTabsCriteria = { replaceAllText : { ... replaceAllTextRequest . replaceAllText , tabsCriteria : { tabIds : [ TAB ID 1 , TAB ID 2 , TAB ID 3 ], }, }, }; requests . push ( replaceAllTextRequest ); } const response = Docs .
- Note that when possible you should batch together multiple operations into a single batchUpdate call for efficiency. advanced/docs.gs View on GitHub / Insert text at the beginning of the first tab in the document and then style the inserted text. @param {string} documentId The document the text is inserted into. @param {string} text The text to insert into the document. @return {Object} replies @see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate / function insertAndStyleText ( documentId , text ) { const requests = [ { insertText : { location : { index : 1 , // A tab can be specified using its ID.
- Documents . batchUpdate ( { requests : requests }, documentId , ); const replies = response . replies ; for ( const [ index ] of replies . entries ()) { const numReplacements = replies [ index ]. replaceAllText . occurrencesChanged 0 ; console . log ( "Request %s performed %s replacements." , index , numReplacements , ); } return replies ; } Insert and style text This sample inserts new text at the start of the first tab in the document and styles it with a specific font and size.
- Documents . batchUpdate ({ requests : [{ replaceAllText : ... }] }, docId ); } Do — Call batchUpdate with an array of updates. var requests = []; var textToReplace = [ 'foo' , 'bar' ]; for ( var i = 0 ; i < textToReplace . length ; i ++ ) { requests . push ({ replaceAllText : ... }); } Docs .

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Events . insert ( event , 'primary' , optionalArgs ); UrlFetch (HTTP): const event = { summary : 'Lunch' , location : 'Deli' , start : { dateTime : '2026-01-01T12:00:00-05:00' }, end : { dateTime : '2026-01-01T13:00:00-05:00' } }; const url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events?sendUpdates=all' ; const options = { method : 'post' , contentType : 'application/json' , headers : { Authorization : Bearer ${ ScriptApp . getOAuthToken () } }, payload : JSON . stringify ( event ) }; UrlFetchApp . fetch ( url , options ); For the UrlFetchApp method, manually specify the required OAuth scopes in the script's manifest file .
- The following table compares the two methods: Feature Advanced Service UrlFetch (HTTP) Authorization Handled automatically Manual handling required Autocomplete Available Not available Functionality Scope May be a subset of the API Full access to all API features Complexity Easier More complex (requires constructing headers and parsing responses) Code comparison The code samples show the difference in complexity between creating a Calendar event using the advanced service versus using UrlFetchApp .
- Using advanced services is generally easier and recommended, while the UrlFetch method offers full API functionality but requires manual authorization and handling of requests and responses.
- Developers can access Google APIs via advanced services or by making direct requests using UrlFetch , with each method having different requirements and advantages.

