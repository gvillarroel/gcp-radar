---
title: "Address common issues \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/macro-converter/address-conversion-issues
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/apps-script
source_metadata:
  url: https://developers.google.com/apps-script/guides/macro-converter/address-conversion-issues
  title: "Address common issues \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
Address common issues
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
When converting VBA to Apps Script with the Macro Converter, printing behavior might differ, with APIs converting to file output instead of direct printer output.
Features like certain triggers, Userforms, and some types of Named ranges are not automatically converted and require manual conversion or workarounds.
Manual steps are provided to recreate Userform dialogues in Apps Script and address unsupported named ranges like Tables.
This guide lists common issues you might encounter when converting Visual Basic
for Applications (VBA) code to Apps Script using the Macro
Converter.
Print files
VBA APIs that print files are automatically converted to
Apps Script, but might behave differently than the original VBA
API. The following table shows two examples:
VBA API Behavior in Apps Script
PrintOut Converts to Apps Script, but
the Apps Script API prints to a file instead of a printer.
Manually print the PDF file.
PrintToFile Converts to Apps Script.
The PDF file is saved in your MyDrive folder.
Unconverted items
The following features aren't converted by the Macro Converter and need to be
converted manually:
Some types of Triggers
Userforms
Unsupported types of Named ranges
Triggers
Two types of triggers, keyboard shortcuts and some event-based triggers, aren't
converted by the Macro Converter. In many cases, you can create these triggers
manually.
Keyboard shortcuts
To add keyboard shortcuts, follow the steps to import functions as
macros .
Event-based triggers
Some events from VBA code, like BeforeClose or BeforeSave , don't have
equivalents in Apps Script, but you might be able to create a
workaround.
For events like BeforeClose , you can create a custom menu or button to click
to perform the action that needs to take place before you close the spreadsheet.
Workarounds for the BeforeSave event aren't possible because Google Sheets automatically saves changes as you make them.
Userforms
In VBA, a
UserForm
is a window or dialog in an application's user interface (UI). The Macro
Converter doesn't convert UserForms. Manually create them in
Apps Script.
Create a user form dialogue
On your computer, open the converted file in
Sheets .
At the top, click Extensions >
** Apps Script**.
At the left of the editor next to "Files," click Add a file add
> HTML . We recommend that you give the HTML file the same name as your
original VBA UserForm.
Add the fields and information you want to appear in your form. Learn more
about HTML forms at
W3school.com .
At the left, click the Apps Script file (GS file) that has your converted
code.
If you already have an onOpen trigger in your code, update it with the
following code. If you don't have the onOpen trigger in your code, add
the following code.
function onOpen () {
SpreadsheetApp . getUi ()
. createMenu ( 'User Form' )
. addItem ( 'Show Form' , 'showForm' )
. addToUi ();
}
function showForm () {
var html = HtmlService . createHtmlOutputFromFile ( 'userform_module_name' )
. setWidth ( 100 )
. setTitle ( 'Sign-up for Email Updates' );
SpreadsheetApp . getUi () . showSidebar ( html );
}
Replace userform_module_name with the name of the HTML file you added.
At the top, click Save project save .
Switch to the Google Sheet and reload the page.
At the top of the Google Sheet, click User Form > Show Form .
Named ranges
In Excel, named ranges are names given to a single cell or range of cells.
When you convert Excel files to Sheets, certain named range types
aren't converted because they are unsupported. The following table lists common
examples:
Unsupported named ranges Description
Tables Not supported in Sheets, but has a
workaround.
To recreate this named range in Sheets, add a named range that points to the
A1 notation of the table range. Use the same name as the original named
range in your VBA code so that the converted code recognizes it.
List of ranges Not supported in Sheets.
There isn't a workaround.
Related articles
Macro Converter Google Workspace add-on overview
Determine if VBA macros are compatible
Convert VBA macros to Apps Script
Fix errors in your converted code
Watch Macro Converter tutorials
List of compatible VBA APIs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
