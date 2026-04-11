---
title: "Method: apps.list \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/reference/rest/v2/apps/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/reference/rest/v3
source_metadata:
  url: https://developers.google.com/workspace/drive/api/reference/rest/v2/apps/list
  title: "Method: apps.list \_|\_ Google Drive \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Reference
Send feedback
Method: apps.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Lists a user's installed apps.
HTTP request
GET https://www.googleapis.com/drive/v2/apps
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
appFilterExtensions
string
A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists.
appFilterMimeTypes
string
A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists.
languageCode
string
A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format ( http://www.unicode.org/reports/tr35/) .
Request body
The request body must be empty.
Response body
A list of third-party applications which the user has installed or given access to Google Drive.
If successful, the response body contains data with the following structure:
JSON representation
{
"defaultAppIds" : [
string
] ,
"items" : [
{
object ( App )
}
] ,
"etag" : string ,
"kind" : string ,
"selfLink" : string
}
Fields
defaultAppIds[]
string
apps.list of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest).
items[]
object ( App )
The list of apps.
etag
string
The ETag of the list.
kind
string
This is always drive#appList .
selfLink
string
A link back to this list.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/drive.apps.readonly
Some scopes are restricted and require a security assessment for your app to use them. For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
