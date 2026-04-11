---
title: "Macro Converter add-on overview \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/macro-converter/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/apps-script
source_metadata:
  url: https://developers.google.com/apps-script/guides/macro-converter/overview
  title: "Macro Converter add-on overview \_|\_ Apps Script \_|\_ Google for Developers"
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
Macro Converter add-on overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Macro Converter add-on helps convert Excel files with VBA code to Google Sheets files and Apps Script.
To use the Macro Converter, you need a Google Workspace Enterprise Plus or Education Plus account and some proficiency with scripting languages.
The conversion process involves generating a compatibility report, updating VBA code based on the report, and then converting and fixing errors in the resulting Apps Script code.
The Macro Converter is an add-on that makes it easier
to convert Excel files that have Visual Basic for Applications (VBA) code to
Sheets files and Apps Script. Use the Macro
Converter add-on to determine the compatibility of your
files and automatically convert them.
Only use the Macro Converter add-on with Excel files.
We support file formats from Excel 97 and later.
Before you begin
To use the Macro Converter:
You must have a Google Workspace Enterprise Plus account or a
Google Workspace for Education Plus account.
You should have some proficiency with Excel or Sheets and
scripting languages (VBA or Apps Script).
You should be able to read and understand basic scripts.
Install the Macro Converter add-on
On your computer, go to the Macro Converter add-on
on Google Workspace Marketplace .
At the top right, click Install > Continue > Allow .
Installation might take several seconds. Once the
add-on is installed, click
Done .
If you're a Google Workspace administrator, install the Macro Converter
add-on in your organization's domain and choose who can
use the app. See Install Google Workspace Marketplace apps in your
domain .
Once installed, find the Macro Converter add-on in Google Drive , on the right side
panel. If you don't see the side panel, at the bottom right, click Show side
panel chevron_left .
How to use the Macro Converter
Generate a compatibility report for the files you want to convert . See
Determine if VBA macros are compatible with Apps Script .
Update your VBA code using the information from your compatibility report .
If your code is fully compatible, you might not need to make changes.
If your VBA code has APIs that won't convert to Apps Script
code, the report offers workarounds in Apps Script.
Implement the Apps Script workarounds after you convert
your files, but if you're more familiar with VBA you might want to create
and implement VBA workarounds before you convert your files.
After you make changes to your VBA code, run the compatibility report again .
This step helps confirm the increased compatibility of your files and flags
any additional updates that should be made.
Repeat steps 2 and 3 as needed . These steps maximize the compatibility of
your files to reduce the amount of work needed after you convert them. You
can proceed to the next step if you plan to finish applying your workarounds
after you convert your files.
Convert your files .
Fix errors .
You might need to make adjustments to your new Apps Script
code to make sure your code works as intended.
Address common issues .
You might need to manually create items, like VBA UserForms, in
Apps Script.
Related articles
Determine if VBA macros are compatible
Convert VBA macros to Apps Script
Fix errors in your converted code
Address common issues
Watch Macro Converter tutorials
List of compatible VBA APIs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
