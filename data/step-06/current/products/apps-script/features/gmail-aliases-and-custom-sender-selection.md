---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.651Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Gmail aliases and custom sender selection"
feature_slug: "gmail-aliases-and-custom-sender-selection"
latest_feature_date: "2012-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/triggers"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service"
keywords:
  - "gmail"
  - "aliases"
  - "custom"
  - "sender"
  - "selection"
  - "gmailapp"
  - "can"
  - "now"
---

# Gmail aliases and custom sender selection

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

GmailApp can now list alternate sender addresses and send email using a selected alias.

## Extended Definition

GmailApp can now list alternate sender addresses and send email using a selected alias.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added the ability to list alternate sender addresses using GmailApp.getAliases() and use them in GmailApp.sendEmail() with the advanced option "from".
- Updated the script failure notification emails to include the name and a link of the spreadsheet that contains the failed script in response to this issue Increased the allowed attachment size for emails sent via GmailApp and MailApp from 5MB to 25MB.
- July 14, 2011 Fixed Fixed an issue where GmailApp.getUserLabelByName() failed for label names that contained spaces.
- Fixed Fixed an issue where MailApp 's and GmailApp 's sendEmail function ignored the advanced parameter name .

### AddOns Response Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- ResourceField Methods Method Return type Brief description set Data Type(dataType) Resource Field Sets the data type of the field, allows other steps to filter the variables by type at selection. set Display Text(displayText) Resource Field Sets the description of the field that is displayed to the end user during variable selection in subsequent steps. set Selector(selector) Resource Field Sets a key for the provider function to provide the value to during the step's execution.
- DataType Methods Method Return type Brief description set Basic Data Type(basicDataType) Data Type Sets the data type to one of the supported Basic Data Type s. set Resource Type(resourceType) Data Type Sets the data type to a custom defined Resource Type . set Value Metadata(valueMetadata) Data Type Sets the Value Metadata , which contains type-related information related to the variable.
- ComposeActionResponseBuilder Methods Method Return type Brief description build() Compose Action Response Builds the current compose action response and validates it. set Gmail Draft(draft) Compose Action Response Builder Sets the draft Gmail Message created using Gmail Message.createDraftReply(body) or similar functions.
- ResourceRetrievedAction Methods Method Return type Brief description set Resource Data(resourceData) Resource Retrieved Action Sets the Resource Data to the resource retrieved action to provide values to the dynamic resource fields or custom resource fields.

### Simple Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, if an empty cell is selected, the onSelectionChange(e) function sets the cell's background to red. triggers/triggers.gs View on GitHub / The event handler triggered when the selection changes in the spreadsheet. @param {Event} e The onSelectionChange event. @see https://developers.google.com/apps-script/guides/triggers#onselectionchangee / function onSelectionChange ( e ) { // Set background to red if a single empty cell is selected. const range = e . range ; if ( range . getNumRows () === 1 && range . getNumColumns () === 1 && range . getCell ( 1 , 1 ). getValue () === "" ) { range . setBackground ( "red" ); } } doGet(e) and doPost(e) The doGet(e) trigger runs automatically when a user visits a web app or a program sends an HTTP GET request to a web app. doPost(e) runs when a program sends an HTTP POST request to a web app.
- For example, the onEdit(e) function below sets a comment on the cell that records the last time it was edited. triggers/triggers.gs View on GitHub / The event handler triggered when editing the spreadsheet. @param {Event} e The onEdit event. @see https://developers.google.com/apps-script/guides/triggers#onedite / function onEdit ( e ) { // Set a comment on the edited cell to indicate when it was changed. const range = e . range ; range . setNote ( Last modified: ${ new Date () } ); } The onEdit() trigger only queues up to 2 trigger events. onSelectionChange(e) The onSelectionChange(e) trigger runs automatically when a user changes the selection in a spreadsheet.
- These restrictions don't apply to doGet(e) or doPost(e) . onOpen(e) The onOpen(e) trigger runs automatically when a user opens a spreadsheet, document, presentation, or form that they have permission to edit. (The trigger does not run when responding to a form, only when opening the form to edit it.) onOpen(e) is most commonly used to add custom menu items to Google Sheets, Slides, Docs, or Forms. triggers/triggers.gs View on GitHub / The event handler triggered when opening the spreadsheet. @param {Event} e The onOpen event. @see https://developers.google.com/apps-script/guides/triggers#onopene / function onOpen ( e ) { // Add a custom menu to the spreadsheet.
- Getting started To use a simple trigger, create a function that uses one of these reserved function names: onOpen(e) runs when a user opens a spreadsheet, document, presentation, or form that the user has permission to edit. onInstall(e) runs when a user installs an Editor add-on from within Google Docs, Sheets, Slides, or Forms. onEdit(e) runs when a user changes a value in a spreadsheet. onSelectionChange(e) runs when a user changes the selection in a spreadsheet. doGet(e) runs when a user visits a web app or a program sends an HTTP GET request to a web app. doPost(e) runs when a program sends an HTTP POST request to a web app.

