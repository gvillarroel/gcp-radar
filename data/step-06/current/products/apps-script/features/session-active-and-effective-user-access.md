---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.681Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Session active and effective user access"
feature_slug: "session-active-and-effective-user-access"
latest_feature_date: "2010-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/docs/tabs"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service"
keywords:
  - "session"
  - "active"
  - "effective"
  - "user"
  - "access"
  - "provides"
  - "methods"
  - "retrieve"
---

# Session active and effective user access

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Session provides methods to retrieve the active user and effective user.

## Extended Definition

Session provides methods to retrieve the active user and effective user.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/docs/tabs](https://developers.google.com/apps-script/guides/docs/tabs)
- [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added the following Session methods, which allow scripts to determine the user's locale and time zone: getActiveUserLocale() getActiveUserTimeZone() January 21, 2014 Feature The new SpreadsheetApp method Spreadsheet.getUi() allows scripts to access the spreadsheet's user-interface environment in order to add features like menus, dialogs, and sidebars.
- Clarified the use of Session.getUser() and added two new methods: Session.getActiveUser() and Session.getEffectiveUser() .
- Scripts now always require authorization to use the methods Session.getEffectiveUser() or Session.getUser() .
- December 18, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using color building and theme colors: Color ColorBuilder SpreadsheetTheme ThemeColor ThemeColorType SpreadsheetApp.newColor() Spreadsheet.getPredefinedSpreadsheetThemes() Spreadsheet.getSpreadsheetTheme() Spreadsheet.resetSpreadsheetTheme() Spreadsheet.setSpreadsheetTheme(theme) December 11, 2019 Feature The Data Studio service has been extended with the following class and new methods to support different response types and dynamic statuses: GetDataResponse GetSchemaResponse SetCredentialsResponse Checkbox.setIsDynamic(isDynamic) CommunityConnector.newGetDataResponse() CommunityConnector.newGetSchemaResponse() CommunityConnector.newSetCredentialsResponse() Config.setIsSteppedConfig(isSteppedConfig) SelectMultiple.setIsDynamic(isDynamic) SelectSingle.setIsDynamic(isDynamic) TextArea.setIsDynamic(isDynamic) TextInput.setIsDynamic(isDynamic) November 06, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables: Slicer Sheet.getSlicers() Sheet.insertSlicer(range, anchorRowPos, anchorColPos) Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY) The Script service has been extended with the ScriptApp.getIdentityToken() method , which returns an identity token for the effective user.

### Work with tabs \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/docs/tabs](https://developers.google.com/apps-script/guides/docs/tabs)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Text selection methods The Document class provides getters and setters to manage where in the text the user is selecting, within the active document.
- These existing methods on the Document class will access or modify content from either the active tab (in scripts bound to a particular document) or the first tab (if an active one is not available).
- Existing methods on the Document class now operate on the active tab (or the first tab), and accessing content within a specific tab is recommended using Tab.asDocumentTab() .
- The Document.getCursor and Document.getSelection methods operate over the active tab, based on the tab that the user is running the script from.

### AddOns Response Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods Method Return type Brief description new Accessory Widget() Accessory Widget Creates a new Accessory Widget . new Action() Action Creates a new Action . new Action Response Builder() Action Response Builder Creates a Action Response Builder . new Addon Compose Ui Action Response Builder() Addon Compose Ui Action Response Builder Creates a Addon Compose Ui Action Response Builder . new Attachment() Attachment Creates a Attachment . new Calendar Event Action Response Builder() Calendar Event Action Response Builder Creates a Calendar Event Action Response Builder . new Chat Data Action Builder() Chat Data Actions Response Builder Creates a Chat Data Actions Response Builder . new Chat Message() Chat Message Creates a Chat Message . new Compose Action Response Builder() Compose Action Response Builder Creates a Compose Action Response Builder . new Create Message Action() Create Message Action Creates a Create Message Action . new Drive Items Selected Action Response Builder() Drive Items Selected Action Response Builder Creates a Drive Items Selected Action Response Builder . new Editor File Scope Action Response Builder() Editor File Scope Action Response Builder Creates a Editor File Scope Action Response Builder . new Link Preview() Link Preview Creates a Link Preview . new Navigation() Navigation Creates a Navigation . new Notification() Notification Creates a Notification . new Open Link() Open Link Creates a Open Link . new Render Action Builder() Render Action Builder Creates a new Render Action Builder . new Universal Action Response Builder() Universal Action Response Builder Creates a Universal Action Response Builder . new Update Draft Action Response Builder() Update Draft Action Response Builder Creates a Update Draft Action Response Builder . new Update Draft Bcc Recipients Action() Update Draft Bcc Recipients Action Creates a Update Draft Bcc Recipients Action ; new Update Draft Body Action() Update Draft Body Action Creates a Update Draft Body Action . new Update Draft Cc Recipients Action() Update Draft Cc Recipients Action Creates a Update Draft Cc Recipients Action . new Update Draft Subject Action() Update Draft Subject Action Creates a Update Draft Subject Action . new Update Draft To Recipients Action() Update Draft To Recipients Action Creates a Update Draft To Recipients Action . new Update Inline Preview Action() Update Inline Preview Action Creates a Update Inline Preview Action . new Update Message Action() Update Message Action Creates a Update Message Action .
- VariableData Methods Method Return type Brief description add Boolean Value(value) Variable Data Adds a boolean value to the variable data. add Email Address(emailAddress) Variable Data Adds an email address to the variable data. add Float Value(value) Variable Data Adds a float value to the variable data. add Google User(googleUser) Variable Data Adds a google user to the variable data. add Integer Value(value) Variable Data Adds an integer value to the variable data. add Resource Data(resourceData) Variable Data Adds a Resource Data value to the variable data. add Resource Reference(resourceReference) Variable Data Adds a resource reference ID to the variable data. add String Value(value) Variable Data Adds a string value to the variable data. add Timestamp Value(value) Variable Data Adds a Time Stamp value to the variable data. add Workflow Text Format(workflowTextFormat) Variable Data Adds a Workflow Text Format value to the variable data.
- Navigation Methods Method Return type Brief description pop Card() Navigation Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. pop To Named Card(cardName) Navigation Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. pop To Root() Navigation Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. print Json() String Prints the JSON representation of this object. push Card(card) Navigation Pushes the given card onto the stack. set End Navigation(endNavigation) Navigation Sets the end navigation action. update Card(card) Navigation Does an in-place replacement of the current card.
- ReturnElementErrorAction Methods Method Return type Brief description set Error Actionability(errorActionability) Return Element Error Action Sets the error actionability, an error should be actionable if it can be resolved by re-configuring the step. set Error Log(log) Return Element Error Action Sets the error log to be displayed to the end user at Workflow's activity feed. set Error Retryability(errorRetryability) Return Element Error Action Sets the error retry-ability, the flow terminates after the first try if an error is not retryable.

