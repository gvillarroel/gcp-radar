---
title: "LocalizedMessage \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/LocalizedMessage
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/LocalizedMessage
  title: "LocalizedMessage \_|\_ Apps Script \_|\_ Google for Developers"
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
LocalizedMessage
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Apps Script API errors include a LocalizedMessage with translated error text if the Accept-Language header is not "English".
The LocalizedMessage is represented in JSON with fields for the locale and the translated message .
The locale field uses the specification defined in BCP 47.
JSON representation
If the Accept-Language header in the incoming request is not "English", then errors returned by the Apps Script API include this message. It contains the same error text translated to the requested locale.
JSON representation
{
"locale" : string ,
"message" : string
}
Fields
locale
string
The locale used following the specification defined at https://www.rfc-editor.org/rfc/bcp/bcp47.txt . Examples are: "en-US", "fr-CH", "es-MX"
message
string
The localized error message in the above locale.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
