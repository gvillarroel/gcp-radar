---
title: "Class Hyperlink \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/hyperlink
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/hyperlink
  title: "Class Hyperlink \_|\_ Apps Script \_|\_ Google for Developers"
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
Class Hyperlink
Stay organized with collections
Save and categorize content based on your preferences.
Hyperlink
A Hyperlink element used in TextFormatElement .
Only available for Google Workspace add-ons that extend Google Workspace Studio.
const hyperLink = AddOnsResponseService . newHyperlink ()
. setText ( "Hyperlink_text" )
. setLink ( "https://www.google.com" );
Methods
Method Return type Brief description
set Link(link) Hyperlink Sets the destination URL of the hyperlink.
set Text(text) Hyperlink Sets the text of the hyperlink.
Detailed documentation
setLink(link)
Sets the destination URL of the hyperlink.
Parameters
Name Type Description
link String The destination URL of the hyperlink.
Return
Hyperlink — This hyperlink object, for chaining.
setText(text)
Sets the text of the hyperlink.
Parameters
Name Type Description
text String The text of the hyperlink.
Return
Hyperlink — This hyperlink object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
