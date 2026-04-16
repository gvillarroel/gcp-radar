---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.636Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "GmailApp sent mail synchronization"
feature_slug: "gmailapp-sent-mail-synchronization"
latest_feature_date: "2013-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/gmail"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services"
keywords:
  - "gmailapp"
  - "sent"
  - "mail"
  - "synchronization"
  - "now"
  - "appears"
  - "gmail"
  - "folder"
---

# GmailApp sent mail synchronization

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Mail sent with GmailApp now appears in Gmail's Sent Mail folder.

## Extended Definition

Mail sent with GmailApp now appears in Gmail's Sent Mail folder.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/gmail](https://developers.google.com/apps-script/advanced/gmail)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services](https://developers.google.com/apps-script/guides/services)

## Supporting Pages

### Advanced Gmail Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/gmail](https://developers.google.com/apps-script/advanced/gmail)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Notice the use of page tokens to access the full list of results. advanced/gmail.gs View on GitHub / Gets a history record ID associated with the most recently sent message, then logs all the message IDs that have changed since that message was sent. / function logRecentHistory () { try { // Get the history ID associated with the most recent // sent message. const sent = Gmail .
- Threads . list ( "me" , { q : "label:sent" , maxResults : 1 , }); if ( ! sent . threads ! sent . threads [ 0 ]) { console . log ( "No sent threads found." ); return ; } const historyId = sent . threads [ 0 ]. historyId ; // Log the ID of each message changed since the most // recent message was sent. let pageToken ; const changed = []; do { const recordList = Gmail .
- History . list ( "me" , { startHistoryId : historyId , pageToken : pageToken , }); const history = recordList . history ; if ( history && history . length > 0 ) { for ( const record of history ) { for ( const message of record . messages ) { if ( changed . indexOf ( message . id ) === - 1 ) { changed . push ( message . id ); } } } } pageToken = recordList . nextPageToken ; } while ( pageToken ); for ( const id of changed ) { console . log ( "Message Changed: %s" , id ); } } catch ( err ) { console . log ( err ); } } List messages The following example demonstrates how to list the Gmail user's unread messages. advanced/gmail.gs View on GitHub / Lists unread messages in the user's inbox using the advanced Gmail service. / function listMessages () { // The special value 'me' indicates the authenticated user. const userId = "me" ; // Define optional parameters for the request. const options = { maxResults : 10 , // Limit the number of messages returned. q : "is:unread" , // Search for unread messages. }; try { // Call the Gmail.Users.Messages.list method. const response = Gmail .
- Notice the use of page tokens to access the full list of results. advanced/gmail.gs View on GitHub / Lists, for each thread in the user's Inbox, a snippet associated with that thread. / function listInboxSnippets () { try { let pageToken ; do { const threadList = Gmail .

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Issue 674 : Mail sent with GmailApp now appears in the Sent Mail folder in Gmail.
- Updated the script failure notification emails to include the name and a link of the spreadsheet that contains the failed script in response to this issue Increased the allowed attachment size for emails sent via GmailApp and MailApp from 5MB to 25MB.
- Feature Added the ability to list alternate sender addresses using GmailApp.getAliases() and use them in GmailApp.sendEmail() with the advanced option "from".
- Change Changed the quota for Gmail from 10,000 reads and 10,000 writes per day (excluding sent messages) to 20,000 reads and writes combined per day.

### Built-in Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services](https://developers.google.com/apps-script/guides/services)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Scripts make method calls in this format: GlobalObjectName.methodName(argument1, argument2, ..., argumentN); For example, a script can send an email by calling the sendEmail(recipient, subject, body) method of the Gmail service like so: GmailApp . sendEmail ( 'claire@example.com' , 'Subject line' , 'This is the body.' ); If a method returns another Apps Script class, chain method calls on one line. (Return types are shown both in autocomplete and in a method's reference documentation.) For example, the method DocumentApp.create() returns a Document ; thus, the following two sections of code are equivalent: var doc = DocumentApp . create ( 'New document' ); var body = doc . getTab ( 't.0' ) . asDocumentTab () . getBody (); body . appendParagraph ( 'New paragraph.' ); // Same result as above .
- Global objects Each service provides at least one global (top-level) object; for example, the Gmail service is accessed solely from the GmailApp object.
- In most cases, you access these enums from the global object, as shown in the following example: // Creates a folder that anyone on the Internet can read from and write to. // (Domain administrators can prohibit this setting for Google Workspace users.) var folder = DriveApp . createFolder ( 'Shared Folder' ); folder . setSharing ( DriveApp .
- Child classes cannot be accessed directly but must be accessed by calling a method that returns an instance of that class, and some services use "interface" classes to represent generic types that can be cast to a precise class.

