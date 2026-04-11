---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.698Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script UrlFetch service: Daily total data-per-user quota"
feature_slug: "apps-script-urlfetch-service-daily-total-data-per-user-quota"
latest_feature_date: "2018-06-19"
deprecation_date: "2018-06-19"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/services/quotas"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/chat"
keywords:
  - "daily"
  - "total"
  - "urlfetch"
  - "quota"
  - "per"
  - "user"
  - "script"
  - "apps"
---

# Apps Script UrlFetch service: Daily total data-per-user quota

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The UrlFetch total per-user daily data-received quota was removed; deprecated on 2018-06-19.

## Extended Definition

The UrlFetch total per-user daily data-received quota was removed; deprecated on 2018-06-19.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)

## Supporting Pages

### Quotas for Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)
- Source ID: `site-docs-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Consumer accounts (for example, gmail.com) Google Workspace accounts Calendar events created 5,000 / day 10,000 / day Contacts created 1,000 / day 2,000 / day Documents created 250 / day 1,500 / day Files converted 2,000 / day 4,000 / day Email recipients per day (for example, with MailApp) 100 / day 1,500 / day Email recipients per day within domain (for example, with MailApp) 100 / day 2,000 / day Email read/write (excluding send) 20,000 / day 50,000 / day Groups read 2,000 / day 10,000 / day JDBC connection 10,000 / day 50,000 / day JDBC failed connection 100 / day 500 / day Presentations created 250 / day 1,500 / day Properties read/write 50,000 / day 500,000 / day Slides created 250 / day 1,500 / day Spreadsheets created 250 / day 3,200 / day Triggers total runtime 90 min / day 6 hr / day URL Fetch calls 20,000 / day 100,000 / day Static Map render 1,000 / day 10,000 / day Google Map Direction query 1,000 / day 10,000 / day Google Map Geocode calls 1,000 / day 10,000 / day Translate calls 5,000 / day 20,000 / day Google Map elevation samples query 1,000 / day 10,000 / day Apps Script projects 50 / day 50 / day Additional limits apply for trial accounts.
- Feature Consumer accounts (e.g., gmail.com) Google Workspace accounts Script runtime 6 min / execution 6 min / execution Custom function runtime 30 sec / execution 30 sec / execution Google Workspace add-on runtime 30 sec / execution 30 sec / execution Simultaneous executions per user 30 / user 30 / user Simultaneous executions per script 1,000 1,000 Email attachments 250 / msg 250 / msg Email body size 200 KB / msg 400 KB / msg Email recipients per message 50 / msg 50 / msg Email total attachments size 25 MB / msg 25 MB / msg Properties value size 9 KB / val 9 KB / val Properties total storage 500 KB / property store 500 KB / property store Triggers 20 / user / script 20 / user / script URL Fetch response size 50 MB / call 50 MB / call URL Fetch headers 100 / call 100 / call URL Fetch header size 8 KB / call 8 KB / call URL Fetch POST size 50 MB / call 50 MB / call URL Fetch URL length 2 KB / call 2 KB / call Versions 200 / script 200 / script Gemini Alpha program: Add-ons that extend Workspace Studio have an execution timeout of 2 minutes.
- Page Summary outlined flag Apps Script services have daily quotas and limitations that can cause scripts to throw an exception and stop execution if exceeded.
- Google Apps Script services have daily quotas and limitations on some features.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- August 20, 2018 Feature The Utilities service has been extended with the following methods and classes: Utilities.computeRsaSha1Signature(value, key) Utilities.computeRsaSha1Signature(value, key, charset) Utilities.computeRsaSignature(algorithm, value, key) Utilities.computeRsaSignature(algorithm, value, key, charset) RsaAlgorithm June 19, 2018 Deprecated The quota on total data received by UrlFetch per day per user has been removed.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
- Change The quota for the number of email recipients for scripts running from consumer (gmail.com) or free Google Apps accounts has been reduced from 500 to 100 per day.

### Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Members . list ( spaceName , { pageSize : 10 , pageToken : pageToken , }); if ( ! response . memberships response . memberships . length === 0 ) { pageToken = response . nextPageToken ; continue ; } for ( const membership of response . memberships ) { console . log ( "Member: %s, Role: %s" , membership . member . displayName , membership . role , ); } pageToken = response . nextPageToken ; } while ( pageToken ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } } Troubleshoot If you encounter Error 400: invalid scope with the error message Some requested scopes cannot be shown , it means you haven't specified any authorization scopes in the Apps Script project's appsscript.json file.
- Add the chat.messages.create authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.messages.create" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Posts a new message to the specified space on behalf of the user. @param {string} spaceName The resource name of the space. / function postMessageWithUserCredentials ( spaceName ) { try { const message = { text : "Hello world!" }; Chat .
- Add the chat.memberships.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.memberships.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Lists all the members of a Chat space. @param {string} spaceName The resource name of the space. / function listMemberships ( spaceName ) { let response ; let pageToken = null ; try { do { response = Chat .
- Add the chat.spaces.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Gets information about a Chat space. @param {string} spaceName The resource name of the space. / function getSpace ( spaceName ) { try { const space = Chat .

