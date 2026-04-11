---
title: "Integrate with Drive UI's \"New\" button \_|\_ Google Drive \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/workspace/drive/api/guides/integrate-create
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/guides/about-sdk
source_metadata:
  url: https://developers.google.com/workspace/drive/api/guides/integrate-create
  title: "Integrate with Drive UI's \"New\" button \_|\_ Google Drive \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Guides
Send feedback
Integrate with Drive UI's "New" button
Stay organized with collections
Save and categorize content based on your preferences.
When a user clicks Drive UI's "New"
button and selects an app in the
Drive UI, Drive redirects the user to that app's New URL
defined in Configure a Drive UI
integration .
Your app then receives a default set of template variables within a
state parameter. The default state
information for a New URL is:
{
"action":"create",
"folderId":" FOLDER_ID ",
"folderResourceKey":" FOLDER_RESOURCE_KEY ",
"userId":" USER_ID "
}
This output includes the following values:
create : The action being performed. The value is create when a user
clicks Drive UI's "New"
button .
FOLDER_ID : The ID of the parent folder.
FOLDER_RESOURCE_KEY : The resource key of the parent folder.
USER_ID : The profile ID that uniquely identifies the
user.
Your app must act on this request by following these steps:
Verify that the action field has a value of create .
Use the userId value to create a new session for the user. For more
information on signed-in users, see Users & new events .
Use the files.create method to
create a file resource. If folderId was set on the request, set the
parents field to the folderId value.
If folderResourceKey was set on the request, set the
X-Goog-Drive-Resource-Keys request header. For more information on
resource keys, see Access link-shared files using resource
keys .
The state parameter is URL-encoded, so your app must handle the escape
characters and parse it as JSON.
Users & new events
Drive apps should treat all "create" events as potential
sign-ins. Some users might have multiple accounts, so the user ID in the state
parameter might not match the current session. If the user ID in the state
parameter doesn't match the current session, end the current session for your
app and sign in as the requested user.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
