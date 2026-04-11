---
title: "Method: organizations.locations.customers.workloads.violations.list \_|\_\
  \ Sovereign Controls by Partners guides for partners \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest/v1/organizations.locations.customers.workloads.violations/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest/v1/organizations.locations.customers.workloads.violations/list
  title: "Method: organizations.locations.customers.workloads.violations.list \_|\_\
    \ Sovereign Controls by Partners guides for partners \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Sovereign Controls by Partners
Sovereign Partners
Reference
Send feedback
Method: organizations.locations.customers.workloads.violations.list
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
Lists Violations for a workload Callers may also choose to read across multiple Customers or for a single customer as per AIP-159 by using '-' (the hyphen or dash character) as a wildcard character instead of {customer} & {workload}. Format: organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}
HTTP request
GET https://cloudcontrolspartner.googleapis.com/v1/{parent=organizations/*/locations/*/customers/*/workloads/*}/violations
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent resource Format organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of customers row to return. The service may return fewer than this value. If unspecified, at most 10 customers will be returned.
pageToken
string
Optional. A page token, received from a previous violations.list call. Provide this to retrieve the subsequent page.
filter
string
Optional. Filtering results
orderBy
string
Optional. Hint for how to order the results
interval
object ( Interval )
Optional. Specifies the interval for retrieving violations. if unspecified, all violations will be returned.
Request body
The request body must be empty.
Response body
Response message for list customer violation requests
If successful, the response body contains data with the following structure:
JSON representation
{
"violations" : [
{
object ( Violation )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
violations[]
object ( Violation )
List of violation
nextPageToken
string
A token that can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
unreachable[]
string
Workloads that could not be reached due to permission errors or any other error. Ref: https://google.aip.dev/217
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudcontrolspartner.violations.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
