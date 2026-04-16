---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.672Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "MailApp inline images"
feature_slug: "mailapp-inline-images"
latest_feature_date: "2011-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service"
  - "https://developers.google.com/apps-script/guides/services"
keywords:
  - "mailapp"
  - "inline"
  - "images"
  - "sendemail"
  - "supports"
  - "sending"
  - "emails"
---

# MailApp inline images

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

MailApp.sendEmail() supports sending emails with inline images.

## Extended Definition

MailApp.sendEmail() supports sending emails with inline images.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- [https://developers.google.com/apps-script/guides/services](https://developers.google.com/apps-script/guides/services)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- September 26, 2011 Feature Added support for inlineImages when sending emails with MailApp.sendEmail() .
- Added a method to check if there is remaining quota for sending emails for the current day: MailApp.getRemainingDailyQuota() .
- Issue 1965 : Emails forwarded using GmailMessage.forward() now preserve inline images.
- Updated the script failure notification emails to include the name and a link of the spreadsheet that contains the failed script in response to this issue Increased the allowed attachment size for emails sent via GmailApp and MailApp from 5MB to 25MB.

### AddOns Response Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- Methods Method Return type Brief description new Accessory Widget() Accessory Widget Creates a new Accessory Widget . new Action() Action Creates a new Action . new Action Response Builder() Action Response Builder Creates a Action Response Builder . new Addon Compose Ui Action Response Builder() Addon Compose Ui Action Response Builder Creates a Addon Compose Ui Action Response Builder . new Attachment() Attachment Creates a Attachment . new Calendar Event Action Response Builder() Calendar Event Action Response Builder Creates a Calendar Event Action Response Builder . new Chat Data Action Builder() Chat Data Actions Response Builder Creates a Chat Data Actions Response Builder . new Chat Message() Chat Message Creates a Chat Message . new Compose Action Response Builder() Compose Action Response Builder Creates a Compose Action Response Builder . new Create Message Action() Create Message Action Creates a Create Message Action . new Drive Items Selected Action Response Builder() Drive Items Selected Action Response Builder Creates a Drive Items Selected Action Response Builder . new Editor File Scope Action Response Builder() Editor File Scope Action Response Builder Creates a Editor File Scope Action Response Builder . new Link Preview() Link Preview Creates a Link Preview . new Navigation() Navigation Creates a Navigation . new Notification() Notification Creates a Notification . new Open Link() Open Link Creates a Open Link . new Render Action Builder() Render Action Builder Creates a new Render Action Builder . new Universal Action Response Builder() Universal Action Response Builder Creates a Universal Action Response Builder . new Update Draft Action Response Builder() Update Draft Action Response Builder Creates a Update Draft Action Response Builder . new Update Draft Bcc Recipients Action() Update Draft Bcc Recipients Action Creates a Update Draft Bcc Recipients Action ; new Update Draft Body Action() Update Draft Body Action Creates a Update Draft Body Action . new Update Draft Cc Recipients Action() Update Draft Cc Recipients Action Creates a Update Draft Cc Recipients Action . new Update Draft Subject Action() Update Draft Subject Action Creates a Update Draft Subject Action . new Update Draft To Recipients Action() Update Draft To Recipients Action Creates a Update Draft To Recipients Action . new Update Inline Preview Action() Update Inline Preview Action Creates a Update Inline Preview Action . new Update Message Action() Update Message Action Creates a Update Message Action .
- CalendarEventActionResponseBuilder Methods Method Return type Brief description add Attachments(attachments) Calendar Event Action Response Builder Specifies that the response should add the attachments to the Calendar event when the associated UI action is taken. add Attendees(emails) Calendar Event Action Response Builder Specifies that the response should add the indicated attendees to the Calendar event when the associated UI action is taken. build() Calendar Event Action Response Builds the current Calendar event action response and validates it. set Conference Data(conferenceData) Calendar Event Action Response Builder Specifies that the response should set the indicated conference data to the Calendar event when the associated UI action is taken.
- ChatDataActionsResponseBuilder Methods Method Return type Brief description build() Data Actions Response Builds the current action response. set Create Chat Message Action(createMessageAction) Chat Data Actions Response Builder Sets the Create Message Action for this Data Actions Response . set Update Chat Message Action(updateMessageAction) Chat Data Actions Response Builder Sets the Update Message Action for this Data Actions Response . set Update Inline Preview Action(updateInlinePreviewAction) Chat Data Actions Response Builder Sets the Update Inline Preview Action for this Data Actions Response .
- UpdateInlinePreviewAction Methods Method Return type Brief description add Card With Id(cardWithId) Update Inline Preview Action Adds the card for this action. add Expiration(ttl) Update Inline Preview Action Adds the expiration for this action.

### Built-in Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services](https://developers.google.com/apps-script/guides/services)
- Source ID: `site-docs-root`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Scripts make method calls in this format: GlobalObjectName.methodName(argument1, argument2, ..., argumentN); For example, a script can send an email by calling the sendEmail(recipient, subject, body) method of the Gmail service like so: GmailApp . sendEmail ( 'claire@example.com' , 'Subject line' , 'This is the body.' ); If a method returns another Apps Script class, chain method calls on one line. (Return types are shown both in autocomplete and in a method's reference documentation.) For example, the method DocumentApp.create() returns a Document ; thus, the following two sections of code are equivalent: var doc = DocumentApp . create ( 'New document' ); var body = doc . getTab ( 't.0' ) . asDocumentTab () . getBody (); body . appendParagraph ( 'New paragraph.' ); // Same result as above .
- Google Apps Script supports both the modern V8 and older Rhino JavaScript runtimes, with the V8 runtime being strongly recommended for its support of modern ECMAScript features.
- Modern JavaScript features Apps Script supports two JavaScript runtimes: the modern V8 runtime and an older one powered by Mozilla's Rhino JavaScript interpreter .
- Global objects Each service provides at least one global (top-level) object; for example, the Gmail service is accessed solely from the GmailApp object.

