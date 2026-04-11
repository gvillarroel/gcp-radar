---
title: "DriveDestination \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/DriveDestination
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/DriveDestination
  title: "DriveDestination \_|\_ Google Earth Engine \_|\_ Google for Developers"
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
DriveDestination
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Configuration for a Google Drive destination includes specifying a folder and an optional filename prefix.
The folder field is a string representing the target Google Drive destination folder.
The filenamePrefix field is a string used as a prefix for each output filename, influencing the naming convention of exported files.
Configuration for a destination in Google Drive.
JSON representation
{
"folder" : string ,
"filenamePrefix" : string
}
Fields
folder
string
The Google Drive destination folder.
filenamePrefix
string
The string used as the prefix for each output filename. The filenames of the exported files will be constructed from this prefix, the coordinates of each file in a mosaic (if any), and a file extension corresponding to the file format.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-06 UTC."],[],["The configuration for Google Drive destination involves two key fields: `folder` and `filenamePrefix`. `folder` specifies the target Google Drive folder for file storage. `filenamePrefix` determines the initial part of each output file's name. The complete filename will be built by combining this prefix with file coordinates and the appropriate file extension. The provided configuration uses a JSON structure with the specified fields to achieve the destination setup.\n"]]
