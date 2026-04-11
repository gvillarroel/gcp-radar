---
title: "CloudStorageDestination \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/CloudStorageDestination
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/CloudStorageDestination
  title: "CloudStorageDestination \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
CloudStorageDestination
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Configuration for a Google Cloud Storage destination requires specifying the bucket, filename prefix, and optional permissions and bucket CORS URIs.
The bucket field is a string representing the Google Cloud Storage destination bucket.
The filenamePrefix string is used as the prefix for each output file, determining the structure of exported filenames.
Optional permissions can be set on exported tiles, defaulting to DEFAULT_OBJECT_ACL if unspecified.
bucketCorsUris is an optional list of URIs to whitelist for CORS settings on the bucket, enabling website access via JavaScript.
Configuration for a destination in Google Cloud Storage.
JSON representation
{
"bucket" : string ,
"filenamePrefix" : string ,
"permissions" : enum ( TilePermissions ) ,
"bucketCorsUris" : [
string
]
}
Fields
bucket
string
The Google Cloud Storage destination bucket.
filenamePrefix
string
The string used as the prefix for each output file. A trailing "/" indicates a path. The filenames of the exported files will be constructed from this prefix, the coordinates of each file in a mosaic (if any), and a file extension corresponding to the file format.
permissions
enum ( TilePermissions )
Specifies the permissions to set on the exported tiles. If unspecified, defaults to DEFAULT_OBJECT_ACL.
bucketCorsUris[]
string
Optional list of URIs to whitelist for the CORS settings on the bucket. Used to enable websites to access exported files via JavaScript.
TilePermissions
Permissions to set on exported map tiles.
Enums
TILE_PERMISSIONS_UNSPECIFIED
Unspecified.
PUBLIC
Write public tiles. Requires the caller to be an OWNER of the bucket.
DEFAULT_OBJECT_ACL
Write tiles using the bucket's default object ACL.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-06 UTC."],[],[]]
