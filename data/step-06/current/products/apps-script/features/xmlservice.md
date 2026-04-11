---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.794Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "XmlService"
feature_slug: "xmlservice"
latest_feature_date: "2013-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services/quotas"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
keywords:
  - "xmlservice"
  - "replacement"
  - "old"
  - "xml"
  - "adds"
  - "as"
  - "for"
  - "the"
---

# XmlService

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Adds XmlService as the replacement for the old Xml service.

## Extended Definition

Adds XmlService as the replacement for the old Xml service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- July 09, 2013 Deprecated Deprecated the old Xml service, SoapService , and support for the JavaScript feature E4X.
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.
- EmbeddedChartBuilder now contains the methods asAreaChart() , asBarChart() , asColumnChart() , asLineChart() , asPieChart() , asScatterChart() and asTableChart() as replacements for calls to setChartType() .

### Quotas for Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Quotas are set at different levels for consumer/G Suite free edition and Google Workspace accounts, are per user, and reset 24 hours after the first request.
- Monitor quota usage To monitor your script's quota consumption and execution health, use the following methods: Email quota : Use MailApp.getRemainingDailyQuota() to check the number of remaining email recipients you can send to for the rest of the day.
- After you convert from a free trial account to a paid subscription, your account limits automatically increase when both of the following are true: Your domain has cumulatively paid at least USD $100 (or equivalent).

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- If each cell required its own function call, the operation would take considerably more time, since the Apps Script server would have to download and parse the XML feed each time. / Show the title and date for the first page of posts on the Developer blog. @return Two columns of data representing posts on the Developer blog. @customfunction / function getBlogPosts () { var array = []; var url = 'https://gsuite-developers.googleblog.com/atom.xml' ; var xml = UrlFetchApp . fetch ( url ). getContentText (); var document = XmlService . parse ( xml ); var root = document . getRootElement (); var atom = XmlService . getNamespace ( 'http://www.w3.org/2005/Atom' ); var entries = document . getRootElement (). getChildren ( 'entry' , atom ); for ( var i = 0 ; i < entries . length ; i ++ ) { var title = entries [ i ]. getChild ( 'title' , atom ). getText (); var date = entries [ i ]. getChild ( 'published' , atom ). getValue (); array . push ([ title , date ]); } return array ; } These techniques can be applied to nearly any custom function that is used repeatedly throughout a spreadsheet, although the implementation details vary depending on the function's behavior.
- For example, the DOUBLE() function shown earlier can be rewritten to accept a single cell or range of cells as follows: / Multiplies the input value by 2. @param {number Array<Array<number>>} input The value or range of cells to multiply. @return The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return Array . isArray ( input ) ? input . map ( row = > row . map ( cell = > cell 2 )) : input 2 ; } This approach uses the map method of JavaScript's Array object on the two-dimensional array of cells to get each row, then for each row, it uses map again to return double each cell's value.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Note: While Apps Script supports standard JSDoc for autocomplete in the editor, the Google Sheets UI has specific limitations regarding which tags and syntax are displayed in the spreadsheet's formula helper. / Multiplies the input value by 2. @param {number} input The value to multiply. @return {number} The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return input 2 ; } Advanced This section covers advanced custom function topics.

