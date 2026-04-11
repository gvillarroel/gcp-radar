---
title: "Authorization for Google Services \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/services/authorization
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/apps-script/overview
source_metadata:
  url: https://developers.google.com/apps-script/guides/services/authorization
  title: "Authorization for Google Services \_|\_ Apps Script \_|\_ Google for Developers"
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
Authorization for Google Services
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Apps Script needs user authorization to access private data from Google services.
Authorization scopes are determined automatically by scanning the script code.
Users can revoke a script's access to their data through their Google account settings.
The user identity a script runs with and the data it can access vary depending on the type of script and how it's run.
You can use JsDoc annotations like @OnlyCurrentDoc to limit authorization requests for certain add-ons or scripts.
Google Apps Script requires user authorization to access private data from
built-in Google services or
advanced Google services .
How authorization for Google Services works
When a script requires access to Google services, it follows this general
process:
Detection : Apps Script scans the script to identify which
services it uses (for example, SpreadsheetApp or GmailApp ).
Scope determination : Based on the scan, Apps Script
identifies a set of OAuth scopes needed for the
script to run.
Authorization check : When the script is run, it checks if the user has
already authorized those scopes.
User prompt : If authorization is missing, a dialog appears asking the
user to grant permission.
Execution : After the script is authorized, it can access the requested data for that user.
Permissions and types of scripts
The user identity that a script runs with — and thus the data it can access —
varies based on the scenario in which the script is run, as shown in the
following table.
Type of script
Script runs as...
Standalone ,
Google Workspace add-on , or
bound to Google Docs, Google Sheets, Google Slides, or Google Forms
User at the keyboard
Custom function in a spreadsheet
Anonymous user ;
however, quota limits
count against user at the keyboard
Web app or
Google Sites gadget
User at the keyboard or script owner, dependent on
options selected
when deploying the app
Installable trigger
User who created the trigger
Grant access rights
Apps Script determines the authorization scopes (like access to
your Sheets
files or Gmail) automatically, based on a scan of the code. Code
that is commented out can still generate an authorization request. If a script
needs authorization, an authorization dialog appears when it is run.
Scripts that you have previously authorized also ask for additional
authorization if a code change adds new services. Scripts may not request
authorization if you access the script as a web app that runs under
the script owner's user identity .
Warning: Web apps and other scripts that use sensitive scopes are subject to
review by Google. Users attempting to authorize such apps may see a warning
screen saying the app is unverified by Google. See
OAuth client verification
for details.
Revoke access rights
To revoke a script's access to your data, follow these steps:
Visit the Security section of your Google
Account .
Under Your connections to third-party apps & services , click See all
connections .
Select the script or app you want to revoke access for.
Click Delete all connections you have with APP_NAME , then
click Confirm .
Limit scope to the current document
If you're building an
add-on or other script
that uses the Spreadsheet service ,
Document service ,
Slides service , or
Forms service , you can force the authorization
dialog to ask only for access to files in which the add-on or script is used,
rather than all of a user's spreadsheets, documents, or forms. To do so, include
the following JSDoc annotation in a file-level comment:
/**
* @OnlyCurrentDoc
*/
An opposing annotation, @NotOnlyCurrentDoc , is available if your script
includes a library that declares
@OnlyCurrentDoc , but the primary script actually requires access to more than
the current file.
Authorization lifecycle for add-ons
Add-ons for Sheets,
Docs, Slides, and Forms
generally follow the same authorization model as scripts that are
bound to a document. In certain
circumstances, however, their onOpen(e) and onEdit(e) functions run in a
no-authorization mode that presents some additional complications. For more
information, see the
guide to the add-ons authorization lifecycle .
OAuth application user limits
Applications that use OAuth to access Google user data, including Apps
Script projects, are subject to authorization limits. See
OAuth application user limits
for details.
Re-authentication behavior with Apps Script
Apps Script does not enforce the
re-authentication frequency that
is configured in Google Cloud service settings. This is because
Apps Script can run automatically using triggers, which operate
without direct user interaction. These automated executions don't trigger the
re-authentication prompts. Your Apps Script application doesn't
automatically ask you to re-authenticate after the specified time period
(for example, 12 hours).
Set explicit scopes in the manifest
Apps Script automatically determines required scopes by scanning
the code for function calls. If you need more control, you can explicitly set
the scopes in the project manifest ( appsscript.json ). This is recommended for
published scripts to ensure that you're using the minimum required permissions.
For instructions, see Set explicit scopes .
Troubleshooting
"Authorization required" error when running a trigger : Triggers must be
authorized by the user who created them. If you add code that requires new
permissions, you must manually run a function in the script editor once to
trigger the authorization dialog.
Scopes not updating : If you've updated your code but the authorization
dialog doesn't reflect the changes, try saving the project and refreshing
the editor. If you are using explicit scopes in the manifest, ensure you've
added the new scope to the oauthScopes array.
"This app is blocked" or unverified app warning : This occurs if your
script uses sensitive or restricted scopes and hasn't been verified by
Google. See OAuth client verification .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
