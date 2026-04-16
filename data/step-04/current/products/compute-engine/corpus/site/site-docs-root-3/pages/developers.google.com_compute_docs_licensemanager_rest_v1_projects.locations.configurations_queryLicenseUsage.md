---
title: "Method: projects.locations.configurations.queryLicenseUsage \_|\_ Compute\
  \ Engine \_|\_ Google Cloud Documentation"
url: https://developers.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/queryLicenseUsage
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/compute/docs
source_metadata:
  url: https://developers.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/queryLicenseUsage
  title: "Method: projects.locations.configurations.queryLicenseUsage \_|\_ Compute\
    \ Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
Method: projects.locations.configurations.queryLicenseUsage
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
IAM Permissions
UserCountUsage
JSON representation
License Usage information for a Configuration.
HTTP request
GET https://licensemanager.googleapis.com/v1/{name=projects/*/locations/*/configurations/*}:queryLicenseUsage
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource path of the Configuration.
Query parameters
Parameters
startTime
string ( Timestamp format)
Required. The start time for retrieving the usage. If not specified, we will use the first day of the current billing period.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
Required. The end time for retrieving the usage. If not specified, we will use the last day of the current billing period.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Request body
The request body must be empty.
Response body
Message for response to get the license usage per configuration.
If successful, the response body contains data with the following structure:
JSON representation
{
// Union field details can be only one of the following:
"userCountUsage" : {
object ( UserCountUsage )
}
// End of list of possible types for union field details .
}
Fields
Union field details . Depending on the type of the configuration, one of the following will be populated. details can be only one of the following:
userCountUsage
object ( UserCountUsage )
Usage information for license types which use user-count billing.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
licensemanager.configurations.queryLicenseUsage
For more information, see the IAM documentation .
UserCountUsage
Message representing usage for license configurations which use user-count billing.
JSON representation
{
"uniqueUserCount" : integer
}
Fields
uniqueUserCount
integer
Required. Unique number of licensed users.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
