---
title: "Content Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/content
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/content
  title: "Content Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Content Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Content Service allows scripts to serve text in various formats like text, XML, or JSON.
The ContentService class is used for returning text content from a script.
The MimeType enum defines the various mime types that can be served from a script.
The TextOutput object represents the text content that can be served from a script.
Content
This service allows scripts to serve text in various forms, such as text,
XML, or JSON. See also the guide to
Content Service . If you
deploy the following script as a web app ,
you will see "Hello, world!" in the browser:
function doGet() {
return ContentService.createTextOutput('Hello, world!');
} Classes
Name Brief description
Content Service Service for returning text content from a script.
Mime Type An enum for mime types that can be served from a script.
Text Output A TextOutput object that can be served from a script.
ContentService
Properties
Property Type Description
Mime Type Mime Type
Methods
Method Return type Brief description
create Text Output() Text Output Create a new Text Output object.
create Text Output(content) Text Output Create a new Text Output object that can serve the given content.
MimeType
Properties
Property Type Description
CSV Enum CSV Mime Type
ICAL Enum ICAL Mime Type
JAVASCRIPT Enum JAVASCRIPT Mime Type
JSON Enum JSON Mime Type
TEXT Enum TEXT Mime Type
VCARD Enum VCARD Mime Type
TextOutput
Methods
Method Return type Brief description
append(addedContent) Text Output Appends new content to the content that will be served.
clear() Text Output Clears the current content.
download As File(filename) Text Output Tells browsers to download rather than display this content.
get Content() String Gets the content that will be served.
get File Name() String Returns the file name to download this file as, or null if it should be displayed rather than
downloaded.
get Mime Type() Mime Type Get the mime type this content will be served with.
set Content(content) Text Output Sets the content that will be served.
set Mime Type(mimeType) Text Output Sets the mime type for content that will be served.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
