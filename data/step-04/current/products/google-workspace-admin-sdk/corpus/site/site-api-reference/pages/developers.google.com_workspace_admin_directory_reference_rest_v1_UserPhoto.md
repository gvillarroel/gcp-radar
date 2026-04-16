---
title: "UserPhoto \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/UserPhoto
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/admin/directory/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/UserPhoto
  title: "UserPhoto \_|\_ Admin console \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Admin console
Reference
Send feedback
UserPhoto
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
{
"id" : string ,
"primaryEmail" : string ,
"kind" : string ,
"etag" : string ,
"photoData" : string ,
"mimeType" : string ,
"width" : integer ,
"height" : integer
}
Fields
id
string
The ID the API uses to uniquely identify the user.
primaryEmail
string
The user's primary email address.
kind
string
The type of the API resource. For Photo resources, this is admin#directory#user#photo .
etag
string
ETag of the resource.
photoData
string ( bytes format)
The user photo's upload data in web-safe Base64 format in bytes. This means:
The slash (/) character is replaced with the underscore (_) character.
The plus sign (+) character is replaced with the hyphen (-) character.
The equals sign (=) character is replaced with the asterisk (*).
For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing.
Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels.
A base64-encoded string.
mimeType
string
The MIME type of the photo. Allowed values are JPEG , PNG , GIF , BMP , TIFF , and web-safe base64 encoding.
width
integer
Width of the photo in pixels.
height
integer
Height of the photo in pixels.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-25 UTC."],[],[]]
