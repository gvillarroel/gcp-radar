---
title: "Method: organizations.locations.customers.workloads.getEkmConnections \_|\_\
  \ Sovereign Controls by Partners guides for partners \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest/v1/organizations.locations.customers.workloads/getEkmConnections
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest/v1/organizations.locations.customers.workloads/getEkmConnections
  title: "Method: organizations.locations.customers.workloads.getEkmConnections \_\
    |\_ Sovereign Controls by Partners guides for partners \_|\_ Google Cloud Documentation"
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
Method: organizations.locations.customers.workloads.getEkmConnections
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
JSON representation
Authorization scopes
IAM Permissions
EkmConnection
JSON representation
ConnectionState
ConnectionError
JSON representation
Gets the EKM connections associated with a workload
HTTP request
GET https://cloudcontrolspartner.googleapis.com/v1/{name=organizations/*/locations/*/customers/*/workloads/*/ekmConnections}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Format: organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/ekmConnections
Request body
The request body must be empty.
Response body
The EKM connections associated with a workload
If successful, the response body contains data with the following structure:
JSON representation
{
"name" : string ,
"ekmConnections" : [
{
object ( EkmConnection )
}
]
}
Fields
name
string
Identifier. Format: organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/ekmConnections
ekmConnections[]
object ( EkmConnection )
The EKM connections associated with the workload
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
cloudcontrolspartner.ekmconnections.get
For more information, see the IAM documentation .
EkmConnection
Details about the EKM connection
JSON representation
{
"connectionName" : string ,
"connectionState" : enum ( ConnectionState ) ,
"connectionError" : {
object ( ConnectionError )
}
}
Fields
connectionName
string
Resource name of the EKM connection in the format: projects/{project}/locations/{location}/ekmConnections/{ekm_connection}
connectionState
enum ( ConnectionState )
Output only. The connection state
connectionError
object ( ConnectionError )
The connection error that occurred if any
ConnectionState
The EKM connection state.
Enums
CONNECTION_STATE_UNSPECIFIED
Unspecified EKM connection state
AVAILABLE
Available EKM connection state
NOT_AVAILABLE
Not available EKM connection state
ERROR
Error EKM connection state
PERMISSION_DENIED
Permission denied EKM connection state
ConnectionError
Information around the error that occurred if the connection state is anything other than available or unspecified
JSON representation
{
"errorDomain" : string ,
"errorMessage" : string
}
Fields
errorDomain
string
The error domain for the error
errorMessage
string
The error message for the error
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
