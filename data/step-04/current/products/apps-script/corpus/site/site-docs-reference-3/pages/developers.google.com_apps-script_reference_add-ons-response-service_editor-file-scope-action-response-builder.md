---
title: "Class EditorFileScopeActionResponseBuilder \_|\_ Apps Script \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder
  title: "Class EditorFileScopeActionResponseBuilder \_|\_ Apps Script \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Class EditorFileScopeActionResponseBuilder
Stay organized with collections
Save and categorize content based on your preferences.
EditorFileScopeActionResponseBuilder
A builder for EditorFileScopeActionResponse objects.
Methods
Method Return type Brief description
build() Editor File Scope Action Response Builds the current Editor action response.
request File Scope For Active Document() Editor File Scope Action Response Builder Requests the drive.file scope for the current active Editor document.
Detailed documentation
build()
Builds the current Editor action response.
Return
EditorFileScopeActionResponse — A validated EditorFileScopeActionResponse .
requestFileScopeForActiveDocument()
Requests the drive.file scope for the current active Editor document.
// Display a permissions dialog to the user, requesting `drive.file` scope for
// the current document on behalf of this add-on.
AddOnsResponseService . newEditorFileScopeActionResponseBuilder ()
. requestFileScopeForActiveDocument ()
. build ();
Note: To call this method, you must add the drive.file scope to the add-on's
manifest.
Return
EditorFileScopeActionResponseBuilder — This object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
