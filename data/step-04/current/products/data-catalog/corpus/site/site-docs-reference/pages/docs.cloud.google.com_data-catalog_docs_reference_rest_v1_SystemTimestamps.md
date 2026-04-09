---
title: "SystemTimestamps \_|\_ Data Catalog Documentation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/SystemTimestamps
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-catalog/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/SystemTimestamps
  title: "SystemTimestamps \_|\_ Data Catalog Documentation \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Data Catalog API methods that are related to Data Catalog search and metadata are deprecated and will be discontinued on January 30, 2026. See Transition from Data Catalog to Dataplex Universal Catalog . Methods that are related to policy tags and policy tag taxonomies are not deprecated.
Home
Technology areas
Data Catalog
Documentation
Reference
Send feedback
SystemTimestamps
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Timestamps associated with this resource in a particular system.
JSON representation
{
"createTime" : string ,
"updateTime" : string ,
"expireTime" : string
}
Fields
createTime
string ( Timestamp format)
Creation timestamp of the resource within the given system.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Timestamp of the last modification of the resource or its metadata within a given system.
Note: Depending on the source system, not every modification updates this timestamp. For example, BigQuery timestamps every metadata modification but not data or permission changes.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
expireTime
string ( Timestamp format)
Output only. Expiration timestamp of the resource within the given system.
Currently only applicable to BigQuery resources.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
