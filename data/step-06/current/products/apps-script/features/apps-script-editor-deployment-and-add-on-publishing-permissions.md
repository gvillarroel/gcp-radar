---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.709Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script editor deployment and add-on publishing permissions"
feature_slug: "apps-script-editor-deployment-and-add-on-publishing-permissions"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/add-ons/overview"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
keywords:
  - "deployment"
  - "publishing"
  - "editor"
  - "script"
  - "apps"
  - "add"
  - "and"
  - "on"
---

# Apps Script editor deployment and add-on publishing permissions

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Enabled script editors (beyond owners) to publish add-ons and deploy scripts as web apps or executables for the Execution API.

## Extended Definition

Enabled script editors (beyond owners) to publish add-ons and deploy scripts as web apps or executables for the Execution API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)

## Supporting Pages

### Add-ons overview \_|\_ Google Workspace add-ons \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Try a quickstart To see how building an add-on works, try a quickstart: Node.js Google Workspace add-on quickstart Apps Script Google Workspace add-on quickstart Apps Script Editor add-on quickstart Want to see Google Workspace add-ons in action?
- Quickstarts are available for Node.js and Apps Script to build these add-ons.\n"]]
- Developers can build two types of add-ons: Google Workspace add-ons and Editor add-ons, each offering unique capabilities and functionalities.
- The Google Workspace add-ons API enables developers to automate tasks, manage deployments, and control data flow within Google Workspace.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- April 13, 2022 Feature You can now perform the following actions in the new Apps Script integrated development environment (IDE): Create test deployments for Editor Add-ons .
- Script editors (in addition to script owners) can now publish add-ons and deploy scripts as web apps or executables for the Execution API .
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: While Apps Script supports standard JSDoc for autocomplete in the editor, the Google Sheets UI has specific limitations regarding which tags and syntax are displayed in the spreadsheet's formula helper. / Multiplies the input value by 2. @param {number} input The value to multiply. @return {number} The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return input 2 ; } Advanced This section covers advanced custom function topics.
- This means that a custom function written in one spreadsheet can't be used in other spreadsheets unless you use one of the following methods: Click Extensions > Apps Script to open the script editor, then copy the script text from the original spreadsheet and paste it into the script editor of another spreadsheet.
- However, when they make a copy, they become the owner of the copy and can see the script.) Publish the script as a Sheets Editor add-on .
- If each cell required its own function call, the operation would take considerably more time, since the Apps Script server would have to download and parse the XML feed each time. / Show the title and date for the first page of posts on the Developer blog. @return Two columns of data representing posts on the Developer blog. @customfunction / function getBlogPosts () { var array = []; var url = 'https://gsuite-developers.googleblog.com/atom.xml' ; var xml = UrlFetchApp . fetch ( url ). getContentText (); var document = XmlService . parse ( xml ); var root = document . getRootElement (); var atom = XmlService . getNamespace ( 'http://www.w3.org/2005/Atom' ); var entries = document . getRootElement (). getChildren ( 'entry' , atom ); for ( var i = 0 ; i < entries . length ; i ++ ) { var title = entries [ i ]. getChild ( 'title' , atom ). getText (); var date = entries [ i ]. getChild ( 'published' , atom ). getValue (); array . push ([ title , date ]); } return array ; } These techniques can be applied to nearly any custom function that is used repeatedly throughout a spreadsheet, although the implementation details vary depending on the function's behavior.

